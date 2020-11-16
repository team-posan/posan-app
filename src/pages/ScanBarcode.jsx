import React, {useEffect, useState} from 'react'
import QrScanner from 'react-qr-reader'
import QRcode from 'qrcode.react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postCompleteStatus, fetchCart } from '../store/actions/dataAction'
import ListCart from '../components/ListCart'
import { Button } from 'react-bootstrap'
import CardList from '../components/CardList'


const ScanBarcode=()=>{
    const [scanOn, setScanOn] = useState(false)
    const cart = useSelector(state => state.dataReducer.cart)
    const auth = useSelector(state=>state.authReducer)
    // Array from Customer
    const dataqr =   [100]

    useEffect(() => {
        console.log('mmm', cart)
    }, [cart])

    const [qrScan, setQrScan ] = useState([])
    const [qrMake, setQrMake ] = useState(JSON.stringify(dataqr))

    const dispatch = useDispatch()

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
        const idCart = cart
        console.log(idCart)
        dispatch(postCompleteStatus(idCart))
        setQrScan([])
    }

    if(!auth.loginStatus) return <Redirect to={'/login'} />

    return(
        <div>
            <div>
                <QrScanner
                    delay={500}
                    onError={errorHandler}
                    onScan={scanHandler}
                    style={{height:'400px', width:'400px'}}
                />
            </div>
            {/* <Button onClick={scanButtonHandle}>Scan</Button> */}
            <Button onClick={selesaiButtonHandle}>Selesai</Button>
            <div>
                {
                    cart ? cart.map(cartItem => {
                        return <CardList key={cartItem.id} product={cartItem} />
                    }) : <></>
                }
            </div>
            <div>
               {
                   qrMake ? 
                   <div>
                   <QRcode
                   id="myqr"
                   value={qrMake}
                   size={400}
                   includeMargin={true}
                    />
               </div>
               :
               <p>asd</p>
               }
            </div>
        </div>
    )
}



export default ScanBarcode