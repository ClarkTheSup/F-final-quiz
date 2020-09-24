import React, { Component } from 'react';
import Trainee from '../traineeList/trainee/Trainee';
import Trainer from '../trainerList/trainer/Trainer';
import './Group.scss';

class Group extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputVisible: false,
  //     inputValue: '',
  //   };
  // }
  //
  // showInput = () => {
  //   this.setState({ inputVisible: true }, () => this.input.focus());
  // };
  //
  // handleInputChange = (e) => {
  //   this.setState({ inputValue: e.target.value });
  // };
  //
  // handleInputConfirm = () => {
  //   const { inputValue } = this.state;
  //   if (inputValue) {
  //     const url = `http://localhost:8080/trainee/groups/${this.props.group_index}/${inputValue}`;
  //     const params = {
  //       method: 'POST',
  //     };
  //     fetch(url, params).then(() => this.props.getgroupList());
  //   }
  //
  //   this.setState({
  //     inputVisible: false,
  //     inputValue: '',
  //   });
  // };
  //
  // saveInputRef = (input) => {
  //   this.input = input;
  // };

  render() {
    console.log(this.props.group);
    return (
      <div className="group">
        {/* <div className="group-header"> */}
        {/*  {this.state.inputVisible && ( */}
        {/*    <Input */}
        {/*      type="text" */}
        {/*      className="group-name" */}
        {/*      value={this.state.inputValue} */}
        {/*      onChange={this.handleInputChange} */}
        {/*      onBlur={this.handleInputConfirm} */}
        {/*      onPressEnter={this.handleInputConfirm} */}
        {/*    /> */}
        {/*  )} */}
        {/*  {!this.state.inputVisible && <Tag onClick={this.showInput}>{this.props.group.name}</Tag>} */}
        {/* </div> */}
        <header className="header">
          <span className="group-name">{this.props.group.name}</span>
          <div className="trainer-list">
            {this.props.group.trainerList.map((trainer) => (
              <Trainer key={trainer.id} trainerId={trainer.id} trainerName={trainer.name} />
            ))}
          </div>
        </header>
        <div className="main">
          {this.props.group.traineeList.map((trainee) => (
            <Trainee key={trainee.id} traineeId={trainee.id} traineeName={trainee.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
