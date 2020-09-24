import React, { Component } from 'react';
import './Trainer.scss';

class Trainer extends Component {
  render() {
    return (
      <div className="trainer">
        <span>
          {this.props.trainerId}.{this.props.trainerName}
        </span>
      </div>
    );
  }
}

export default Trainer;
