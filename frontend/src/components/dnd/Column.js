import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";


export const Column = (props) => {
    return (
        <div className='column fade-in min-height'>
            <h4 className="is-size-4">{props.column.title}</h4>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={snapshot.isDraggingOver ? 'p-4 bg-transition has-background-light' : 'p-4 bg-transition'}
                    >
                        {props.tasks.map((task, index) => {
                            return (
                                <Task 
                                    key={task.id} 
                                    index={index} 
                                    task={task} 
                                />
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}