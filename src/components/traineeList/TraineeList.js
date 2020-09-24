import React, { Component } from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
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

  showTraineeForm = () => {};

  // createTrainee = async (traineeName) => {
  //   const url = 'http://localhost:8080/trainees';
  //   const trainee = { name: traineeName };
  //   await axios.post(url, trainee);
  // };

  render() {
    return (
      <div className="trainee-list">
        <header className="header">
          <span className="header-title">学员列表</span>
        </header>
        <main className="main">
          {this.state.trainees.map((trainee) => (
            <Trainee key={trainee.id} traineeId={trainee.id} traineeName={trainee.name} />
          ))}
          <Tag className="trainee-addition-plus" onClick={this.showTraineeForm}>
            <Link to="/trainee/form">+ 添加学员</Link>
          </Tag>
        </main>
      </div>
    );
  }
}

export default TraineeList;
