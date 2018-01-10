export const updateJsonString = changedText => {
    return {
        type: 'UPDATE_JSON_STRING',
        changedText
    }
}

export const updateJsonObject = newObject => {
    return{
        type: 'UPDATE_JSON_OBJECT',
        newObject
    }
}