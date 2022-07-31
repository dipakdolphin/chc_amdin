import React, { useState, useEffect } from 'react'
import "../App.css";
import { Form, Input, Button, message,notification } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import isAuthenticated from "../utils/isAuthenticated";
import axiosInstance from '../utils/axiosinstance';
import jwtDecode from 'jwt-decode';
import { loginSucess } from '../slice/userSlice/userSlice';
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
const FormItem = Form.Item;

const  Login=()=> {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
 const checkLoginStatus=()=>{
    if(isAuthenticated()){
      navigate("/home")
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
 


  const [phone, setPhone] = useState('');
  const [error, setError] = useState(["user not found"]);
  const [loading, setLoading] = useState(false);


  const notificationsMessege =(err)=>{
    notification.error({
      message: `Username not found`
      
    });
  }


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
        localStorage.setItem("token", res.data.token)
        dispatch(loginSucess(res.data))
          setLoading(false);
        // console.log(res.data);
        navigate("/home")
        
        console.log(dt);

      })
      .catch((err) => {
        if (err.response) {
          setLoading(false)
          setError(err.response.data)
          notificationsMessege(error);
          // notification.error({
          //   message: `Username not found: ${error.message}`
            
          // });
         

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
             <Form.Item type="number"
                name='phone'
                placeholder="Phone Number"
                rules={[{ required: true, message: 'Please input your username!' }, { len: 10 }]}>
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type='number'
                  onChange={handleChange}
                  allowClear
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



export default Login;
