import React from 'react'
import { connect } from 'react-redux'
import { addNewObjectToJson } from '../actions'
import ObjectEditor from '../components/ObjectEditor'

const mapStateToProps = state => {
    return {
        jsonObj: state.objectEditor.jsonObjects
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addNewObject: () =>{
            dispatch(addNewObjectToJson({objectName: 'objectContent'}))
        }
    }
}

const ObjectEditorContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectEditor)

export default ObjectEditorContainer