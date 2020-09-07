import React, { Component } from 'react';
import './Main.scss';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = { students: null };
  }

  componentDidMount() {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
    };
    fetch(url, params).then((res) => this.setState({ students: res.data }));
  }

  render() {
    return (
      <div className="Main">
        <div>{this.state.students}</div>
        <div className="team">
          <div className="up">Team 1</div>
          <div className="down">....</div>
        </div>
      </div>
    );
  }
}

export default Navigator;
