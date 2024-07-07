import http from 'http';
import SocketService from './services/sockets.js';

async function init() {
    const socketService = new SocketService();

    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    socketService.io.attach(httpServer);
    httpServer.listen(PORT, () => console.log(`HTTP Server is up and running on PORT: ${PORT}`));

    socketService.initListener();
}

init();