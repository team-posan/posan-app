import React, {useEffect, useState} from 'react'
import QrScanner from 'react-qr-reader'
import QRcode from 'qrcode.react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postCompleteStatus, fetchCart } from '../store/actions/dataAction'
// import { Button,Container, Row, Col } from 'react-bootstrap'
// import CardList from '../components/CardList'
import { Divider, Layout, Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';



const ScanBarcode=()=>{

    const { Content, Footer, Header , Sider } = Layout
    const { Meta } = Card

    const [scanOn, setScanOn] = useState(false)
    const cart = useSelector(state => state.dataReducer.cart)
    const barcodeStatusErrror = useSelector(state => state.dataReducer.error)
    const auth = useSelector(state=>state.authReducer)
    const error = useSelector(state=>state.dataReducer.error)
    // Array from Customer
    const dataqr =   [100]

    useEffect(() => {
        console.log('mmm', cart)
    }, [cart])

    const [qrScan, setQrScan ] = useState([])
    const [qrMake, setQrMake ] = useState(JSON.stringify(dataqr))

    const dispatch = useDispatch()
    console.log(cart)

    // useState(() => {
    //     console.log(qrScan)
    // }, [qrScan] )

    const generateBarcode = (event) => {
        event.preventDefault()
        setQrMake(event.target.value)
    }

    const scanHandler=(data)=>{
        if(data){
            setQrScan(JSON.parse(data))
            // console.log('masuk sini scan handler', data)
            dispatch(fetchCart(JSON.parse(data)))
        }
    }

    const errorHandler=(error)=>{
        console.log('error QR', error)
    }

    const scanButtonHandle = () => {
        // setScanOn(!scanOn)
        // dispatch(fetchCart(dataqr))
    }

    const selesaiButtonHandle = () => {
        // cart = [id, id, id]
        if(cart.length > 0){
            const idCart = cart.map(cartItem => cartItem.id)
            dispatch(postCompleteStatus(idCart))
            setQrScan([])
        }else{
            console.log('cart kosong')
        }
    }

    if(!auth.loginStatus) return <Redirect to={'/login'} />

    return(
        <Layout style={{minHeight:'91vh'}}>
          <div style={{display:'flex'}}>
            <div style={{margin:'5%', color:'#E14C17', fontWeight:'bolder', fontSize:'24px'}}>
                <div className="mb-5">Scan QR Here</div>
                <QrScanner
                    delay={500}
                    onError={errorHandler}
                    onScan={scanHandler}
                    style={{height:'300px', width:'300px'}}
                />
            </div>
            <div style={{margin:'0 5%', color:'#E14C17', fontWeight:'bolder'}}>

            <Button danger type="primary" style={{margin:'15% 85%', fontWeight:'bold'}} onClick={selesaiButtonHandle}>Mark Transaction as Done</Button>
            {
                barcodeStatusErrror ? 
                <p style={{margin:'15% 85%', fontWeight:'bold', width:'300px'}}>Barcode Invalid / Already use</p>
                :
                null
            }

                <Row justify="space-between" wrap>
                {
                    cart ? cart.map(val=>{
                        console.log(val)
                        return  (<Col span={4} style={{marginRight:'4px'}}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={`${val.Product.image_url}`} />}
                                        >
                                        <Meta title={val.Product.product_name} description={`Quantity ${val.quantity}`} />
                                        <p style={{marginTop:'3%'}}>Status Payment = {val.payment_status}</p>
                                    </Card>
                                </Col>  )
                    })
                    :
                    null
                }    
                    
                </Row>
            </div>
          </div>
        </Layout>
        // <div>
        //     <Container>
        //         <Row>
        //             <Col sm={8}>
        //             <div>
        //                 <QrScanner
        //                     delay={500}
        //                     onError={errorHandler}
        //                     onScan={scanHandler}
        //                     style={{height:'300px', width:'300px'}}
        //                 />
        //             </div>
        //             </Col>
        //             <Col sm={4}>
        //             <Button onClick={selesaiButtonHandle}>Selesai</Button>
        //                 <div>
        //                     {
        //                         cart ? cart.map(cartItem => {
        //                             return <CardList key={cartItem.id} product={cartItem} />
        //                         }) : <></>
        //                     }{
        //                         error ? <p>Barcode Invalid</p> : <></>
        //                     }
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        //     <div>
        //        {
        //            qrMake ? 
        //            <div>
        //            <QRcode
        //            id="myqr"
        //            value={qrMake}
        //            size={400}
        //            includeMargin={true}
        //             />
        //        </div>
        //        :
        //        <p>asd</p>
        //        }
        //     </div>
        // </div>
    )
}



export default ScanBarcode