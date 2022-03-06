import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={snapshot.isDragging ? "box bg-transition has-background-link has-text-white" : "box bg-transition"}>
                        <p>{props.task.content}</p>
                    </div>
            )}
        </Draggable>
    )
}