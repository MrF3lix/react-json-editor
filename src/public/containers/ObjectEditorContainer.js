import React from 'react'
import { connect } from 'react-redux'
import { addNewObjectToJson } from '../actions'
import { updateJsonStringFromObject } from '../actions'
import { changeTextElementToEditMode } from '../actions'
import { updateJsonObjectFromIputField } from '../actions'
import ObjectEditor from '../components/ObjectEditor'

const mapStateToProps = state => {
    return {
        jsonObj: state.jsonEditor.jsonObjects
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return{
        addNewObject: () => {
            dispatch(addNewObjectToJson({objectName: 'objectContent'}))
            dispatch(updateJsonStringFromObject())
        },
        changeToEditMode: (id) => {
            dispatch(changeTextElementToEditMode({id}))
        },
        saveTextFromInput: (event, id) => {
            let newValue = event.target.value
            dispatch(updateJsonObjectFromIputField(id, newValue))
            dispatch(updateJsonStringFromObject())
        }
    }
}

const ObjectEditorContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectEditor)

export default ObjectEditorContainer