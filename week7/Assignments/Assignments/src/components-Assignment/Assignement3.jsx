import { useState } from 'react'
import './Assignment3.css'
export default function Assignment3(){
    const [num,setNum] = useState(0);
    const words= ["I",".","am","is","this",'got',"any"]
    function changeNUm(nums) {
        setNum(nums.target.value);
    }
    
    function generatPara(){
        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        
            for (let index = 0; index < num; index++) {
                const element = array[getRandomInteger(0,num)];
                const str = " "+element+" ";
                
            }
    
    }
    return<div className="ParaGenerator">
        <div className='forInput'>
            <input type="number" value={num} name="noOfWords" id="inpNum" 
            onChange={changeNUm}
            placeholder='Enter number' />
            <button
            onClick={
                ()=>console.log(num)
            }
            >Generate</button>
        </div>
        <textarea name="Paragraphs" id="paraGraph" cols="100" rows="50"></textarea>
    </div>
}