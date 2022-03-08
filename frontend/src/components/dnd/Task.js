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
                            {props.task.type === 'Image' ? (
                                <>
                                    <h5 className="title is-5">Image Element</h5>
                                    <Image src={props.task.src}/>
                                </>
                            ) : (
                                <>
                                    <h5 className="title is-5">Text Element</h5>
                                    <p>{props.task.content}</p>
                                </>
                            )}
                    </div>
            )}
        </Draggable>
    )
}