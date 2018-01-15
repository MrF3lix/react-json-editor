import React from 'react'
import TextElement from './TextElement'

const JsonElement = ({objectKey, content, changeToEditMode, saveTextFromInput}) =>{
    return(
        <div className="json-element">
            <h2>{objectKey}</h2>
            <div className="json-child-element">
                <TextElement textContent={content} isEditMode={true} elementKey={objectKey} changeToEditMode={changeToEditMode} saveTextFromInput={saveTextFromInput} />
            </div>
        </div>
    )
}

export default JsonElement