import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="box has-background-link-light">
                        <p>{props.task.content}</p>
                    </div>
            )}
        </Draggable>
    )
}