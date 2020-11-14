import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent () {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Toko Abc</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Link to='/scanbarcode' style={{textDecoration:'none', color:'silver'}}>Scan Barcode</Link>
      <Nav.Link href="#history">History</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default NavbarComponent