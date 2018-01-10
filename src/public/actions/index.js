export const updateJsonString = ({changedText, isValidJson}) => {
    return {
        type: 'UPDATE_JSON_STRING',
        changedText,
        isValidJson
    }
}

export const updateJsonObject = newObject => {
    return{
        type: 'UPDATE_JSON_OBJECT',
        newObject
    }
}