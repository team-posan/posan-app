import { Card, Button } from 'react-bootstrap'

function CardList (props) {
  const {product} = props
  
  return (
    <Card style={{textAlign: 'left'  }}>
      <Card.Body>
  <Card.Title>{product.product_name}</Card.Title>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Card.Title>20.000 x 2</Card.Title>
        <Card.Title style={{alignSelf: 'end'}} >40.000</Card.Title>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Button>Delete</Button>
        <div>
        <Button>+</Button>
        <Button>-</Button>
        </div>
      </div>
      </Card.Body>
    </Card>
  )
}

export default CardList