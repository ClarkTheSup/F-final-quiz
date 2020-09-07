import React, { Component } from 'react';
import './Student.scss';

class Student extends Component {
  render() {
    return (
      <div className="student">
        <span>
          {this.props.student_id}.{this.props.student_name}
        </span>
      </div>
    );
  }
}

export default Student;
