import React from 'react'
import { deleteOPeration } from '../App';

export default function DeleteOppButton({ thisData, operationsMap, setOperationsMap }) {
    const handleDelete = (e) => {
        let newOperationsMap = { ...operationsMap }
        deleteOPeration(thisData.id, newOperationsMap);
        setOperationsMap(newOperationsMap);
    }
    return (
        <div className={'DeleteOppButton component'}> <span>DelOpt</span>
            <button onClick={handleDelete} className='bg-gray-300'>X</button>
        </div>
    )
}
