import React from 'react'
import JsonElement from './JsonElement'

const ObjectEditor = ({jsonObj, addNewObject, changeToEditMode, saveTextFromInput}) =>{
    let keys = Object.keys(jsonObj)    
    return (
        <div id="object-editor">
            <h1>ObjectEditor</h1>

            {keys.map((key, i) => (
                <JsonElement key={i} objectKey={key} content={jsonObj[key]} changeToEditMode={() => changeToEditMode(i)} saveTextFromInput={event => saveTextFromInput(event, key)}/>
            ))}
            
 
            <button onClick={addNewObject}>Add new object</button>
        </div>
    )
}

export default ObjectEditor