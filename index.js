import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import jsonEditorApp from './src/public/reducers'
import App from './src/public/components/App'

const initialState = {
    textEditor: {
       jsonText: "{}",
       isJsonTextValid: true
    },
    objectEditor: {
        jsonObjects: []
    }
}

let store = createStore(jsonEditorApp, initialState, window.devToolsExtension ?
    window.devToolsExtension() : f => f)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)