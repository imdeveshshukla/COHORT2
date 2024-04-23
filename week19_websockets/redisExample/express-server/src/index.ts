import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json())

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.post('/submit',async(req:any,res:any)=>{
    const {probId,code,lang} = req.body;

    try{
        await client.PUBLISH("Problems",JSON.stringify({probId,code,lang}));
        res.status(200).send("Submission Received");
    }
    catch(err)
    {
        res.status(500).send("Fails");
    }
});


async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}
startServer()