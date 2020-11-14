const initialState = {
  loading: false,
  error: false,
  data: []
}

const videos = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_VIDS_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload
      }
    case 'GET_VIDS_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default videos
