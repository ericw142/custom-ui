import React from "react";
import { Task } from "./Task";

export const Column = (props) => {
    const bgArray = [
        {box:'has-background-primary', text: ''}, {box:'has-background-info', text:'has-text-white'}, {box:'has-background-success', text:''}, 
        {box:'has-background-warning', text:''}, {box:'has-background-danger', text:'has-text-white'}, {box:'has-background-link', text:'has-text-white'}, 
        {box:'has-background-white', text:''}, {box:'has-background-black', text:'has-text-white'}, {box:'has-background-light', text:''},
        {box:'has-background-dark', text:'has-text-white'}
    ];
    return (
        <div className='column fade-in'>
            <h4>{props.column.title}</h4>
            {props.tasks.map(task => {
                let classIdx = Math.floor(Math.random() * bgArray.length);
                if (bgArray[classIdx]) {
                    return <Task key={task.id} task={task} boxStr={bgArray[classIdx].box} textStr={bgArray[classIdx].text}/>
                }
            })}
        </div>
    )
}