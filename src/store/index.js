import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import initialState from './initialStates'

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares = [ ...middlewares, logger ]
}

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      ...middlewares
    )
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = import('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
