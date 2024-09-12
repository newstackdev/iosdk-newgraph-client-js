## Newgraph API Client

[See here for more info and documentation](https://www.newcoin.org/docs).

## Install

`npm i --save @newstackdev/iosdk-newgraph-client-js`

## Keys
A temporary solution is to use the client token from the browser:

0. sign up (duh)
1. sign in to your newcoin os account
2. open developer tools (cmd/ctrl + shift + i)
3. navigate to developer tools -> local storage -> newsafe-auth-token

The token eventually get invalidated and replaced with api keys

## Getting started
```
const newgraph = new NewgraphApi({
        baseUrl: API_URL,
        securityWorker: (securityData: { token: string } | null) => {
          return !securityData ? {} : { headers: { Authorization: securityData.token } };
        },
      });
    

newgraph.setSecurityData({ token });
```

## Reference
[API (Wip)](./api.md)

## Examples
See [examples](./examples/). To be continued.

## Why folders are called moods?
It's a technical term. We call them folders in all other contexts.

## More information
Navigate to [Newcoin Docs](https://www.newcoin.org/docs)


## License
MIT
