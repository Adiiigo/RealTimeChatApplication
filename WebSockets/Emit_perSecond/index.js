const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const httpServer = require('http').createServer((req,res)=>{
    //serve index.html file
    res.setHeader('Conteny-Type' , 'text/html') ;
    res.setHeader('Content-Length', Buffer.byteLength(content)) ;
    res.end(content) ;
}) ;

const io = require('socket.io').listen(httpServer) ;

io.on('connect' , socket =>{
    console.log('connect') ;
    let counter = 0 ;
    //Every Second increase the counter and emit it to the client
    setInterval(()=>{
        socket.emit('hello', ++counter) ;
    }, 1000);
});

httpServer.listen(3000, () =>{
    console.log('go to http://localhost:3000') ;
})