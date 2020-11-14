import axios from 'axios'

class Videos {
  static getVids(){
    return(dispatch) =>{
      dispatch({type: 'GET_VIDS_REQUEST'})
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&key=AIzaSyAbXH5HXzHQR7pwhFGdmNkMF2Eta2-QyQ0')
      .then(vids=>{
        dispatch({type:'GET_VIDS_SUCCESS', payload: vids.data.items})
      })
      .catch(err=>{
        dispatch({type:'GET_VIDS_FAILED', payload: err})
      })
    }
  }
  static getTrends(){
    return (dispatch) => {
      dispatch({type: 'GET_TRENDS_REQUEST'})
      axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=ID&key=AIzaSyAbXH5HXzHQR7pwhFGdmNkMF2Eta2-QyQ0')
      .then(trends=>{
        dispatch({type:'GET_TRENDS_SUCCESS', payload: trends.data.items})
      })
      .catch(err=>{
        dispatch({type:'GET_TRENDS_FAILED', payload: err})
      })
    }
  }
  static getVid(videoId){
    return(dispatch) =>{
      dispatch({type: 'GET_VID_REQUEST'})
      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAbXH5HXzHQR7pwhFGdmNkMF2Eta2-QyQ0`)
      .then(vid=>{
        dispatch({type:'GET_VID_SUCCESS', payload: vid.data.items})
      })
      .catch(err=>{
        dispatch({type:'GET_VID_FAILED', payload: err})
      })
    }
  }
  static searchVid(keyword){
    return(dispatch) =>{
      dispatch({type: 'GET_SEARCH_REQUEST'})
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${keyword}&key=AIzaSyAbXH5HXzHQR7pwhFGdmNkMF2Eta2-QyQ0`)
      .then(vid=>{
        dispatch({type:'GET_SEARCH_SUCCESS', payload: vid.data.items})
      })
      .catch(err=>{
        dispatch({type:'GET_SEARCH_FAILED', payload: err})
      })
    }
  }
}

export default Videos
