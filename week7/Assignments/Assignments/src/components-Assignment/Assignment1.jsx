import './Assignment1.css'
export default function Assignment1({data}){

    return(
        <div className="Cards">
            <div className='IMBackgroung'></div>
            <img src={data.picture} alt="ProfileImg" />
            <div className='Detatils'>
                <p>{data.name}</p>
                <p>{data.gender}</p>
            </div>
            <div className="stats">
                <div className="followers">
                    <p>90K</p>
                    <span>Followers</span>
                </div>

                <div className="likes">
                    <p>90K</p>
                    <span>Likes</span>
                </div>

                <div className="Photos">
                    <p>90K</p>
                    <span>Photos</span>
                </div>
            </div>
        </div>
    )
}