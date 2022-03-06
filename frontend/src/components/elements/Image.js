import React from "react";

export const Image = (props) => {
    return (
        <figure className="image">
            <img src={props.src}/>
        </figure>
    )
}