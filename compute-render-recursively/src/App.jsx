import React, { useEffect, useState } from 'react'
import OperationContainer from './components/OperationContainer';
import Arguments from './components/Arguments/Arguments';
import AddOpButton from './components/AddOpButton';


//func getUniqId



const operationsMap1 = {
  1: {
    id: 1,
    parentId: -1,
    opType: 'default',//'default | argument | constant | or | and',
    value: undefined //default
  },
}




export default function App() {
  const [result, setResult] = useState();
  const [operationsMap, setOperationsMap] = useState(operationsMap1);
  const [args, setArgs] = useState([{ name: 'arg1', value: 'hello world' }]);


  useEffect(() => {
    //get Root id
    let rootId = Object.values(operationsMap).find(d => d.parentId == -1)?.id;
    if (rootId == undefined) {
      setResult('undefined')
      return;
    }
    console.log(rootId, 'rootId')
    console.log(operationsMap)
    setResult(
      logResult(getResult(operationsMap[rootId], operationsMap))
    )
  }, [operationsMap]);

  const opers = Object.values(operationsMap).filter(d => d.parentId == -1);

  return (
    <div className={'App component'}> <span>App</span>
      <Arguments args={args} setArgs={setArgs} />
      {
        opers.map(data => (
          <OperationContainer key={data.id} data={data} operationsMap={operationsMap} setOperationsMap={setOperationsMap} args={args} />
        ))
      }
      result:{result}
      {opers.length == 0 && < AddOpButton parentId={-1} operationsMap={operationsMap} setOperationsMap={setOperationsMap} />}
    </div>
  )
}


//!utils
export const getUniqId = (map) => {
  for (let i = 0; i < 9999; i++) {
    if (map[i] === undefined) {
      return i;
    }
  }
}


function logResult(result) {
  if (result === true) {
    return 'true'
  }
  if (result === false) {
    return 'false'
  }
  if (result === undefined)
    return 'undefined'

  return result

}

//! get Operations Result recursively
function getResult(curr, operationsMap) {
  if (curr.opType == 'default') return undefined;

  if (curr.opType == 'constant') {
    if (curr.value == 'true') return true;
    if (curr.value == 'false') return false
    return undefined
  }

  if (curr.opType == 'or') {
    const childs = Object.values(operationsMap).filter(data => data.parentId == curr.id);
    let result = undefined;
    for (let i = 0; i < childs.length; i++) {
      result = result || getResult(childs[i], operationsMap)
      if (result) return true;
    }
    return result
  }
  if (curr.opType == 'and') {
    const childs = Object.values(operationsMap).filter(data => data.parentId == curr.id);
    if (childs.length === 0) return undefined;
    let result = true;
    for (let i = 0; i < childs.length; i++) {
      result = result && getResult(childs[i], operationsMap)
      if (!result) return false;
    }
    return result
  }

  if (curr.opType == 'argument') {
    return curr.value
  }
  return undefined
}

//!delete recursively
export function deleteOPeration(opId, operationsMap) {  //cloned operaionsArr
  delete operationsMap[opId];
  const childs = Object.values(operationsMap).filter(data => data.parentId == opId)
  childs.forEach(data => {
    deleteOPeration(data.id, operationsMap);
  })
}