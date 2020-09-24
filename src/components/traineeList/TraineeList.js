import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './TraineeList.scss';
import axios from 'axios';
import Trainee from './trainee/Trainee';

class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    this.getUngroupedTrainees();
  }

  getUngroupedTrainees = async () => {
    const url = 'http://localhost:8080/trainees?grouped=false';
    const response = await axios.get(url);
    const trainees = await response.data;
    this.setState({ trainees });
  };

  deleteTrainee = async (traineeId) => {
    const url = `http://localhost:8080/trainees/${traineeId}`;
    await axios.delete(url);
  };

  showConfirm = (traineeId, deleteTrainee, getUngroupedTrainees) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确认删除吗',
      async onOk() {
        await deleteTrainee(traineeId);
        await getUngroupedTrainees();
      },
    });
  };

  render() {
    return (
      <div className="trainee-list">
        <header className="header">
          <span className="header-title">学员列表</span>
        </header>
        <main className="main">
          {this.state.trainees.map((trainee) => (
            <Trainee
              key={trainee.id}
              traineeId={trainee.id}
              traineeName={trainee.name}
              showDeleteConfirm={() =>
                this.showConfirm(trainee.id, this.deleteTrainee, this.getUngroupedTrainees)
              }
            />
          ))}
          <Link to="/trainee/form" className="trainee-addition-plus">
            + 添加学员
          </Link>
        </main>
      </div>
    );
  }
}

export default TraineeList;
