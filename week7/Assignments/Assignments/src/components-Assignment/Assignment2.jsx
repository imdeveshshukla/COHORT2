import { useEffect, useState } from 'react';
import './Assignment2.css'
export default function Assignment2(){
    const [color,setColor] = useState('white');
    const [textColor,settextColor] = useState('black');

    useEffect(()=>{
        document.body.style.backgroundColor = color
        if(color=='black')
            settextColor('white');
        else
        settextColor('black')
    
        document.body.style.color = textColor;
    }
        
    ,[color,textColor]);


    return<div className="BtnGrp">
        <button className='red' style={{'background-color':'red'}} 
        onClick={()=>setColor('red')}
        >Red</button>
        <button className='yellow' style={{'background-color':'yellow'}} 
        onClick={()=>setColor('yellow')}>Yellow</button>
        <button style={{'background-color':'black','color':'white'}}
        onClick={()=>setColor('black')}
        >Black</button>
        <button style={{'background-color':'purple'}}
        onClick={()=>setColor('purple')}
        >Purple</button>
        <button style={{'background-color':'green'}}
        onClick={()=>setColor('green')}
        >Green</button>
        <button style={{'background-color':'white'}}
        onClick={()=>setColor('white')}
        >White</button>
    </div>
}