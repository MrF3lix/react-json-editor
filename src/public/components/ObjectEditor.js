import React from 'react'

const ObjectEditor = ({jsonObj}) =>{
    return (<div id="object-editor">
        <h1>ObjectEditor</h1>
        <span>{JSON.stringify(jsonObj, null, 2)}</span>
    </div>)
}

export default ObjectEditor