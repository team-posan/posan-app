import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import ProductInventories from '../components/Home/ProductInventories'
import { connect } from 'react-redux'
import ScanBarcode from './ScanBarcode'
import ListCart from '../components/ListCart'

function HomePage () {
  return (
    <Container fluid>
      <Row>
        <Col sm={8} >
          <Switch>
            <Route exact path='/' component={ProductInventories} />
            <Route exact path='/scanbarcode' component={ScanBarcode} />
          </Switch>
        </Col>
        <Col sm={4} >
          <ListCart />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    product: state.dataReducer.product
  }
}

export default connect(mapStateToProps)(HomePage)
// export default HomePage