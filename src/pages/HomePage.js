import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import CardComponent from '../components/CardComponent'
import ListCart from '../components/ListCart'

function HomePage () {
  return (
    <Container fluid>
      <Row>
        <Col sm={8} >
          <CardDeck>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          </CardDeck>
        </Col>
        <Col sm={4} >
          <ListCart />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage