import { Container, CardDeck } from 'react-bootstrap'
import CardComponent from '../components/CardComponent'
import { Redirect } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { fetchProducts } from '../store/actions/dataAction'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Divider, Layout, Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';


function HomePage () {

  const { Content, Footer, Header , Sider } = Layout
  const { Meta } = Card

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
    <Layout style={{minHeight:'91vh', padding:'5%'}}>
      <Content>
      <Row justify="left" wrap>
                {
                    product ? product.map(val=>{
                        console.log(val)
                        return  (<Col span={4} style={{marginRight:'4px'}}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={`${val.image_url}`} />}
                                        >
                                        <Meta title={val.product_name} />
                                        <p style={{marginTop:'3%'}}>Price : {val.price}</p>
                                        <p style={{marginTop:'3%'}}>Stock : {val.stock}</p>
                                    </Card>
                                </Col>  )
                    })
                    :
                    null
                }    
                    
                </Row>
      </Content>

    </Layout>
    // <Container fluid>
    //   <CardDeck>
    //   {
    //     product.map(productItem => {
    //     return <CardComponent title={productItem.title} key={productItem} product={productItem} />
    //     })
    //   }
    // </CardDeck>
    // </Container>
  )
}

// const mapStateToProps = state => {
//   return {
//     product: state.dataReducer.product
//   }
// }

export default HomePage
// export default HomePage