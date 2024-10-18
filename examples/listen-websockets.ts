// In nodejs there is no native WebSockets implementation. While the example is using "ws", any third party implementation will do.
// Remember to instll ws or your other preferred library.

import { MoodReadResponse, PostReadResponse } from '@newstackdev/iosdk-newgraph-client-js';
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

    if(msg.data == "pong") { return Promise.resolve() };

    const data: { type: string, payload: { message: string, post: PostReadResponse, folder: MoodReadResponse} } = JSON.parse(msg.data.toString());

    console.log("replying to: ", data.payload?.post?.content || "not replying")
    
    if(data.type == "newgraph" && data?.payload?.message == "post_in_folder") {
        const text = (data.payload?.post?.content || "").trim()

        if(!text.startsWith("/igorrubinovich.nco"))
            return Promise.resolve();

        const folderId =  data.payload.folder.id!;
        
        // to reply post a message to folder with id folderId - see the "writes-posting" example

        console.log("replied to: ", data.payload.post.content, 'in folder', data.payload.folder.id!)
    }
});