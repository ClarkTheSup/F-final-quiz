import React, { Component } from 'react';
import './Trainer.scss';

// TODO Feedback: 考虑如何去实现Trainer和Trainee的复用
class Trainer extends Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="trainer" onClick={this.props.showDeleteConfirm}>
        {this.props.trainerId}.{this.props.trainerName}
      </div>
    );
  }
}

export default Trainer;
