import WebSocket, { WebSocketServer } from "ws";
import http from "http"

const server = http.createServer(function(req:any,res:any){
    console.log((new Date())+'Received request for '+req.url);
    res.end("hi there");
})

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(socket) {
  socket.on('error', console.error);

  console.log("Clients "+wss.clients.size);
  socket.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
        console.log(client.url+" = ");
    }
    });
    console.log("Received Data "+data);
  });
  socket.send('Hello! Message From Server!!');
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});