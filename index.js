import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import jsonEditorApp from './reducers'
import App from './components/App'

let initialState = {
    textEditor: {
        jsonText: "jsonText",
        jsonObject: {}
    }
}

let store = createStore(jsonEditorApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)