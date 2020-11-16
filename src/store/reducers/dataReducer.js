
const initState = {
  product: [],
  cart: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  console.log('reducers', action)
  switch (action.type) {
    case 'SET_PRODUCT':
      console.log('set product', action.payload)
      return { ...state, product: action.payload }
    case 'SET_CART':
      console.log('reducer set cart', action.payload)
      return { ...state, cart: action.payload }
    default:
      return state
  }
}