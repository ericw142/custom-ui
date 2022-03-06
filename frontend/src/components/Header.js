import React from 'react';

export const Header = (props) => {
    return (
        <header>
            <h1 className='title is-1'>custom-ui</h1>
            <h5 className='subtitle'>
                user controlled UI layout using&nbsp;
                <a target="_blank" href="https://www.npmjs.com/package/react-beautiful-dnd">react-beautiful-dnd</a>
                &nbsp;and css styles from <a target="_blank" href="https://bulma.io/">bulma</a>
                &nbsp;- by <a target="_blank" href="https://github.com/ericw142">Eric Warshawsky</a>
            </h5>
        </header>
    )
}