import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent () {
  return (
    <Navbar bg="dark" variant="dark" style={{height: '5rem'}}>
      <Navbar.Brand href="#home">Toko Abc</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to='/' style={{textDecoration:'none', color:'silver'}}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/scanbarcode' style={{textDecoration:'none', color:'silver'}}>Scan Barcode</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/history' style={{textDecoration:'none', color:'silver'}} >History</Link>
        </Nav.Link>
      </Nav>
  </Navbar>
  )
}

export default NavbarComponent