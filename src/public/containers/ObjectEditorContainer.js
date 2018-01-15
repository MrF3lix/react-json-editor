import React from 'react'
import { connect } from 'react-redux'
import { addNewObjectToJson } from '../actions'
import { updateJsonStringFromObject } from '../actions'
import { changeTextElementToEditMode } from '../actions'
import { updateJsonObjectFromIputField } from '../actions'
import ObjectEditor from '../components/ObjectEditor'

const mapStateToProps = state => {
    return {
        jsonObj: state.jsonEditor.jsonObject
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
        addNewObject: () => {            
            let random = Math.floor(Math.random() * (1 - 100 + 1)) + 1;
            let propName = "propName" + random
            let newObject = {}
            let objectProperty = propName
            
            newObject[objectProperty] = "newContent"

            dispatch(addNewObjectToJson(newObject))
            dispatch(updateJsonStringFromObject())
        },
        changeToEditMode: (id) => {
            dispatch(changeTextElementToEditMode({id}))
        },
        saveTextFromInput: (event, property) => {
            let value = event.target.value
            dispatch(updateJsonObjectFromIputField(property, value))
            dispatch(updateJsonStringFromObject())
        }
    }
}

const ObjectEditorContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectEditor)

export default ObjectEditorContainer