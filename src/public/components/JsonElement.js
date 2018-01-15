import React from 'react'
import TextElement from './TextElement'

const JsonElement = ({objectKey, content, changeToEditMode, saveTextFromInput}) =>{

    console.log(Object.keys(content))

    if(typeof content === 'object')
    {

        let keys = Object.keys(content)

        return(
            <div className="json-element">
                <h2>{objectKey}</h2>
                <div className="json-child-element">
                    {keys.map((key, i) => (
                        <JsonElement key={i} objectKey={key} content={content[key]} changeToEditMode={() => changeToEditMode(i)} saveTextFromInput={event => saveTextFromInput(event, key)}/>
                    ))}
                </div>
            </div>
        )
    }

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