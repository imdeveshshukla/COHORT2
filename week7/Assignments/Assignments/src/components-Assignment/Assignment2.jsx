import './Assignment2.css'
export default function Assignment2(){
    function changeColor(color) {
        document.body.style.backgroundColor = color;
    }

    return<div className="BtnGrp">
        <button className='red' style={{'background-color':'red'}} 
        onClick={()=>changeColor('red')}
        >Red</button>
        <button className='yellow' style={{'background-color':'yellow'}} 
        onClick={()=>changeColor('yellow')}>Yellow</button>
        <button style={{'background-color':'black','color':'white'}}
        onClick={()=>changeColor('black')}
        >Black</button>
        <button style={{'background-color':'purple'}}
        onClick={()=>changeColor('purple')}
        >Purple</button>
        <button style={{'background-color':'green'}}
        onClick={()=>changeColor('green')}
        >Green</button>
        <button style={{'background-color':'white'}}
        onClick={()=>changeColor('white')}
        >White</button>
    </div>
}