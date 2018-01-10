import React from 'react'

const ObjectEditor = ({jsonObj, addNewObject}) =>{
    return (<div id="object-editor">
        <h1>ObjectEditor</h1>
        <span>{JSON.stringify(jsonObj, null, 2)}</span>
        <button onClick={addNewObject}>Add new object</button>
    </div>)
}

export default ObjectEditor