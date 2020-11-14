import { createStore, combineReducers, applyMiddleware } from 'redux'
import videos from '../reducers/videos'
import search from '../reducers/search'
import video from '../reducers/video'
import trendings from '../reducers/trendings'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  videos,
  video,
  search,
  trendings
})

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ (), applyMiddleware(thunk))

export default store
