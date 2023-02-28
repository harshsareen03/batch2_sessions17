import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Register() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const navigate = useNavigate();
  //     const contentStyle = {
  //         textAlign: 'center',
  //   minHeight: 120,
  //   lineHeight: '120px',
  //   color: '#fff',
  //   backgroundColor: '#108ee9',
  //   padding:'50px'
  //       };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

    const register = () => {
      const { name, email, password } = user;
      if (name && email && password) {
        axios.post("https://localhost:9002/register", user).then((res) => {
          alert(res.data.message);
          navigate("/login");
        });
      } else {
        alert("invalid");
      }
    };
  return (
    <>
      {/* <div style={contentStyle}> */}
      <div className="login-form">
        {console.log("User", user)}

        {/* <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
            
          >
            Form disabled
          </Checkbox> */}
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="name">
            <Input name="name" value={user.name} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="email">
            <Input name="email" value={user.email} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="password">
            <Input.Password
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Button">
            <Button onClick={register}>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
