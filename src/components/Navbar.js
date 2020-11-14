import { Navbar, Nav } from 'react-bootstrap'

function NavbarComponent () {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Toko Abc</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#scan">Scan Barcode</Nav.Link>
      <Nav.Link href="#history">History</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default NavbarComponent