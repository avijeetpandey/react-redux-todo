import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    }
  }

  if (action.type === RESET) {
    return initialState
  }
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
