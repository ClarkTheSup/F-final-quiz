import React, { Component } from 'react';
import GroupList from '../components/groupList/GroupList';
import StudentList from '../components/studentList/StudentList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
