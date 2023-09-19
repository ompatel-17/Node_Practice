// node server which handel socket io connection

const io = require('socket.io')(8000)

const user= {}

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log("New-user-joined", name)
        user[socket.id] = name
        socket.broadcast.emit('user-joined', name)
    })

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message : message, name : users[socket.id]})
    })

    socket.on('Disconnect', message =>{
        socket.broadcast.emit('left', user[socket.id])
        delete users[socket.id]
    })

})
