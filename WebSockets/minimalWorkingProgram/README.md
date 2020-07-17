- This is the minimal program which shows how to connect the client and server
- The socket object on both sides extends the EventEmitter class, so:
    - sending an event is done with: socket.emit()
    - receiving an event is done by registering a listener: socket.on(<event name>, <listener>)

##### How to run the program

- install all the depenedencies
```
npm install
```

- run the derver
```
node server
```

##### Output
```
go to http://localhost:3000
connect
connect
connect
connect
```

##### TroubleShooter
- Had created only index.html and index.js. This error came:
```
Error: Cannot find module 'socket.io'
```

Solution:
```
npm init
```

