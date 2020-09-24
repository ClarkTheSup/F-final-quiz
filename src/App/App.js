import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import GroupList from '../components/groupList/GroupList';
import TraineeList from '../components/traineeList/TraineeList';
import TrainerList from '../components/trainerList/TrainerList';
import TraineeForm from '../components/traineeList/traineeForm/TraineeForm';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <GroupList /> */}
          <Route exact path="/" component={TrainerList} />
          <Route exact path="/" component={TraineeList} />
          <Switch>
            <Route exact path="/trainee/form" component={TraineeForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
