import React from 'react'
import { connect } from 'react-redux'
import { udpatedJsonString } from '../actions'
import { udpatedJsonObject } from '../actions'
import TextEditor from '../components/TextEditor'

const mapStateToProps = state => {
    return {
        jsonStr: state.jsonText
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTextChange: () => {
            dispatch(udpateJsonString("This is the new string"))
        }
    }
}

const TextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TextEditor)

export default TextEditorContainer

