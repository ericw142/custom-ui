import React, { useState } from 'react';
import { DragDropContext } from './dnd/DragDropContext';

export const Body = () => {
    const [columnTotal, setColumnTotal] = useState(1)
    const [columnText, setColumnText] = useState('one')

    const changeColumnTotal = () => {
        switch (columnTotal) {
            case (1) : 
                setColumnTotal(2)
                setColumnText('two')
            break;
            case (2) :
                setColumnTotal(3)
                setColumnText('three')
            break;
            case (3) :
                setColumnTotal(4)
                setColumnText('four')
            break;
            case (4) :
                setColumnTotal(1)
                setColumnText('one')
            break;
            default :
                setColumnTotal(1)
                setColumnText('one')
            break;
        }
    }

    return (
        <div className='has-text-centered'>
            <div className='columns'>
                <div className='column is-flex is-justify-content-center'>
                    <button onClick={() => changeColumnTotal()} className='button'>{columnText}</button>
                    <p className='mb-0 button-padding'>column{columnTotal > 1 ? <span>s</span> : <></>}</p>
                </div>
            </div>
            <DragDropContext columnTotal={columnTotal}/>
        </div>
    )
}