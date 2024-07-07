import { Server } from 'socket.io';

// This is the Serveice for the Socket Connection:-
export default class SocketService {
    #_io; // # is used when we want a variable to be treated as private variable in js (Support ECMA Script: ES2022+);
    constructor() {
        console.log("Init Socket Server....");
        this.#_io = new Server();
    }

    get io(){
        return this.#_io;
    }

    initListener(){
        console.log("Init Socket Listeners");
        const io = this.#_io;
        io.on('connect', socket => {
            console.log("New Socket Connected", socket.id);

            // Seting the Event Listener in the Socket:-
            socket.on('event:message', async ({message}) => {
                console.log("New Message Received: ", message);
            })
        });
    }
}