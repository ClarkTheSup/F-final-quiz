import React, { Component } from 'react';
import GroupList from '../components/groupList/GroupList';
import TraineeList from '../components/traineeList/TraineeList';
import TrainerList from '../components/trainerList/TrainerList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
