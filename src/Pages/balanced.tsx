import { stat } from 'fs';
import React, { useState } from 'react';

const Balanced:React.FC = (props) => {
  const [code, setCode] = useState('')
  const [validCode, setValidCode] = useState(true)
  const [firstStack, setFirstStack] = useState<string[]>([])
  const [secondStack, setSecondStack] = useState<string[]>([])
  const [thirdStack, setThirdStack] = useState<string[]>([])
  const [fourthStack, setFourthStack] = useState<string[]>([])

  const handleAdd = () => {
    if(!code){
      alert('Empty Code')
      return
    }
    else{
      firstStack.map(e => {
        if(e === code){
          setValidCode(false)
          return
        }
      })
      secondStack.map(e => {
        if(e === code){
          setValidCode(false)
          return
        }
      })
      thirdStack.map(e => {
        if(e === code){
          setValidCode(false)
          return
        }
      })
      fourthStack.map(e => {
        if(e === code){
          setValidCode(false)
          return
        }
      })

      if(!validCode){
        alert('Code already exist')
        setValidCode(true)
        return
      }
      else{
        if(firstStack.length < 3){
          var stack = firstStack
          stack.push(code)
          setFirstStack(stack)
          return
        }
        else if(secondStack.length < 3){
          var stack = secondStack
          stack.push(code)
          setSecondStack(stack)
        }
        else if(thirdStack.length < 3){
          var stack = thirdStack
          stack.push(code)
          setThirdStack(stack)
          return
        }
        else if(fourthStack.length < 3){
          var stack = fourthStack 
          stack.push(code)
          setFourthStack(stack)
          return
        }
        else{
          alert('The Docks`re full, try again later')
          return
        }
      }
    }
  }

  const handleRemove = () => {
    var isEmpty = true
    firstStack.map((e,index) => {
      if(e === code){
        var stack = firstStack
        stack.splice(index,1)
        alert(`${e} removed`)
        isEmpty = false
      }
    })
    secondStack.map((e,index) => {
      if(e === code){
        var stack = secondStack
        stack.splice(index,1)
        alert(`${e} removed`)
        isEmpty = false
      }
    })
    thirdStack.map((e,index) => {
      if(e === code){
        var stack = thirdStack
        stack.splice(index,1)
        alert(`${e} removed`)
        isEmpty = false
      }
    })
    fourthStack.map((e,index) => {
      if(e === code){
        var stack = fourthStack
        stack.splice(index,1)
        alert(`${e} removed`)
        isEmpty = false
      }
    })
    if(isEmpty)
      alert('The code doesn`t exist in none of the Docks')
  }

  return (
    <>
      <div className="container">git init

        <h5>Add Code</h5>
        <input value={code} type="text" onChange={(e) => setCode(e.target.value)} />
        <button className="btn btn-green mt-2" onClick={handleAdd}>Add Code</button>
        <button className="btn btn-orange mt-2"  onClick={handleRemove}>Remove Code</button>

        <h5>First Stack</h5>
        <input className="main-input" value={firstStack} type="text"/>
        <h5>Second Stack</h5>
        <input className="main-input" value={secondStack} type="text"/>
        <h5>Third Stack</h5>
        <input className="main-input" value={thirdStack} type="text"/>
        <h5>Fourth Stack</h5>
        <input className="main-input" value={fourthStack} type="text"/>
      </div>

    </>
  )
}

export default Balanced;
