import React, { Component } from 'react';
import axios from 'axios';
import Group from '../group/Group';
import './GroupList.scss';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups = async () => {
    const url = 'http://localhost:8080/groups';
    const response = await axios.get(url);
    const groups = response.data;
    this.setState({ groups });
  };

  createGroups = async () => {
    const url = 'http://localhost:8080/groups/auto-grouping';
    await axios.post(url);
  };

  fetchGroups = async () => {
    await this.createGroups();
    await this.getGroups();
    global.location.reload();
  };

  render() {
    return (
      <div className="group-list">
        <header className="header">
          <span className="header-title">分组列表</span>
          <button type="button" className="header-group" onClick={this.fetchGroups}>
            分组学员
          </button>
        </header>
        <main className="main">
          {this.state.groups.map((group, groupIndex) => (
            <Group group={group} groupIndex={groupIndex} getGroups={this.getGroups} />
          ))}
        </main>
      </div>
    );
  }
}

export default GroupList;
