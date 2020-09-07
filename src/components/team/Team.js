import React, { Component } from 'react';
import Student from '../student/Student';
import './Team.scss';

class Team extends Component {
  render() {
    const teamId = this.props.team_id + 1;
    return (
      <div className="team">
        <div className="team-up">
          <span>Team {teamId}</span>
        </div>
        <div className="team-down">
          {this.props.team.studentList.map((student) => (
            <Student key={student.id} student_id={student.id} student_name={student.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
