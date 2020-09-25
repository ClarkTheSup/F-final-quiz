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
    // TODO Feedback: 建议把数据请求提取到单独的service
    const url = 'http://localhost:8080/groups';
    const response = await axios.get(url);
    const groups = response.data;
    this.setState({ groups });
  };

  createGroups = async () => {
    const url = 'http://localhost:8080/groups/auto-grouping';
    await axios.post(url);
  };

  // TODO Feedback: fetchGroups命名有歧义
  fetchGroups = async () => {
    await this.createGroups();
    await this.getGroups();
    // TODO Feedback: 不建议采用刷新页面的方式，
    //  本质React希望管理state的状态来控制render，这里是数据管理的问题
    global.location.reload();
  };

  render() {
    return (
      <div className="group-list">
        <header className="header">
          {/* // TODO feedback: 既然是title是否h*标签更合适呢？ */}
          <span className="header-title">分组列表</span>
          <button type="button" className="header-group" onClick={this.fetchGroups}>
            分组学员
          </button>
        </header>
        <main className="main">
          {this.state.groups.map((group, groupIndex) => (
            // TODO Feedback: 不需要groupIndex
            <Group group={group} groupIndex={groupIndex} getGroups={this.getGroups} />
          ))}
        </main>
      </div>
    );
  }
}

export default GroupList;
