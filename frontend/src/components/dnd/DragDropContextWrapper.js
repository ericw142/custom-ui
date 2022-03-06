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

        const start = props.columns[source.droppableId];
        const finish = props.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: [...newTaskIds]
            }
            props.setColumns({
                ...props.columns,
                [newColumn.id]: newColumn,
            })
        } else {
            const startTaskIds = Array.from(start.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStart = {
                ...start,
                taskIds: startTaskIds,
            };
            const finishTaskIds = Array.from(finish.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds,
            };
            props.setColumns({
                ...props.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            })
        }

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