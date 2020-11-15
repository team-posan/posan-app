import React, {useState} from 'react'
import QrScanner from 'react-qr-reader'
import QRcode from 'qrcode.react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const ScanBarcode=()=>{
    const auth = useSelector(state=>state.authReducer)

    const dataqr =   [
        {product_name:'indomie goreng', qty:10, status:'terbayar'},
        {product_name:'indomie rebus', qty:20, status:'terbayar'}]

    const [qrScan, setQrScan ] = useState('no data')
    const [qrMake, setQrMake ] = useState(JSON.stringify(dataqr))


    const generateBarcode = (event) => {
        event.preventDefault()
        setQrMake(event.target.value)
    }

    const scanHandler=(data)=>{
        if(data){
            setQrScan(data)
        }
    }

    const errorHandler=(error)=>{
        console.log('error QR', error)
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
            <div>
                {qrScan}
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