import React from 'react'
import PropTypes from 'prop-types'

const TextEditor = ({jsonStr, onTextChange, isJsonStringValid}) => (
    <div id="text-editor">    
        <h1>TextEditor</h1>
        <div className="text">
            <textarea onChange={onTextChange} value={jsonStr} className={isJsonStringValid ? 'valid' : 'invalid'}></textarea>
        </div>
    </div>
)

TextEditor.propTypes = {
    jsonStr: PropTypes.string.isRequired,
    isJsonStringValid: PropTypes.bool.isRequired,
    onTextChange: PropTypes.func.isRequired
}

export default TextEditor