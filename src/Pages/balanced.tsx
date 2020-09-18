import { errorMonitor } from 'events';
import React, { useState } from 'react';

const Balanced:React.FC = (props) => {

  const [inputValue, setInputValue] = useState<string>(' ')
  const [errorArray, setErrorArray] = useState<string[]>([])
  
  
  const [errorUnbalanced, setErrorUnbalanced] = useState(false)
  const [errorMatching, setErrorMatching] = useState(false)
  var coutPainter = 0

  //arrays to check the matching charact
  var matchingLeft:string[] = []
  var matchingRight:string[] = []


  const handleInputChange = (value:string) => {
    setInputValue(value)
    const stack:string[] = []
    setErrorUnbalanced(false)

    for (var i = 0; i < inputValue.length; i++) {
      if((inputValue[i] === ')' || inputValue[i] === '}' || inputValue[i] === ']') && stack.length === 0){
        setErrorUnbalanced(true)
        setErrorMatching(true)
      }
      else if(inputValue[i] === '(' || inputValue[i] === '{' || inputValue[i] === '['){
        stack.push(inputValue[i])
      }
      else if((inputValue[i] === ')' || inputValue[i] === '}' || inputValue[i] === ']') && stack.length !== 0){
        stack.pop()
      }
    }
    if(stack.length !== 0){
      setErrorUnbalanced(true)
    }

    setErrorMatching(false)
    for (var i = 0; i < inputValue.length; i++) {
      if(inputValue[i] === '(' || inputValue[i] === '{' || inputValue[i] === '['){
        matchingLeft.push(inputValue[i])
      }
      else if(inputValue[i] === ')' || inputValue[i] === '}' || inputValue[i] === ']'){
        matchingRight.unshift(inputValue[i])
      }
    }

    if(matchingLeft.length === matchingRight.length){
      for(var i = 0; i < matchingLeft.length; i++) {
        if(matchingLeft[i] === '(' && matchingRight[i ] !== ')'){
          setErrorMatching(true)
        }
        else if(matchingLeft[i] === '{' && matchingRight[i] !== '}'){
          setErrorMatching(true)
        }
        else if(matchingLeft[i] === '[' && matchingRight[i] !== ']'){
          setErrorMatching(true)
        }

        // if(matchingLeft[i] === '(' && matchingRight[matchingRight.length - i - 1 ] !== ')'){
        //   console.log('erro',errorMatching)
        //   setErrorMatching(false)
        // }
        // else if(matchingLeft[i] === '{' && matchingRight[matchingRight.length - i - 1 ] !== '}'){
        //   console.log('erro',errorMatching)
        //   setErrorMatching(false)
        // }
        // else if(matchingLeft[i] === '[' && matchingRight[matchingRight.length - i - 1 ] !== ']'){
        //   console.log('erro',errorMatching)
        //   setErrorMatching(false)
        // }
      }
      console.log(matchingLeft)
      console.log(matchingRight)
    }
  }
// const handleInputChange = (value:string) => {
//   setInputValue(value)

//   const string = value.substr(value.length - 1)
//   const newArray = stringArray
//   const errorArrayCopy = errorArray
  
//   var indexLastRight = 0
//   for (var i = 0; i < inputValue.length; i++) {
    
//     if(inputValue.charAt(i) === '('){
//       for (var j = inputValue.length; j > i; j--) {
//         if(inputValue.charAt(j) === ')'){
//           setBalanced('Balanced')
//           indexLastRight = j
//           break
//         }
//         else{
//           setBalanced('Not Balanced')
//         }
//       }        
//     }
//     else if(inputValue.charAt(i) === ')' && i != indexLastRight){
//       setBalanced('Not Balanced')
//     }
//     console.log(balanced)
//     newArray.push(string)
//     setStringArray(newArray)
//   }

  const handleClick = () => {
    if(errorArray.length > 0)
      alert('Not Balanced :(')
    else
      alert('Balenced!')
  }

  const replaceString = (inputString:string,text:string, newText:string, index:number) => {
    var t=0;   
    inputString = inputString.replace(/text/g, function (match) {
      t++;
      return (t === index) ? newText : match;
    });
    return inputString
  }

  return (
    <div className="App container">
      <h1>Type something</h1>
      <h2>{errorUnbalanced ? 'Error: Not balanced' : ''}</h2>
      <h2>{errorMatching ? 'Error: Characters not matching' : ''}</h2>
      <input className="main-input" type="text" onChange={(e) => handleInputChange(e.target.value)}/>
      <div dangerouslySetInnerHTML={{ __html: `<h2>${inputValue}</h2>` }} />
      <p>Conseguimos fazer o check com as situacoes {'({})'} OU {'(){}'}, nao as duas juntas</p>
      {/* <button className="btn btn-green" onClick={(e) => handleClick()}>Check Values</button> */}
    </div>
  );
}

export default Balanced;
