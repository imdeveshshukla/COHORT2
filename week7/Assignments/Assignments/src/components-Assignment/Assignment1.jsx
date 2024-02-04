import './Assignment1.css'
export default function Assignment1(){

    return(
        <div className="Cards">
            <img src="https://picsum.photos/200/300" alt="ProfileImg" />
            <p>Devesh Shukla</p>
            <p>London</p>
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