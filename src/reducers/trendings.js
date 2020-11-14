const initialState = {
  loading: false,
  error: false,
  data: []
}

const trendings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRENDS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_TRENDS_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload
      }
    case 'GET_TRENDS_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default trendings
