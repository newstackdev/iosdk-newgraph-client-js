// In nodejs there is no native WebSockets implementation. While the example is using "ws", any third party implementation will do.
// Remember to instll ws or your other preferred library.

import WebSocket from 'ws'; 

/*
    see README.md on how to get the token
*/

const API_URL = "https://wsapi.newgra.ph/v1";
const JWT = "<see above>";

const token = `newsafe ${JWT}`;

const ws = new WebSocket(`${API_URL}?token=${token}`);

ws.addEventListener("open", () => {
    console.log("Websocket ready")
});


ws.addEventListener("message", (msg) => {
    console.log(`Incoming message: `, msg);
});