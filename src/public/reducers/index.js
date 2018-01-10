import { combineReducers } from 'redux'
import textEditor from './textEditor'
import objectEditor from './objectEditor'

const jsonEditorApp = combineReducers({
    textEditor,
    objectEditor
})

export default jsonEditorApp