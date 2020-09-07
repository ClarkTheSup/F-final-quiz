import React, { Component } from 'react';
import Team from '../team/Team';
import './TeamList.scss';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: null,
    };
  }

  componentDidMount() {
    this.getTeamList();
  }

  getTeamList = () => {
    const url = 'http://localhost:8080/student/teams';
    const params = {
      method: 'GET',
    };
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ teams: data });
      });
  };

  createTeamList = () => {
    const url = 'http://localhost:8080/student/teams';
    const params = {
      method: 'POST',
    };
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ teams: data });
      });
  };

  handleClick = () => {
    this.createTeamList();
  };

  render() {
    return (
      <div className="TeamList">
        <div className="Navigator">
          <div>
            <span className="left">分组列表</span>
          </div>
          <div>
            <button type="button" className="right" onClick={this.handleClick}>
              分组学员
            </button>
          </div>
        </div>
        <div className="Main">
          {this.state.teams?.map((team, index) => (
            <Team team={team} team_index={index} getTeamList={this.getTeamList} />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamList;
