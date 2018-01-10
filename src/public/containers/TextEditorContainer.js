import React from 'react'
import { connect } from 'react-redux'
import { updateJsonString, updateJsonObject } from '../actions/index'
import TextEditor from '../components/TextEditor'

const mapStateToProps = state => {
    return {
        jsonStr: state.jsonText
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTextChange: () => {
            dispatch(updateJsonString("a"))
        }
    }
}

const TextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TextEditor)

export default TextEditorContainer

