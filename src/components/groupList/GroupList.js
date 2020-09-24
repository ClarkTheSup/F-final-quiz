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
    const groups = await axios.get(url);
    this.setState({ groups });
  };

  createGroups = () => {
    const url = 'http://localhost:8080/groups';
    axios.post(url);
  };

  render() {
    return (
      <div className="groups">
        <header className="header">
          <span className="header-title">分组列表</span>
          <button type="button" className="header-group" onClick={this.createGroups}>
            分组学员
          </button>
        </header>
        <main className="Main">
          {this.state.groups?.map((group, index) => (
            <Group group={group} index={index} getGroups={this.getGroups} />
          ))}
        </main>
      </div>
    );
  }
}

export default GroupList;
