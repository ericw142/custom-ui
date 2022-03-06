import React, { useState } from 'react';
import initialData from '../utils/initialData';
import { DragDropContextWrapper } from './dnd/DragDropContextWrapper';

export const Body = () => {
    const [columns, setColumns] = useState(initialData.columns)
    const [columnOrder, setColumnOrder] = useState(initialData.columnOrder)
    const [tasks, setTasks] = useState(initialData.tasks)
    const [columnTotal, setColumnTotal] = useState(1)
    const [columnText, setColumnText] = useState('one')

    const changeColumnTotal = () => {
        switch (columnTotal) {
            case (1) : 
                setColumnTotal(2)
                setColumns({...columns, 'column-2': {
                    id: 'column-2',
                    title: 'Favorite Foods',
                    taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
                }})
                setColumnOrder([...columnOrder, 'column-2'])
                setColumnText('two')
            break;
            case (2) :
                setColumnTotal(3)
                setColumns({...columns, 'column-3': {
                    id: 'column-3',
                    title: 'Favorite Games',
                    taskIds: ['task-9', 'task-10', 'task-11', 'task-12'],
                }})
                setColumnOrder([...columnOrder, 'column-3'])
                setColumnText('three')
            break;
            case (3) :
                setColumnTotal(4)
                setColumns({...columns, 'column-4': {
                    id: 'column-4',
                    title: 'Technologies Used',
                    taskIds: ['task-13', 'task-14', 'task-15', 'task-16']
                }})
                setColumnOrder([...columnOrder, 'column-4'])
                setColumnText('four')
            break;
            case (4) :
                setColumnTotal(1)
                setColumns({'column-1': columns['column-1']})
                setColumnOrder(['column-1'])
                setColumnText('one')
            break;
            default :
                setColumnTotal(1)
                setColumns({'column-1': columns['column-1']})
                setColumnOrder(['column-1'])
                setColumnText('one')
            break;
        }
    }

    return (
        <div className='has-text-centered container'>
            <div className='columns'>
                <div className='column is-flex is-justify-content-center'>
                    <button onClick={() => changeColumnTotal()} className='button'>{columnText}</button>
                    <p className='mb-0 button-padding'>column{columnTotal > 1 ? <span>s</span> : <></>}</p>
                </div>
            </div>
            <DragDropContextWrapper 
                columnOrder={columnOrder} 
                columns={columns} 
                setColumns={setColumns} 
                tasks={tasks} 
                columnTotal={columnTotal}
            />
        </div>
    )
}