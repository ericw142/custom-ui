import React from 'react';

export const DragDropContext = (props) => {

    const renderColumns = (props) => {
        let jsx = [];
        for (let i = 0; i < props.columnTotal; i++) {
            jsx.push(
                <div className='column fade-in'>{i + 1}</div>
            )
        }
        return jsx;
    }

    return (
        <div className="columns">
            {renderColumns(props)}
        </div>
    )
}