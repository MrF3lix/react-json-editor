const objectEditor = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NEW_OBJECT':
            return Object.assign({}, state, {
                jsonObjects: state.jsonObjects.concat(action.newObject)
            })
        default:
            return state
    }
}

export default objectEditor