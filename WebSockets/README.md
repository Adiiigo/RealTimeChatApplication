#### Difference Between WebSocket and Socket.io

- WebSocket is the communication Protocol which provides bidirectional communication between the Client and the Server over a TCP connection, WebSocket remains open all the time so they allow the real-time data transfer. When clients trigger the request to the Server it does not close the connection on receiving the response, it rather persists and waits for Client or server to terminate the request.

- Socket.IO is a library which enables real-time and full duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts, both WebSocket vs Socket.io are event-driven libraries
    - Client Side: it is the library that runs inside the browser
    - Server Side: It is the library for Node.js

##### Links Referred

- https://www.educba.com/websocket-vs-socket-io/
- https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets
- https://davidwalsh.name/websocket
- https://socket.io/docs/#What-Socket-IO-is
