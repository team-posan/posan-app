import axios from 'axios'
const baseUrlServer = 'http://localhost:5000'

// 
export const fetchProducts = () => {
  return (dispatch) => {
    axios.get(baseUrlServer + '/product', {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      console.log('dari aciton', data)
      dispatch(setProduct(data))
    }).catch(err => {
      console.error(err); 
    })
  }
}

// disini ngehit server untuk set payment
/**
 * @params IdCartToPay = [1, 2, 3, 4]
 */
export const postPayment = (IdCartToPay) => {

  return (dispatch) => {
    fetch(baseUrlServer + '/carts', {
      method: 'POST',
      body: JSON.stringify(IdCartToPay),
      headers: {
        "Content-type": "application/json charset=UTF-8",
        access_token: localStorage.access_token
      }
    })
      .then (res => res.json())
      .then (payload => {
        console.log('dari action', payload)
        dispatch(setProduct(payload))
      })
      .catch (err => {
        console.log(err)
      })
  }
}

// disini ngatur payment secara local
export const setPayment = (paymentInfo) => {
  return {
    type: 'SET_SETPAYMENT',
    payload: paymentInfo
  }
}

export const setProduct = (dataProduct) => {
  return {
    type: 'SET_PRODUCT',
    payload: dataProduct
  }
}

// export const getHistory = () => {

// }

export const getCart = (dataCart) => {
  return {
    type: 'SET_CART',
    payload: dataCart
  }
}