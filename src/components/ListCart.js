import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CardList from './CardList'

function ListCart () {
  const [total, setTotal] = useState(30000)
  
  return (
    <>
      <h1></h1>
      <Button fluid>Checkout</Button>
      <h1>Total: <span>{total}</span></h1>
      <div>
        <CardList />
        <CardList />
        <CardList />
      </div>
    </>
  )
}

export default ListCart