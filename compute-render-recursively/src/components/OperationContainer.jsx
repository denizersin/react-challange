import React, { useState } from 'react'
import Argument from './Operations/Argument';
import Constant from './Operations/Constant';
import And from './Operations/And';
import Or from './Operations/Or';
import DefaultOperation from './Operations/DefaultOperation';
import DeleteOppButton from './DeleteOppButton';



const OpComponentsMap = {
    'default': DefaultOperation,
    'or': Or,
    'and': And,
    'argument': Argument,
    'constant': Constant
}


export default function OperationContainer({ data, operationsMap, setOperationsMap, args }) {
    const [thisData, setThisData] = useState(data);
    const OperationComponent = OpComponentsMap[thisData.opType];
    const childs = Object.values(operationsMap).filter(d => d.parentId == data.id);


    return (
        <div className={'Operation component flex'}> <span>Operation</span>
            <OperationComponent childs={childs} thisData={thisData} setThisData={setThisData} setOperationsMap={setOperationsMap} operationsMap={operationsMap} args={args} />
            <DeleteOppButton thisData={thisData} operationsMap={operationsMap} setOperationsMap={setOperationsMap} />
        </div>
    )
}
