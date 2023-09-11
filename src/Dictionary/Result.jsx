import React from 'react'
import "../styles/dictionary.css"
const Mylist = ({result}) => {
  
 const {word,meanings}=result;
  return (
    <div>
      <div className='word'>word:{word}</div>
      
      <div className='meaning'>meaning:</div>
      <div className='result' >{meanings[0].definitions[0].definition}</div>
    </div>
  )
}

export default Mylist;
