import React from 'react'
import { connect } from 'react-redux'
import { addNewObjectToJson } from '../actions'
import { updateJsonStringFromObject } from '../actions'
import ObjectEditor from '../components/ObjectEditor'

const mapStateToProps = state => {
    return {
        jsonObj: state.jsonEditor.jsonObjects
    }
}

const mapDispatchToProps = (dispatch, state) => {
    //How to get the new json object
    let changedText = "JSON.stringify(state.objectEditor.jsonObjects)"
    let isValidJson = true

    return{
        addNewObject: () =>{
            dispatch(addNewObjectToJson({objectName: 'objectContent'}))
            dispatch(updateJsonStringFromObject())
        }
    }
}

const ObjectEditorContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectEditor)

export default ObjectEditorContainer