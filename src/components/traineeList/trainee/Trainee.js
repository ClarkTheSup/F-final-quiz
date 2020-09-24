import React, { Component } from 'react';
import './Trainee.scss';

class Trainee extends Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="trainee" onClick={this.props.showDeleteConfirm}>
        {this.props.traineeId}.{this.props.traineeName}
      </div>
    );
  }
}

export default Trainee;
