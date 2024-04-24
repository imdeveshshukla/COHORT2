import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const app = express();
const JWT_SECRET = "devesh";
app.use(cookieParser());
app.use(express.json());                 
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post('/signin',(req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;

    //Check email and pass auth

    const token = jwt.sign({
        id:email,
    }, JWT_SECRET);

    res.cookie("token",token);
    res.send("Logged In")
});

app.get('/user',(req,res)=>{
    const token = req.cookies.token;
    const decode = jwt.verify(token,JWT_SECRET) as JwtPayload;

    res.send({
        userId : decode.id
    })
})


app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});




app.listen(3000);