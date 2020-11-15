
const initState = {
  product: [],
  cart: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  // console.log('reducers', action)
  switch (action.type) {
    case 'SET_PRODUCT':
      console.log('set product', action.payload)
      return { ...state, product: action.payload }
    case 'SET_CART':
      return { ...state, cart: action.payoad }
    default:
      return state
  }
}