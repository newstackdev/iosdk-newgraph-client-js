import { ContentType } from "..";
import { Api as NewgraphApi } from "..";
// import { Api as NewgraphApi } from "@newstackdev/iosdk-newgraph-client-js";

const API_URL = "https://api.newgra.ph/v1";

/*
    see readme on how to get the token
*/
const JWT = "<see above>";

const token = `newsafe ${JWT}`;

const newgraph = new NewgraphApi({
    baseUrl: API_URL,
    securityWorker: (securityData: { token: string } | null) => {
        return !securityData ? {} : { headers: { Authorization: securityData.token } };
    },
});


newgraph.setSecurityData({ token });

const main = async () => {
    /*
        Create a folder:
    */
    const folder = await newgraph.mood.moodCreate({
        title: "My stuff",
        description: "Here be my awesome stuff"
    });

    /*
        Post a text message:
    */

    const textPost = await newgraph.post.postCreate({
        content: "Hello newOs!",
        contentType: "text/html"
    });

    /*
        Attach the message to a folder.
        Important: If you miss this step the item will only appear in your default folder (My uploads)
    */
    await newgraph.mood.attachPostUpdate({ id: folder.data.id!, targetId: textPost.data.id! })

    /*
        Upload media
    */

    const MEDIA_PATH = "https://picsum.photos/500";

    const image = await (await fetch(MEDIA_PATH)).blob(); // or local, or generated...

    const mediaPost = await newgraph.post.postCreate({
        contentType: "image/jpeg" // or video/mpeg or...
    });
    await newgraph.mood.attachPostUpdate({ id: folder.data.id!, targetId: mediaPost.data.id! });

    const uploadInfo = await newgraph.post.uploadCreate({ targetId: mediaPost.data.id!, contentType: "image/jpeg", filename: MEDIA_PATH })
    const r = await fetch(uploadInfo.data.url as string, {
        method: "PUT",
        body: image,
    });

    console.log("Upload status: ", r.status);
}

main();