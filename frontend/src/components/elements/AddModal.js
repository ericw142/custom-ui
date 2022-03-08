import React, { useState } from "react";

export const AddModal = (props) => {
    const [newElement, setNewElement] = useState({type: '', content: '', src: ''})

    const handleNewElementCreation = () => {
        let id = 'task-'+(Object.keys(props.tasks).length+1);
        if (newElement.type === "") {
            return
        }
        let newTaskIds = [...props.columns['column-1'].taskIds]
        newTaskIds.push(id)
        props.setTasks({
            ...props.tasks, 
            [id]: {id, type: newElement.type, content: newElement.content, src: newElement.src}
        })
        props.setColumns({
            ...props.columns,
            'column-1': {
                ...props.columns['column-1'],
                taskIds: newTaskIds
            }
        })
        props.setRerender(!props.rerender)
        props.setIsActive('')
    }

    return (
        <div className={"modal" + props.isActive}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <div className="content">
                        <p>Select a UI element to add to the page.</p>
                        <div className="columns">
                            <div className="column">
                                <select onChange={(e) => setNewElement({...newElement, type: e.target.value})} className="select is-medium max-width">
                                    <option></option>
                                    <option value="Text">Text</option>
                                    <option value="Image">Image</option>
                                </select>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                {newElement.type === "Text" ? (
                                    <input className="input" placeholder="enter text content" type="text" onChange={(e) => setNewElement({...newElement, content: e.target.value})}></input>
                                ) : newElement.type === "Image" ? (
                                    <input className="input" placeholder="enter image url" type="text" onChange={(e) => setNewElement({...newElement, src: e.target.value})}></input>
                                ) : <></>}
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <button className="button" onClick={() => handleNewElementCreation()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => props.setIsActive('')} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}