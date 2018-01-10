const textEditor = (state = {}, action) =>{
    switch(action.type){
        case 'UPDATE_JSON_STRING':
            return Object.assign({}, state, {
                jsonText: action.changedText,
                isJsonTextValid: action.isValidJson
            })
        case 'UPDATE_JSON_OBJECT':
            console.log(state)

            return Object.assign({}, state, {
                jsonObject: action.newObject
            })
        default:
            return state
    }
}

export default textEditor