import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../store/actions/authAction'



function NavbarComponent () {
  const dispatch = useDispatch()

  const auth = useSelector(state=>state.authReducer)

  const onLogoutHandler=()=>{
    dispatch(logoutAction())
  }
  console.log(auth.loginStatus)
  return (
    <Navbar bg="dark" variant="dark" style={{height: '5rem'}}>
      <Navbar.Brand href="#home">Toko Abc</Navbar.Brand>
        {
          !auth.loginStatus ? 
            <Nav className="mr-auto">
              <Nav.Link>
              <Link to='/login' style={{textDecoration:'none', color:'silver'}}>Login</Link>
              </Nav.Link>
            </Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/' style={{textDecoration:'none', color:'silver'}}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/product' style={{textDecoration:'none', color:'silver'}}>List Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/history' style={{textDecoration:'none', color:'silver'}} >History</Link>
            </Nav.Link>
              <Nav.Link>
              <Link to='/login' style={{textDecoration:'none', color:'silver'}} onClick={onLogoutHandler} >Logout</Link>
              </Nav.Link>
          </Nav>

        }
  </Navbar>
  )
}

export default NavbarComponent