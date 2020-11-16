import { Card, Button } from 'react-bootstrap'

function CardComponent (props) {
  const {product} = props
  
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={product.image_url} />
      <Card.Body >
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Subtitle>stock: {product.stock}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default CardComponent