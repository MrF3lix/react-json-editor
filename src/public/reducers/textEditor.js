const textEditor = (state = {}, action) =>{
    switch(action.type){
        case 'UPDATE_JSON_STRING':
            let isValidJson = true
            try{
                JSON.parse(action.changedText)
            }
            catch(e)
            {
                isValidJson = false
            }

            return Object.assign({}, state, {
                jsonText: action.changedText,
                isJsonTextValid: isValidJson
            })
        case 'UPDATE_JSON_OBJECT':
            return Object.assign({}, state, {
                jsonObject: action.changedText
            })
        default:
            console.log(state)
            return state
    }
}

export default textEditor