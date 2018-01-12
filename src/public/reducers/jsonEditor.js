const jsonEditor = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NEW_OBJECT':
            return Object.assign({}, state, {
                jsonObjects: state.jsonObjects.concat(action.newObject)
            })
        case 'UPDATE_JSON_OBJECT':
            return Object.assign({}, state, {
                jsonObjects: action.newObject
            })
        case 'UPDATE_JSON_STRING':
            return Object.assign({}, state, {
                jsonText: action.changedText,
                isJsonTextValid: action.isValidJson
            })
        case 'UPDATE_JSON_STRING_FROM_OBJECT':
            return Object.assign({}, state, {
                jsonText: JSON.stringify(state.jsonObjects, null, 2),
                isJsonTextValid: true
            })
        case 'UPDATE_JSON_OBJECT_FROM_INPUT_FIELD':
            return Object.assign({}, state, { 
                jsonObjects: state.jsonObjects.map((element, index) => 
                    (index == action.id)
                        ? {...element, objectName: action.newValue}
                        : element
            )})
        default:
            return state
    }
}

export default jsonEditor
