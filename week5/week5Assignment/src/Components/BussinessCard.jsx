import './BussinessCard.css'

export default function BussinessCard({ personDet }) {
    return <div className="bussinessCard">
        <h1>{personDet.name}</h1>
        <p>{ personDet.bio }</p>
        <h4>Interest</h4>
        <ul>
            { personDet.interest.map((x,index)=><li key={index}>{x}</li>)}
        </ul>
        <button> <a href={personDet.links[0]} target='_blank'> LinkedIn </a> </button>
        <button><a href={personDet.links[1]} target='_blank'>Twitter </a></button>
    </div>
    
}