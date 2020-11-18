import { useState } from 'react'
// import { Form, Button, Card } from 'react-bootstrap'
// import { login } from '../services/auth.services'
import { loginAction } from '../store/actions/authAction'
import { useDispatch, useSelector  } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Divider, Layout, Form, Input, Button } from 'antd';



function Login () {
  
  const { Content, Footer, Header , Sider } = Layout
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


  const auth = useSelector(state=>state.authReducer)
  const dispatch = useDispatch()

  const handleSubmitLogin = (values) => {
    dispatch(loginAction(values.username,values.password))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  if(auth.loginStatus) return <Redirect to={'/'}/>

  return (
    // <div style={{justifyContent: 'center', alignItems: 'center'}}>
    <Layout style={{minHeight:'93vh', paddingTop:'5%'}}>
        <Divider style={{fontWeight:'bolder', color:'#E14C17'}}>Login Cashier POSAN</Divider>
        <center>
        <Content style={{width:'25%', height:'30vh', minWidth:'300px'}}>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmitLogin}
              onFinishFailed={onFinishFailed}
              style={{marginRight:'25%', marginTop:'15%'}}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" danger style={{background:'#E14C17', fontWeight:"bolder"}}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          {/* <Card style={{width: '30vw', height: '100%', padding: '2rem'}} >
            <Form onSubmit={handleSubmitLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={({target}) => setInputKasir({...inputKasir, userName: target.value})} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={({target}) => setInputKasir({...inputKasir, password: target.value})} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card> */}
        </Content>
        </center>

        <Divider></Divider>
      </Layout>
    // </div>
  )
}

export default Login