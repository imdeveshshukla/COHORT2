import { useEffect,useState } from "react";
export default function Assignment4(){
    const [profile,setProf] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/imdeveshshukla")
        .then(res => res.json())
        .then(d => setProf(d))
    }, [])
  
    console.log(profile);
    return(
        <div style={{ width:"400px",backgroundColor: "#ffcc00", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <img src={profile.avatar_url} alt="Profile Picture" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
    <h2 style={{ margin: "10px 0", color: "#333" }}>{profile.name}</h2>
    <p style={{ color: "#666",textWrap:"wrap",width:"350px",margin:"0" }}>{profile.bio}</p>
    <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🌟 Repositories: 75</li>
        <li>👥 Followers: 800</li>
        <li>📝 Contributions: 2,500</li>
    </ul>
    <a href={profile.html_url} target="_blank" style={{ textDecoration: "none", color: "#0366d6" }}>View Profile</a>
</div>

    )
}