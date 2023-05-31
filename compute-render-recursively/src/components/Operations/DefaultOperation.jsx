import React from 'react'
import { getUniqId } from '../../App'

export default function DefaultOperation({ childs, thisData, setThisData, setOperationsMap, operationsMap }) {


    const onSelectChange = (e) => {
        let prev = thisData.opType
        const newVal = e.target.value
        const newOperationsMap = { ...operationsMap, [thisData.id]: { ...thisData, opType: newVal } };
        setOperationsMap(newOperationsMap);
        setThisData({ ...thisData, opType: newVal })
    }

    return (
        <div className={'DefaultOperation component '}> <span>DefaultOperation</span>
            <select value={thisData.opType} name="cars" id="cars" onChange={onSelectChange} >
                <option value="default"  disabled  > -- select an option -- </option>
                <option value="argument">argument</option>
                <option value="constant">constant</option>
                <option value="or">Or</option>
                <option value="and">And</option>
            </select>
        </div>
    )
}
