import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../store/actions/authAction'
import '../css/navbar.css'



function NavbarComponent () {
  const dispatch = useDispatch()

  const auth = useSelector(state=>state.authReducer)

  const onLogoutHandler=()=>{
    dispatch(logoutAction())
  }
  console.log(auth.loginStatus)
  return (
    <Navbar style={{height: '5rem', backgroundColor:'#1E2749'}}>
      <Link to='/login' style={{textDecoration:'none' }}>
      <Navbar.Brand style={{color:'white', fontWeight:'bolder', fontSize:'24px'}}>POSAN</Navbar.Brand>
      </Link>
        {
          !auth.loginStatus ? 
            <Nav className="mr-auto">
              <Nav.Link>
              <Link to='/login' style={{textDecoration:'none',color:'white', fontWeight:'600', fontSize:'16px' }}>Login</Link>
              </Nav.Link>
            </Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/' style={{textDecoration:'none',color:'white', fontWeight:'600', fontSize:'16px'}}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/product' style={{textDecoration:'none',color:'white', fontWeight:'600', fontSize:'16px'}}>List Product</Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to='/history' style={{textDecoration:'none',color:'white', fontWeight:'600', fontSize:'16px'}} >History</Link>
            </Nav.Link> */}
              <Nav.Link>
              <Link to='/login' style={{textDecoration:'none',color:'white', fontWeight:'600', fontSize:'16px'}} onClick={onLogoutHandler} >Logout</Link>
              </Nav.Link>
          </Nav>

        }
  </Navbar>
  )
}

export default NavbarComponent