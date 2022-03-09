import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Image } from "../elements/Image";

export const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={snapshot.isDragging ? "box bg-transition has-background-link has-text-white" : "box bg-transition"}
                >
                    <div className="has-text-right mb-1"><button className="button" onClick={() => props.deleteTask(props.task.id, props.columnId)}>x</button></div>
                    {props.task.type === 'Image' ? (
                        <Image src={props.task.src}/>
                    ) : (
                        <p>{props.task.content}</p>
                    )}
                </div>
            )}
        </Draggable>
    )
}