import React from 'react'

const TextElement = ({textContent, isEditMode, elementKey, changeToEditMode, saveTextFromInput}) => {
    if(isEditMode)
    {
        return (
            <input value={textContent} onChange={saveTextFromInput} />
        )
    }
    return (
        <p onDoubleClick={changeToEditMode}>{textContent}</p>
    )
}

export default TextElement