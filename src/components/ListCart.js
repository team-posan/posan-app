import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardList from './CardList'

function ListCart (props) {
  const cart = useSelector(state => state.dataReducer.cart)
  // const [total, setTotal] = useState(30000)
  const [cartFromCutomer, setCartFromCutomer] = useState([])
  console.log('cartFromCutomer', cartFromCutomer)
  useState(() => {
    console.log('dari Listcart', cart)
    setCartFromCutomer(cart)
  }, [cart])

  return (
    <>
      <Button fluid>Selesai</Button>
      {/* <h1>Total: <span>{total}</span></h1> */}
      <div>
        {
          cartFromCutomer ? cartFromCutomer.map(cart => {
            return <CardList />
          }) : <></>
        }
      </div>
    </>
  )
}
// const mapStateToProps = state => {
//   conso
//   return {
//     cart: state.dataReducer.cart
//   }
// }
// export default connect(mapStateToProps)(ListCart)
export default ListCart