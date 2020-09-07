import React, { Component } from 'react';
import './StudentList.scss';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: null };
  }

  handleClick = () => {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
    };
    fetch(url, params).then(() => console.log('ok'));
  };

  render() {
    return (
      <div className="StudentList">
        <div className="Navigator">
          <div>
            <span>学员列表</span>
          </div>
        </div>
        <div className="Main">
          <div className="student">{this.state.students}</div>
        </div>
      </div>
    );
  }
}

export default StudentList;
