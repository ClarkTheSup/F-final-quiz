import React, { Component } from 'react';
import './Navigator.scss';

class Navigator extends Component {
  render() {
    return (
      <div className="Navigator">
        <div>
          <span>分组列表</span>
        </div>
        <div>
          <button type="button">分组学员</button>
        </div>
      </div>
    );
  }
}

export default Navigator;
