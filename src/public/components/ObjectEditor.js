import React from 'react'
import JsonElement from './JsonElement'

const ObjectEditor = ({jsonObj, addNewObject, changeToEditMode, saveTextFromInput}) =>{
    
    let keys = Object.keys(jsonObj)
    
    return (
        <div id="object-editor">
            <h1>ObjectEditor</h1>

            {jsonObj.map((object, i) => (
                <JsonElement key={i} jsonObject={object} changeToEditMode={() => changeToEditMode(i)} saveTextFromInput={event => saveTextFromInput(event, i)}/>
            ))}
 
            <button onClick={addNewObject}>Add new object</button>
        </div>
    )
}

export default ObjectEditor