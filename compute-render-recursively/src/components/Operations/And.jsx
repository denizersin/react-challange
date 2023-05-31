import React from 'react'
import OperationContainer from '../OperationContainer'
import AddOpButton from '../AddOpButton'

export default function And({ childs, thisData, setThisData, setOperationsMap, operationsMap,args }) {
    return (
        <div className={'And component'}> <span>And</span>
            <select name="cars" defaultValue={'saab'} id="cars" placeholder='asd'>
                <option disabled selected value> -- and -- </option>
            </select>
            <div className="childs">
                {
                    childs.length !== 0 && childs.map(data => (
                        <OperationContainer key={data.id} data={data} operationsMap={operationsMap} setOperationsMap={setOperationsMap} args={args} />
                    ))
                }
            </div>
            <AddOpButton parentId={thisData.id} operationsMap={operationsMap} setOperationsMap={setOperationsMap} />
        </div>
    )
}
