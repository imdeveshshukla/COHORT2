import { gmMngr } from './store'
import { startLogger } from './logger'


startLogger()

setInterval(()=>{
    games.push({
        id:Math.random().toString(),
        whitePlayernames:"Alice",
        blackPlayernames: "jaskirat",
        moves: []
    })
}, 5000)