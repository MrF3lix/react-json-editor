const textEditor = (state = {}, action) =>{
    switch(action.type){
        case 'UPDATE_JSON_STRING':
            return Object.assign({}, state, {
                jsonText: action.changedText
            })
        case 'UPDATE_JSON_OBJECT':
            return Object.assign({}, state, {
                jsonObject: action.newObject
            })
        default:
            console.log(state);
            return state
    }
}

export default textEditor