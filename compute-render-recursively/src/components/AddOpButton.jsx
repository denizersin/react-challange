import React from 'react'
import { getUniqId } from '../App'

export default function AddOpButton({ parentId, operationsMap, setOperationsMap }) {


    return (
        <div className={'AddOp  component'}> <span>AddOp</span>
            <button onClick={(e) => {
                const newOp = {
                    id: getUniqId(operationsMap),
                    parentId: parentId,
                    opType: 'default',
                    value: undefined
                }
                console.log(newOp)
                setOperationsMap({ ...operationsMap, [newOp.id]: newOp })
            }} className='btn'>add op</button>
        </div>
    )
}
