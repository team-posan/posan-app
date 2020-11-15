import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { login } from '../services/auth.services'

function Login () {
  const [inputKasir, setInputKasir] = useState({
    userName: '',
    password: ''
  })

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    console.log('masuk', inputKasir)
    login({
      username: inputKasir.userName,
      password: inputKasir.password
    }).then((res) => console.log('selesai', res))
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{width: '30vw', height: '100%', padding: '2rem'}} >
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
      </Card>
    </div>
  )
}

export default Login