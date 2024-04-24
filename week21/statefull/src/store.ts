interface Game{
    id:string;
    whitePlayernames:string;
    blackPlayernames:string
    moves:string[];
}
// export const games:Game[] = [];


export class GameManager{
    private const games:Game[] = [];
    constructor(){
        this.games = []
    }

    addMove(gameId:string , move:string)
    {
        const game = 
    }

}

export const gmMngr = new GameManager();