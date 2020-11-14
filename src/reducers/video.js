const initialState = {
  loading: false,
  error: false,
  data: {}
}

const video = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VID_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_VID_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload[0].snippet
      }
    case 'GET_VID_FAILED':
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default video
