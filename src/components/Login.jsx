
import React, { useState } from 'react'
import "../App.css";
import { Form, Input, Button, message,notification } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { history } from "../history";
import axiosInstance from '../utils/axiosinstance';
import jwtDecode from 'jwt-decode';
const FormItem = Form.Item;




export default function Login() {

 
  const [phone, setPhone] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let loginData = {
      username: phone
    }

    axiosInstance()
      .post('/user/login', loginData)
      .then((res) => {
        const dt = jwtDecode(res.data.token);
        localStorage.setItem("token", res.data.token);
        setLoading(false);

        // console.log(res.data);
        console.log(dt);

      })
      .catch((err) => {
        if (err.response) {
          setLoading(false)
          setError(err.response.data)
          notification.error({
            message: `${error.message}`,
            
          });

        }
      })


    // history.push("/home")
    // window.open('/home')
    // console.log(phone);
  }
  const handleChange = (e) => {
    setPhone(e.target.value)
  }



  return (
    <div>

      <div className={"lContainer"}>
        <div className="lItem">

          <div className="loginForm">
            <h2>Login</h2>
            <Form className="login-form" >

              {/* {error && (
               message.error(` ${error.message}`)
              //  Modal.error(config)
              )} */}




             <Form.Item type="number"
                name='phone'
                placeholder="Phone Number"
                rules={[{ required: true, message: 'Please input your username!' }, { len: 10 }]} hasFeedback>
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type='number'
                  onChange={handleChange}
                />

              </Form.Item>

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={handelSubmit}
                  loading={loading}
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
        <div className="footer">
          <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by React</a>
        </div>
      </div>
    </div>
  )
}
