import axios from 'axios'
const baseUrlServer = 'http://localhost:5000'

// 
export const fetchProducts = () => {
  console.log('dari aciton')
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

// disini ngehit server untuk set status selsai
/**
 * @params IdCartToComplete = [1, 2, 3, 4]
 */
export const postCompleteStatus = (IdCartToComplete) => {
  return (dispatch) => {
    axios.patch(baseUrlServer + '/carts', {
      dataId: IdCartToComplete,
      payment_status: 'done'
    }, {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      console.log('dari aciton', data)
      dispatch(setCart([]))
    }).catch(err => {
      console.error('error', err); 
    })
  }
}

/**
 * @params idCartToShow = [1, 2, 3, 4]
 */
export const fetchCart = (idCartToShow) => {
  console.log('masuk', idCartToShow, localStorage.access_token)
  console.log(idCartToShow)
  return (dispatch) => {
    axios.post(baseUrlServer + '/carts/scan', {
      dataId: idCartToShow
    }, {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then((response) => {
      dispatch(setErrorBarcode(false))
      console.log('dari aciton', response)
      dispatch(setCart(response.data))
    }).catch(err => {
      dispatch(setErrorBarcode(true))
      console.error('masuk error action', err); 
    })
  }
}

// // disini ngatur payment secara local
// export const setCartStatus = (paymentInfo) => {
//   return {
//     type: 'SET_CART_STATUS',
//     payload: paymentInfo
//   }
// }

export const setProduct = (dataProduct) => {
  console.log('product action', dataProduct)
  return {
    type: 'SET_PRODUCT',
    payload: dataProduct
  }
}

// export const getHistory = () => {

// }

export const setCart = (dataCart) => {
  return {
    type: 'SET_CART',
    payload: dataCart.carts
  }
}

export const setErrorBarcode = (payload) => {
  return {
    type: 'SET_ERROR_BARCODE',
    payload: payload
  }
}