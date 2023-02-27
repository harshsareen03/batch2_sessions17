import React,{useState} from 'react'
import { PlusOutlined } from '@ant-design/icons';
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
} from 'antd';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Register() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const history=useHistory()
//     const contentStyle = {
//         textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
//   padding:'50px'
//       };
const[user,setUser]=useState({
  name:'',email:'',password:''
})
const handleChange=e=>{
  const{name,value}=e.target
  setUser({
    ...user,
    [name]:value
  })

}
    return (
        <>
        {/* <div style={contentStyle}> */}
        <div className='login-form'>
            

          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
            
          >
            Form disabled
          </Checkbox>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
              <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio">
              <Radio.Group>
                <Radio value="apple"> Apple </Radio>
                <Radio value="pear"> Pear </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: 'Light',
                    value: 'light',
                    children: [
                      {
                        title: 'Bamboo',
                        value: 'bamboo',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>
        </div>
        </>

      );
}