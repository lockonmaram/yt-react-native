const initialState = {
  loading: false,
  error: false,
  data: [],
  done: false
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_SEARCH_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload,
        done: true
      }
    case 'GET_SEARCH_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default search
