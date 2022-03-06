import React from "react";

export const Task = (props) => {
    return (
        <div className={"box "+props.boxStr}>
            <p className={props.textStr}>{props.task.content}</p>
        </div>
    )
}