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

#### Socket.io Features
Its main features are:

- Reliability
    - Connections are established even in the presence of:
        - proxies and load balancers.
        - personal firewall and antivirus software.

    - For this purpose, it relies on Engine.IO, which first establishes a long-polling connection, then                 tries to upgrade to better transports that are “tested” on the side, like WebSocket. Please see the Goals section for more information.
    
- Auto-reconnection support
    - Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again. Please see the available reconnection options here.
    
- Disconnection detection
    - A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore.

    - That functionality is achieved with timers set on both the server and the client, with timeout values (the pingInterval and pingTimeout parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the sticky-session requirement when using multiples nodes.
    
- Binary support
    - Any serializable data structures can be emitted, including:
        - ArrayBuffer and Blob in the browser
        - ArrayBuffer and Buffer in Node.js

- Multiplexing support
    - In order to create separation of concerns within your application (for example per module, or based on permissions), Socket.IO allows you to create several Namespaces, which will act as separate communication channels but will share the same underlying connection
