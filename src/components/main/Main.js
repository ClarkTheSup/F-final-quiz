import React, { Component } from 'react';
import './Navigator.scss';

class Navigator extends Component {
  handleClick = () => {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
    };
    fetch(url, params).then(() => console.log('ok'));
  };

  render() {
    return (
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
    );
  }
}

export default Navigator;
