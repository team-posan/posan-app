import { useEffect, useState } from 'react'
import {CardDeck} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/actions/dataAction'
import CardComponent from '../CardComponent'
import { connect } from 'react-redux'

function ProductInventories (props) {
  const { product }= props
  const [localDataProduct, setLocalDataProduct] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    console.log('YYYYYY', product)
    setLocalDataProduct(product)
  }, [product])

  // if (localDataProduct.length === 0) {
  //   return (
  //     <h1>Loading</h1>
  //   )
  // }

  return (
    <CardDeck>
      {
        localDataProduct.map(productItem => {
        return <CardComponent title={productItem.title} />
        })
      }
    </CardDeck>
  )
}

const mapStateToProps = state => {
  console.log('dari mstp', state)
  return {
    product: state.dataReducer.product
  }
}

export default connect(mapStateToProps)(ProductInventories)