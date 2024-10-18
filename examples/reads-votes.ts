import { Api as NewgraphApi } from "..";
// import { Api as NewgraphApi } from "@newstackdev/iosdk-newgraph-client-js";

const API_URL = "https://api.newgra.ph/v1";

/*
    Temporary solution to get the token:

    0. sign up (duh)
    1. sign in to your newcoin os account
    2. open developer tools (cmd/ctrl + shift + i)
    3. navigate to developer tools -> local storage -> newsafe-auth-token

    The token eventually get invalidated and replaced with api keys

    Remember to install the client:

    npm i --save @newstackdev/iosdk-newgraph-client-js
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
        List top folders:
    */
    const topFolders = (await newgraph.mood.listTopList({ page: "0" })).data;

    /*
        Lists posts in folder:
    */
    const folderId = topFolders.value![Math.floor(Math.random()) * topFolders.value!.length].id;

    /*
        List posts in folder:
    */
    const posts = (await newgraph.mood.attachmentsList({ id: folderId })).data
    
    /*
        Vote  on a post
    */
    const postId = posts.value![0].id;
    const vote = await newgraph.mood.rateCreate({ targetId: postId, contextType: "folder", contextValue: folderId, value: 80 });

    // outputs the result of the vote
    console.log(vote);
}

main();