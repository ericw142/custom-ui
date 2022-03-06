import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";


export const Column = (props) => {
    return (
        <div className='column fade-in'>
            <h4>{props.column.title}</h4>
            <Droppable droppableId={props.column.id}>
                {(provided) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
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