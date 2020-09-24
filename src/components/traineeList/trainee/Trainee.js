import React, { Component } from 'react';
import './Trainee.scss';

class Trainee extends Component {
  render() {
    return (
      <div className="trainee">
        <span>
          {this.props.traineeId}.{this.props.traineeName}
        </span>
      </div>
    );
  }
}

export default Trainee;
