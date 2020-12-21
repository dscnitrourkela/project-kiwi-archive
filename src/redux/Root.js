import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const initialState = {}
const middlewares = [thunk]

const store = createStore(
  reducers,
  initialState,
  // composeWithDevTools(applyMiddleware(...middlewares))
  applyMiddleware(...middlewares)
)

const Root = ({ initialState = {}, children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default Root
