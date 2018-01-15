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

export const addNewObjectToJson = newObject => {
    return {
        type: 'ADD_NEW_OBJECT',
        newObject
    }
}

export const updateJsonStringFromObject = () =>{
    return {
        type: 'UPDATE_JSON_STRING_FROM_OBJECT'
    }
}

export const changeTextElementToEditMode = id => {
    return {
        type: 'CHANGE_TEXT_TO_EDIT_MODE',
        id
    }
}

export const updateJsonObjectFromIputField = (property, value) => {
    return {
        type: 'UPDATE_JSON_OBJECT_FROM_INPUT_FIELD',
        property,
        value
    }
}