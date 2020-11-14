import { Card, Button } from 'react-bootstrap'

function CardComponent () {

  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/1/3778817/3778817_168d9e41-bd50-404e-9f36-63096e6b95c7_720_811.jpg" />
      <Card.Body>
        <Card.Title>Nama Product</Card.Title>
        <Button variant="primary">Add List</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent