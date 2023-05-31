import React from 'react'

export default function Constant({ childs,thisData, setThisData, setOperationsMap, operationsMap  }) {


    const onSelectChange = (e) => {
        let prev = thisData.opType
        const newVal = e.target.value

        setOperationsMap({ ...operationsMap, [thisData.id]: { ...thisData, value: newVal } })
        setThisData({ ...thisData, value: newVal })

    }
    return (
        <div className={'Constant component'}> <span>Constant</span>
            <select value={thisData.value} name="cars" id="cars" onChange={onSelectChange}>
                <option disabled selected value="undefined"> -- select an constant -- </option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
        </div>
    )
}
