import React from "react";

export const Footer = (props) => {
    return (
        <footer className='columns pl-3 pr-3 pb-3'>
            <div className='column is-flex'>
                <button onClick={() => props.saveNewLayout()} className='ml-auto button title is-6'>Save</button>
            </div>
        </footer>
    )
}