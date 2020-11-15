import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProductInventories from '../components/Home/ProductInventories'
import { connect } from 'react-redux'
import ScanBarcode from './ScanBarcode'
import ListCart from '../components/ListCart'
import { useSelector } from 'react-redux'

function HomePage () {
  const auth = useSelector(state=>state.authReducer)

  console.log(auth)


  if(!auth.loginStatus) return <Redirect to={'/login'} />
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