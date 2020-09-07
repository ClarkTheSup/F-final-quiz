import React, { Component } from 'react';
import './GroupList.scss';

class GroupList extends Component {
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
      <div className="GroupList">
        <div className="Navigator">
          <div>
            <span>分组列表</span>
          </div>
          <div>
            <button type="button" onClick={this.handleClick}>
              分组学员
            </button>
          </div>
        </div>
        <div className="Main">
          <div>{this.state.students}</div>
          <div className="team">
            <div className="up">Team 1</div>
            <div className="down">....</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupList;
