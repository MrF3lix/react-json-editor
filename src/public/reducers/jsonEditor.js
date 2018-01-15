const jsonEditor = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NEW_OBJECT':
            let newJsonObject = Object.assign({}, state.jsonObject, action.newObject)

            return Object.assign({}, state,{ 
                jsonObject: newJsonObject
            })
        case 'UPDATE_JSON_OBJECT':
            return Object.assign({}, state, {
                jsonObject: action.newObject
            })
        case 'UPDATE_JSON_STRING':
            return Object.assign({}, state, {
                jsonText: action.changedText,
                isJsonTextValid: action.isValidJson
            })
        case 'UPDATE_JSON_STRING_FROM_OBJECT':
            return Object.assign({}, state, {
                jsonText: JSON.stringify(state.jsonObject, null, 2),
                isJsonTextValid: true
            })
        case 'UPDATE_JSON_OBJECT_FROM_INPUT_FIELD':
            let updatedObject = {}
            updatedObject[action.property] = action.value
            let updatedJsonObject = Object.assign({}, state.jsonObject, updatedObject)
            return Object.assign({}, state,{
                jsonObject: updatedJsonObject
            })
        default:
            return state
    }
}

export default jsonEditor
