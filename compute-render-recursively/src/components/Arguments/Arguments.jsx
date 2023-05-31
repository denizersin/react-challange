import { data } from 'autoprefixer';
import React, { useState } from 'react'

const arg = {
    name: 'arg1',
    value: undefined
}


export default function Arguments({ args, setArgs }) {
    const [argVal, setArgVal] = useState('');
    const [argName, setArgName] = useState('');
    const handleAddArg = (e) => {
        setArgs([...args, { name: argName, value: argVal }])
        setArgVal('')
        setArgName('')
    }


    console.log(args)

    return (
        <div className={'Arguments component'}> <span>Arguments</span>
            <div className="add-arg flex">
                <input type="text" value={argName} onChange={(e) => setArgName(e.target.value)} placeholder='argName' />
                <input type="text" value={argVal} onChange={(e) => setArgVal(e.target.value)} placeholder='argValue' />
                <button className=' btn bg-gray-300' onClick={handleAddArg}>add arg</button>
            </div>
            <div className="args">
                {
                    args.map(argData => (
                        <div key={argData.name}>{argData.name}:{(argData.value)}</div>
                    ))
                }
            </div>
        </div>
    )
}
