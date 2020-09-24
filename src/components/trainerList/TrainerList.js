import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import './TrainerList.scss';
import Trainee from '../trainee/Trainee';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
      inputVisible: false,
      inputValue: '',
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
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
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      const url = `http://localhost:8080/student/${inputValue}`;
      const params = {
        method: 'POST',
      };
      fetch(url, params).then(() => this.getStudents());
    }

    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  render() {
    return (
      <div className="StudentList">
        <div className="Navigator">
          <div>
            <span className="StudentList-Navigator-Left">学员列表</span>
          </div>
        </div>
        <div className="Main">
          {this.state.students?.map((student) => (
            <Trainee key={student.id} student_id={student.id} student_name={student.name} />
          ))}
          <div className="addStudent">
            {this.state.inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                className="tag-input"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!this.state.inputVisible && (
              <Tag className="site-tag-plus" onClick={this.showInput}>
                + 添加学员
              </Tag>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TrainerList;
