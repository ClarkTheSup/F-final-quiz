import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import Trainee from '../trainee/Trainee';
import './Group.scss';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputValue: '',
    };
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      const url = `http://localhost:8080/student/teams/${this.props.team_index}/${inputValue}`;
      const params = {
        method: 'POST',
      };
      fetch(url, params).then(() => this.props.getTeamList());
    }

    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = (input) => {
    this.input = input;
  };

  render() {
    if (this.props.team.studentList.length <= 0) {
      return null;
    }
    return (
      <div className="team">
        <div className="team-up">
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
          {!this.state.inputVisible && <Tag onClick={this.showInput}>{this.props.team.name}</Tag>}
        </div>
        <div className="team-down">
          {this.props.team.studentList.map((student) => (
            <Trainee key={student.id} student_id={student.id} student_name={student.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
