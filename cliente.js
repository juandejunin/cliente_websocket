const io = require('socket.io-client');
const socket = io('http://localhost:3000'); 


socket.on('bienvenida', (mensaje) => {
    console.log('Mensaje del servidor:', mensaje);
});


socket.emit('mensaje', 'Hola servidor, soy el cliente');
