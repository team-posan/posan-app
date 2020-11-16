import { Container, CardDeck } from 'react-bootstrap'
import CardComponent from '../components/CardComponent'
import { Redirect } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { fetchProducts } from '../store/actions/dataAction'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function HomePage () {
  const auth = useSelector(state=>state.authReducer)
  const product = useSelector(state => state.dataReducer.product)
  console.log(auth)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(product)
  }, [product])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if(!auth.loginStatus) return <Redirect to={'/login'} />
  return (
    <Container fluid>
      <CardDeck>
      {
        product.map(productItem => {
        return <CardComponent title={productItem.title} key={productItem} product={productItem} />
        })
      }
    </CardDeck>
    </Container>
  )
}

// const mapStateToProps = state => {
//   return {
//     product: state.dataReducer.product
//   }
// }

export default HomePage
// export default HomePage