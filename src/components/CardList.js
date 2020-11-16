import { Card, Button } from 'react-bootstrap'

function CardList (props) {
  const {product} = props
  console.log(product)
  return (
    <Card style={{textAlign: 'left'  }}>
      <Card.Body>
      <Card.Title>{product.Product.product_name}</Card.Title>
      <Card.Title>Qty: {product.quantity}</Card.Title>
  <Card.Title>Price: {product.Product.stock} * {product.quantity}= {product.Product.stock*product.quantity}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardList