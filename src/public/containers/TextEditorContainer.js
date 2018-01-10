import React from 'react'
import { connect } from 'react-redux'
import { updateJsonString, updateJsonObject } from '../actions/index'
import TextEditor from '../components/TextEditor'

const mapStateToProps = state => {
    return {
        jsonStr: state.textEditor.jsonText,
        isJsonStringValid: state.textEditor.isJsonStringValid
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTextChange: (event) => {
            let newVal = event.target.value
            dispatch(updateJsonString(newVal))
        }
    }
}

const TextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TextEditor)

export default TextEditorContainer

