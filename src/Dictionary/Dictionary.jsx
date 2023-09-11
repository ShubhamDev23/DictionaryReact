import React, { useState } from "react";
import "../styles/dictionary.css"
import axios from "axios";
import Result from "./Result"
const Dictionary = () => {
    const [result,setResult]=useState(null);
    const [word, setword ]=useState("");
    const api="https://api.dictionaryapi.dev/api/v2/entries/en"
    
    async function SearchIt(){
        try{
            const res=await axios.get(`${api}/${word}`);
            console.log(res,"res");
            setResult(res.data[0]);
        }
        catch(e){
            console.log(e)
        }
    }
    function clearIt (){
        setword('');
        setResult('');
    }

  return (
    <div className="container">
      <div className="main">
        <div className="searchbox">
          <input className="input"
          placeholder="enter word to search" 
          onChange={(e)=>setword(e.target.value)}
          value={word}
          />
          <button type ="submit" onClick={SearchIt}>search</button>
          <button type ="submit" className="clear" onClick={clearIt}>clear</button>
        </div>
        {result && <Result {...{result}}/>}
       
      </div>
    </div>
  );
};

export default Dictionary;

