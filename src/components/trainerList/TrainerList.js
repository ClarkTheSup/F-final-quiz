import React, { Component } from 'react';
import axios from 'axios';
import { Tag, Input, Modal } from 'antd';
import './TrainerList.scss';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Trainer from './trainer/Trainer';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      inputVisible: false,
      inputValue: '',
    };
  }

  componentDidMount() {
    this.getUngroupedTrainers();
  }

  getUngroupedTrainers = async () => {
    const url = 'http://localhost:8080/trainers?grouped=false';
    const response = await axios.get(url);
    const trainers = await response.data;
    this.setState({ trainers });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => document.getElementById('trainer-input').focus());
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleInputConfirm = async () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      await this.createTrainer(inputValue);
      await this.getUngroupedTrainers();
    }
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  createTrainer = async (trainerName) => {
    const url = 'http://localhost:8080/trainers';
    const trainer = { name: trainerName };
    await axios.post(url, trainer);
  };

  deleteTrainer = async (trainerId) => {
    const url = `http://localhost:8080/trainers/${trainerId}`;
    await axios.delete(url);
  };

  showConfirm = (trainerId, deleteTrainer, getUngroupedTrainers) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确认删除吗',
      async onOk() {
        await deleteTrainer(trainerId);
        await getUngroupedTrainers();
      },
    });
  };

  render() {
    return (
      <div className="trainer-list">
        <header className="header">
          <span className="traineeList-Navigator-Left">讲师列表</span>
        </header>
        <main className="main">
          {this.state.trainers.map((trainer) => (
            <Trainer
              key={trainer.id}
              trainerId={trainer.id}
              trainerName={trainer.name}
              showDeleteConfirm={() =>
                this.showConfirm(trainer.id, this.deleteTrainer, this.getUngroupedTrainers)
              }
            />
          ))}
          <div className="trainer-addition">
            {this.state.inputVisible && (
              <Input
                type="text"
                className="trainer-addition-tag"
                id="trainer-input"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!this.state.inputVisible && (
              <Tag className="trainer-addition-plus" onClick={this.showInput}>
                + 添加讲师
              </Tag>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default TrainerList;
