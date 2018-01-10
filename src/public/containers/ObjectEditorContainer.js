import React from 'react'
import { connect } from 'react-redux'
import ObjectEditor from '../components/ObjectEditor'

const mapStateToProps = state => {
    return {
        jsonObj: state.textEditor.jsonText
    }
}

const ObjectEditorContainer = connect(mapStateToProps)(ObjectEditor)

export default ObjectEditorContainer