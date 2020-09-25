import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class TraineeForm extends Component {
  onFinish = async (trainee) => {
    const url = 'http://localhost:8080/trainees';
    await axios.post(url, trainee);
    window.alert('提交成功！');
  };

  goBack = () => {
    // TODO Feedback: 建议用React Router去控制history
    window.history.back();
  };

  render() {
    // TODO Feedback: rules可以抽到单独的方法
    return (
      <Form name="basic" onFinish={this.onFinish}>
        <Form.Item
          label="姓名"
          name="name"
          rules={[
            {
              required: true,
              message: '姓名不能为空',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              required: true,
              message: '邮箱不能为空',
            },
            {
              type: 'email',
              message: '邮箱格式不正确',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="办公室"
          name="office"
          rules={[
            {
              required: true,
              message: '办公室不能为空',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Zoom Id"
          name="zoomId"
          rules={[
            {
              required: true,
              message: 'Zoom Id不能为空',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button type="primary" onClick={this.goBack}>
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default TraineeForm;
