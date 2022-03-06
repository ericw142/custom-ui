import React, { useState, useEffect } from 'react';
import { Column } from './Column';

export const DragDropContext = (props) => {
    const [jsx, setJsx] = useState([])
    const renderColumns = () => {
        let temp = [];
        temp.push(props.columnOrder.map(columnId => {
            let column = props.columns[columnId];
            let tasks = column.taskIds.map(taskId => props.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks}/>
        }))
        setJsx([...temp]);
    }

    useEffect(() => {
        renderColumns()
    }, [props.columnTotal])

    return (
        <div className="columns">
            {jsx}
        </div>
    )
}