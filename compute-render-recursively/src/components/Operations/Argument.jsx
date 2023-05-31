import React from 'react'

export default function Argument({ thisData, setThisData, operationsMap, setOperationsMap, args }) {
    const onSelectChange = (e) => {
        let prev = thisData.opType
        const newVal = e.target.value


        console.log(newVal)

        setOperationsMap({
            ...operationsMap,
            [thisData.id]: { ...thisData, value: newVal }
        })

    }
    console.log(args)
    return (
        <div className={'Argument component'}> <span>Argument</span>
            <select onChange={onSelectChange} name="cars"  id="cars" placeholder='asd'>
                <option disabled selected  value="undefined"> -- select an argument -- </option>
                {
                    args.map(data => {
                        console.log(data,"*******8")
                        return <option key={data.name} value={data.name}>{data.name}</option>
                    })
                }
            </select>
        </div>
    )
}
