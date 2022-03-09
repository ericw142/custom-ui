import React, { useState, useEffect } from 'react';
import axios from 'axios';
import initialData from '../utils/initialData';
import { DragDropContextWrapper } from './dnd/DragDropContextWrapper';
import { AddModal } from './elements/AddModal';
import { Footer } from './Footer';

export const Body = () => {
    const [columns, setColumns] = useState(initialData.columns)
    const [columnOrder, setColumnOrder] = useState(initialData.columnOrder)
    const [tasks, setTasks] = useState(initialData.tasks)
    const [columnTotal, setColumnTotal] = useState(2)
    const [columnText, setColumnText] = useState('two')
    const [isActive, setIsActive] = useState('')
    const [rerender, setRerender] = useState(false)

    const changeColumnTotal = () => {
        switch (columnTotal) {
            case (1) : 
                setColumnTotal(2)
                setColumns({...columns, 'column-2': {
                    id: 'column-2',
                    title: '',
                    taskIds: [],
                }})
                setColumnOrder([...columnOrder, 'column-2'])
                setColumnText('two')
            break;
            case (2) :
                setColumnTotal(3)
                setColumns({...columns, 'column-3': {
                    id: 'column-3',
                    title: '',
                    taskIds: [],
                }})
                setColumnOrder([...columnOrder, 'column-3'])
                setColumnText('three')
            break;
            case (3) :
                setColumnTotal(4)
                setColumns({...columns, 'column-4': {
                    id: 'column-4',
                    title: '',
                    taskIds: []
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

    const openCloseModal = () => {
        if (isActive === '') setIsActive(' is-active')
        else setIsActive('')
    }

    const saveNewLayout = () => {
        axios.post('/newLayout', {columns, columnOrder, tasks})
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    const deleteTask = (id, columnId) => {
        let updatedTasks = {...tasks};
        delete updatedTasks[id];

        let updatedColumns = {...columns};
        let idx = updatedColumns[columnId].taskIds.indexOf(id);
        updatedColumns[columnId].taskIds.splice(idx, 1);

        setTasks(updatedTasks)
        setColumns(updatedColumns)
        setRerender(!rerender)
    }

    useEffect(() => {
        axios.get('/savedLayout')
        .then(resp => {
            if (resp.status === 200) {
                setColumns(resp.data.columns)
                setColumnOrder(resp.data.columnOrder)
                setTasks(resp.data.tasks)
                setRerender(!rerender)
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <main className='has-text-centered container'>
            <AddModal 
                isActive={isActive} 
                setIsActive={setIsActive} 
                tasks={tasks} 
                setTasks={setTasks} 
                columns={columns} 
                setColumns={setColumns} 
                rerender={rerender}
                setRerender={setRerender}
            />
            <div className='columns is-mobile'>
                    <div className='column'></div>
                    <div className='column is-flex'>
                        <button onClick={() => changeColumnTotal()} className='ml-auto button title is-6'>{columnText}</button>
                        <p className='mr-auto mt-1 button-padding title is-6'>column{columnTotal > 1 ? <span>s</span> : <></>}</p>
                    </div>
                    <div className='column is-flex'>
                        <button onClick={() => openCloseModal()} className='ml-auto button title is-6'>add UI element</button>
                    </div>
            </div>
            <DragDropContextWrapper 
                columnOrder={columnOrder} 
                columns={columns} 
                setColumns={setColumns} 
                tasks={tasks} 
                deleteTask={deleteTask}
                columnTotal={columnTotal}
                rerender={rerender}
                setRerender={setRerender}
            />
            <Footer saveNewLayout={saveNewLayout}/>
        </main>
    )
}