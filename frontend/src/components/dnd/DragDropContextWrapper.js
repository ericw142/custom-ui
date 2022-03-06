import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from './Column';

export const DragDropContextWrapper = (props) => {
    const [rerender, setRerender] = useState(false)
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

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const column = props.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: [...newTaskIds]
        }
        props.setColumns({
            ...props.columns,
            [newColumn.id]: newColumn,
        })
        setRerender(!rerender)
    }

    useEffect(() => {
        renderColumns()
    }, [props.columnTotal, rerender])

    return (
        <div className="columns">
            <DragDropContext onDragEnd={onDragEnd}>
                {jsx}
            </DragDropContext>
        </div>
    )
}