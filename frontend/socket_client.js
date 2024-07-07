document.addEventListener("DOMContentLoaded", function() {
    // Initialization
    const socket = io("http://localhost:8000");
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    // Listen for a custom event from the server
    socket.on('message', (data) => {
        console.log('Received message from server:', data);
    });

    // Emit a custom event to the server
    socket.emit('message', 'Hello from client');
    console.log("Socket: ",socket);

});