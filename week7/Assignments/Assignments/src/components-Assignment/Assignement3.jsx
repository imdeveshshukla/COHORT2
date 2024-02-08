import './Assignment3.css'
export default function Assignment3(){
    return<div className="ParaGenerator">
        <div className='forInput'>
            <input type="text" name="noOfWords" id="" enterKeyHint="Enter words" />
            <button>Generate</button>

        </div>

        <textarea name="Paragraphs" id="" cols="100" rows="50"></textarea>
    </div>
}