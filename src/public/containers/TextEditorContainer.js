import React from 'react'
import { connect } from 'react-redux'
import { updateJsonString, updateJsonObject } from '../actions'
import TextEditor from '../components/TextEditor'

const mapStateToProps = state => {
    return {
        jsonStr: state.jsonEditor.jsonText,
        isJsonTextValid: state.jsonEditor.isJsonTextValid
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTextChange: (event) => {
            let changedText = event.target.value
            let isValidJson = true

            try{
                JSON.parse(changedText)
            }
            catch(e)
            {
                isValidJson = false
            }

            if(isValidJson)
            {
                dispatch(updateJsonObject(JSON.parse(changedText)))
            }

            dispatch(updateJsonString({changedText, isValidJson}))
        }
    }
}

const TextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TextEditor)

export default TextEditorContainer

