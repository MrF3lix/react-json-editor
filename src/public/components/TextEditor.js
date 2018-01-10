import React from 'react'
import PropTypes from 'prop-types'

const TextEditor = (jsonStr, onTextChange) => (
    <div id="text-editor">    
        <h1>TextEditor</h1>
        <div className="text">
            <textarea onChange={() => onTextChange} value={JSON.stringify(jsonStr, null, 2)}></textarea>
        </div>
    </div>
)

export default TextEditor