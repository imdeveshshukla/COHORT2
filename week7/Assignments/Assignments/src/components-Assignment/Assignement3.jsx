import { useState } from 'react'
import './Assignment3.css'
import words from 'an-array-of-english-words' //used Library
export default function Assignment3(){
    const [num,setNum] = useState(0);
    const [text,setText] = useState("hey")
    // const words= ["I",".","am","is","this",'got',"any","Devesh",""]
    function changeNUm(nums) {
        setNum(nums.target.value);
    }
    
    function generatPara(){
        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          let str =""; 
          for(let j = 0;j<num;j++)
          {
              for (let index = 0; index < 10; index++) {
                  const element = words[getRandomInteger(0,words.length-1)];
                  str = str+element+" ";
                //   console.log(str);
              }
              str +="\n\n";
          }
            setText(str);
    
    }
    return<div className="ParaGenerator">
        <div className='forInput'>
            <input type="number" value={num} name="noOfWords" id="inpNum" 
            onChange={changeNUm}
            placeholder='Enter number' />
            <button
            onClick={
                generatPara
            }
            >Generate</button>
        </div>
        <textarea name="txt" id="" cols="100" rows="10" value={text}></textarea>
        {/* <div className='textArea' >{text}</div> */}
    </div>
}