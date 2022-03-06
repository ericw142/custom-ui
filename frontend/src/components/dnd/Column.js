import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";


export const Column = (props) => {
    return (
        <div className='column p-4 fade-in min-height'>
            <input className="input" defaultValue={props.column.title} type="text"></input>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={snapshot.isDraggingOver ? 'pt-4 bg-transition has-background-light' : 'pt-4 bg-transition'}
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