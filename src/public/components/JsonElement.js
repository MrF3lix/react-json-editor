import React from 'react'
import TextElement from './TextElement'

const JsonElement = ({jsonObject, changeToEditMode, saveTextFromInput}) =>{
    let keys = Object.keys(jsonObject);
    let content = jsonObject[keys];

    return(
        <div className="json-element">
            <h2>{keys}</h2>
            <div className="json-child-element">
                <TextElement textContent={content} isEditMode={true} elementKey={keys} changeToEditMode={changeToEditMode} saveTextFromInput={saveTextFromInput} />
            </div>
        </div>
    )
}

export default JsonElement