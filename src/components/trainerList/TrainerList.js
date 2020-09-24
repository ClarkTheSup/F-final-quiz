import React, { Component } from 'react';
import axios from 'axios';
import { Tag, Input } from 'antd';
import './TrainerList.scss';
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
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleInputConfirm = () => {
    // const { inputValue } = this.state;

    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  render() {
    console.log(this.state.trainers);
    return (
      <div className="TrainerList">
        <header className="header">
          <span className="StudentList-Navigator-Left">讲师列表</span>
        </header>
        <main className="main">
          {this.state.trainers.map((trainer) => (
            <Trainer key={trainer.id} trainerId={trainer.id} trainerName={trainer.name} />
          ))}
          <div className="trainer-addition">
            {this.state.inputVisible && (
              <Input
                type="text"
                className="trainer-addition-tag"
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
