import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

class NormalSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const userName = this.props.form.getFieldValue("username");
        const passWord = this.props.form.getFieldValue("password");
        this.setState({ 
          user: {
            username: userName,
            password: passWord
          },
          submitted: true });
        if(this.state.submitted){
          console.log(this.state);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [
              { required: true, message: "Please input username you want!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
          >
            Signup
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignupForm = Form.create()(NormalSignupForm);

export default SignupForm;