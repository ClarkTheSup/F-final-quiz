import React, { Component } from 'react';
import './StudentList.scss';
import Student from '../student/Student';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: null };
  }

  componentDidMount() {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => this.setState({ students: data }));
  }

  render() {
    return (
      <div className="StudentList">
        <div className="Navigator">
          <div>
            <span>学员列表</span>
          </div>
        </div>
        <div className="Main">
          {this.state.students?.map((student) => (
            <Student key={student.id} student_id={student.id} student_name={student.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
