# newgraph-api-eu-prod
## Version: 2024-08-23T14:45:18Z

### /mood/access/grant

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /info-auth

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| lambdaAuthorizer | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### DELETE
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/access/grantees

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/userUpload/avatar

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/callback/{path+}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| path | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| path | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /payment/stripe/webhook

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/provider/{path+}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| path | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| path | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /payment/stripe/intent

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/current

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/moods

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| flags | query |  | No | string |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/invitees

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/rated/out/users/requests

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/evm/generateToken

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/rate

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/attach/user

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /info

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/list/search

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |
| q | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/rated/in

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/list/tags-search

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |
| q | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/list/public

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/attachments

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| sortBy | query |  | No | string |
| order | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/utils/remote-meta-proxy

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| url | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/invite

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /activation/address-badges/oracle

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/estimate

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/getSpecialFolder

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| redirect | query |  | No | string |
| id | query |  | No | string |
| flag | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/list/search

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |
| q | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/invite/hash

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hash | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /activation/evm/checkBalance

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/instagram

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/rate

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/report

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/searchexternal

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /payment/stripe/subscription/payment

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /upload/node

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/preregister

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/attach/post

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/invitor

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/availability

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### DELETE
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/claimWatts

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/list/top

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/posts

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| sortBy | query |  | No | string |
| order | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /upload/url

#### GET
### /user/stake

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/userRate

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/activityStream

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| after | query |  | No | string |
| limit | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/syncContacts

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /search/semantic

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/upload

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /activation/estimate/watts

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/list/top

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/evm/verifyAccount

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/upload

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /search/creative

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| aesthetics | query |  | No | string |
| tags | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/precreate

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/userRate/request

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/list/public

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /auth/onesignal

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/transfer

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/rated/out/posts

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/userUpload/cover

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/grants/list

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| done | query |  | No | string |
| value | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/invitees

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/attach/mood

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /mood/attachmentsPublic

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | string |
| sortBy | query |  | No | string |
| order | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /post/list/top

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| direction | query |  | No | string |
| contentType | query |  | No | string |
| page | query |  | No | string |
| orderBy | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /upload/zip

#### GET
### /mood

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### PUT
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /activation/token-holder-order/oracle

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/history

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /folder

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/rated/out/users

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| page | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

##### Security

| Security Schema | Scopes |
| --- | --- |
| newgraph-api-eu-prod | |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### /user/badge/list

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | query |  | No | string |
| id | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |
| 400 | 400 response |
| 401 | 401 response |
| 403 | 403 response |
| 404 | 404 response |
| 409 | 409 response |
| 500 | 500 response |

#### OPTIONS
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | 200 response |

### Models


#### ChainAddressRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

#### NodeRequestPost

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |

#### ValueResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string |  | No |

#### AnyResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

#### OkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ok | boolean |  | No |

#### ErrorResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| errorMessage | string |  | No |
| errorCode | string |  | No |
| statusCode | number |  | No |

#### MoodPagedListReadPublicResponse

MoodPagedListReadPublicResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### UserReadPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| powered | number |  | No |
| newcoinAccTx | string |  | No |
| newcoinPoolId | string |  | No |
| aspectRatio | number |  | No |
| instagram | string |  | No |
| newcoinActivePublicKey | string |  | No |
| newcoinPublicKey | string |  | No |
| powering | number |  | No |
| lastUpdated | string |  | No |
| twitter | string |  | No |
| newcoinOwnerPublicKey | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| id | string |  | No |
| contentType | string |  | No |
| signal | string |  | No |
| longitude | number |  | No |
| coverContentUrl | string |  | No |
| created | string |  | No |
| facebookId | string |  | No |
| verifiedSocialIds | [ string ] |  | No |
| newcoinPoolTx | string |  | No |
| license | string |  | No |
| discord | string |  | No |
| updated | string |  | No |
| newcoinTicker | string |  | No |
| youtube | string |  | No |
| displayName | string |  | No |
| latitude | number |  | No |
| description | string |  | No |
| tumblr | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| watts | number |  | No |
| youtubeId | string |  | No |
| newcoinPoolStake | number |  | No |
| ethAddress | string |  | No |
| newcoinPublisherPublicKey | string |  | No |
| website | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| label | string |  | No |
| evm/0x1 | string |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| blurHash | string |  | No |
| consentEmail | string |  | No |
| username | string |  | No |

#### UserReadPrivateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| powered | number |  | No |
| proLevel | number |  | No |
| newcoinAccTx | string |  | No |
| bio | string |  | No |
| newcoinPoolId | string |  | No |
| aspectRatio | number |  | No |
| instagram | string |  | No |
| newcoinActivePublicKey | string |  | No |
| newcoinPublicKey | string |  | No |
| powering | number |  | No |
| stripeUid | string |  | No |
| twitter | string |  | No |
| isAgent | boolean |  | No |
| newcoinOwnerPublicKey | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| id | string |  | No |
| contentType | string |  | No |
| signal | string |  | No |
| longitude | number |  | No |
| coverContentUrl | string |  | No |
| subscriptionExpiry | string |  | No |
| created | string |  | No |
| availableInvites | number |  | No |
| facebookId | string |  | No |
| newcoinPoolTx | string |  | No |
| verifiedSocialIds | [ string ] |  | No |
| firstName | string |  | No |
| license | string |  | No |
| discord | string |  | No |
| phone | string |  | No |
| newcoinNCOBalance | number |  | No |
| updated | string |  | No |
| status | string |  | No |
| newcoinTicker | string |  | No |
| youtube | string |  | No |
| lastName | string |  | No |
| consentPrivacyPolicy | string |  | No |
| displayName | string |  | No |
| latitude | number |  | No |
| description | string |  | No |
| tumblr | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| consentTestgroup | string |  | No |
| newcoinPrivateKey | string |  | No |
| watts | number |  | No |
| smartDropGeneration | string |  | No |
| subscriptionStatus | string |  | No |
| newcoinPublisherPrivateKey | string |  | No |
| youtubeId | string |  | No |
| categories | [ string ] |  | No |
| newcoinPoolStake | number |  | No |
| ethAddress | string |  | No |
| email | string |  | No |
| isPro | boolean |  | No |
| newcoinPublisherPublicKey | string |  | No |
| newcoinActivePrivateKey | string |  | No |
| website | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| newcoinOwnerPrivateKey | string |  | No |
| evm/0x1 | string |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| blurHash | string |  | No |
| isNetwork | boolean |  | No |
| consentEmail | string |  | No |
| subwatts | string |  | No |
| username | string |  | No |

#### UserStakeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | Yes |
| key | string |  | No |
| username | string |  | Yes |

#### UserTransferRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| encryptedPayload | string |  | No |
| payload | string |  | No |

#### WattsClaimRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| claims | [ object ] |  | No |

#### WattsClaimResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failed | [ object ] |  | No |
| updated | [ object ] |  | No |

#### UserCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newcoinTicker | string |  | No |
| youtube | string |  | No |
| lastName | string |  | No |
| consentPrivacyPolicy | string |  | No |
| displayName | string |  | No |
| latitude | number |  | No |
| description | string |  | No |
| tumblr | string |  | No |
| instagram | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| consentTestgroup | string |  | No |
| twitter | string |  | No |
| inviteHash | string |  | No |
| legacyToken | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| signal | string |  | No |
| email | string |  | No |
| longitude | number |  | No |
| website | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| firstName | string |  | No |
| discord | string |  | No |
| phone | string |  | No |
| consentEmail | string |  | No |
| couponCode | string |  | No |
| username | string |  | No |

#### UserPreRegisterRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| consentTestgroup | string |  | No |
| consentPrivacyPolicy | string |  | No |
| phone | string |  | No |
| fullName | string |  | No |
| consentEmail | string |  | No |
| email | string |  | No |

#### UserAvailabilityResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offer | string |  | No |
| available | boolean |  | No |

#### UserUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| youtube | string |  | No |
| lastName | string |  | No |
| consentPrivacyPolicy | string |  | No |
| displayName | string |  | No |
| latitude | number |  | No |
| newcoinCreateAccount | string |  | No |
| description | string |  | No |
| bio | string |  | No |
| tumblr | string |  | No |
| instagram | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| twitter | string |  | No |
| isAgent | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| id | string |  | Yes |
| categories | [ string ] |  | No |
| signal | string |  | No |
| longitude | number |  | No |
| website | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| firstName | string |  | No |
| discord | string |  | No |
| consentEmail | string |  | No |
| username | string |  | No |

#### SyncContactsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contacts | [ object ] |  | No |

#### SyncContactsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

#### UserPagedListReadPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### UserInvitationPagedListReadPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### UserInvitationReadPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| powered | number |  | No |
| newcoinAccTx | string |  | No |
| newcoinPoolId | string |  | No |
| aspectRatio | number |  | No |
| instagram | string |  | No |
| newcoinActivePublicKey | string |  | No |
| newcoinPublicKey | string |  | No |
| powering | number |  | No |
| lastUpdated | string |  | No |
| twitter | string |  | No |
| newcoinOwnerPublicKey | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| id | string |  | No |
| contentType | string |  | No |
| signal | string |  | No |
| longitude | number |  | No |
| coverContentUrl | string |  | No |
| created | string |  | No |
| invitation | object |  | No |
| facebookId | string |  | No |
| verifiedSocialIds | [ string ] |  | No |
| newcoinPoolTx | string |  | No |
| license | string |  | No |
| discord | string |  | No |
| updated | string |  | No |
| newcoinTicker | string |  | No |
| youtube | string |  | No |
| displayName | string |  | No |
| latitude | number |  | No |
| description | string |  | No |
| tumblr | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| watts | number |  | No |
| youtubeId | string |  | No |
| newcoinPoolStake | number |  | No |
| ethAddress | string |  | No |
| newcoinPublisherPublicKey | string |  | No |
| website | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| label | string |  | No |
| evm/0x1 | string |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| blurHash | string |  | No |
| consentEmail | string |  | No |
| username | string |  | No |

#### UserInviteRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| youtube | string |  | No |
| spotify | string |  | No |
| facebook | string |  | No |
| fullName | string |  | Yes |
| tumblr | string |  | No |
| telegram | string |  | No |
| pinterest | string |  | No |
| instagram | string |  | No |
| medium | string |  | No |
| soundcloud | string |  | No |
| snapchat | string |  | No |
| apple | string |  | No |
| twitter | string |  | No |
| discord | string |  | No |
| phone | string |  | No |
| tiktok | string |  | No |
| reddit | string |  | No |
| signal | string |  | No |
| email | string |  | No |

#### UserDeleteRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phone | string |  | No |
| email | string |  | No |

#### UserBadgesListResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### UserGrantsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### RatingUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| targetId | string |  | No |
| contextType | string |  | No |
| contextValue | string |  | No |
| value | number |  | Yes |

#### RatingNegativeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| targetId | string |  | No |

#### PagedRatedResponseUser

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### PagedRatedResponsePost

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### RatingUpdateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created | string |  | No |
| TxID_mintAsset | string |  | No |
| value | number |  | No |
| updated | string |  | No |

#### UserUploadRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filename | string |  | Yes |
| contentType | string |  | Yes |

#### UploadRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filename | string |  | Yes |
| targetId | string |  | Yes |
| targetModel | string |  | Yes |
| contentType | string |  | Yes |

#### UploadRequestGeneric

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filename | string |  | Yes |
| targetId | string |  | Yes |
| contentType | string |  | Yes |

#### UploadResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filename | string |  | No |
| key | string |  | No |
| url | string |  | No |

#### ReportUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| reason | string |  | Yes |
| targetId | string |  | Yes |
| comment | string |  | No |

#### ReportUpdateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | number |  | No |

#### PostCreateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coverContentUrl | string |  | No |
| moodId | string |  | No |
| created | string |  | No |
| author | object |  | No |
| latitude | number |  | No |
| moods | [ object ] |  | No |
| rating | number |  | No |
| description | string |  | No |
| aspectRatio | number |  | No |
| label | string |  | No |
| title | string |  | No |
| content | string |  | No |
| tags | [ object ] |  | No |
| license | string |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| blurHash | string |  | No |
| newcoinMintTx | string |  | No |
| id | string |  | No |
| embed | string |  | No |
| updated | string |  | No |
| contentType | string |  | No |
| longitude | number |  | No |

#### PostReadResponse

PostReadResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coverContentUrl | string |  | No |
| moodId | string |  | No |
| created | string |  | No |
| author | object |  | No |
| latitude | number |  | No |
| moods | [ object ] |  | No |
| rating | number |  | No |
| description | string |  | No |
| aspectRatio | number |  | No |
| label | string |  | No |
| title | string |  | No |
| content | string |  | No |
| tags | [ object ] |  | No |
| license | string |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| blurHash | string |  | No |
| newcoinMintTx | string |  | No |
| id | string |  | No |
| embed | string |  | No |
| updated | string |  | No |
| contentType | string |  | No |
| longitude | number |  | No |

#### PostCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| license | string |  | No |
| doMint | string |  | No |
| description | string |  | No |
| id | string |  | No |
| embed | string |  | No |
| title | string |  | No |
| contentType | string |  | No |
| content | string |  | No |

#### PostUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| license | string |  | No |
| latitude | number |  | No |
| doMint | boolean |  | No |
| description | string |  | No |
| id | string |  | Yes |
| title | string |  | No |
| longitude | number |  | No |

#### PostPagedListReadPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### PostTagsSearchPublicResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| done | boolean |  | No |
| value | [ object ] |  | No |

#### PostRemoteMetaProxyResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| text | string |  | No |
| status | number |  | No |

#### MoodCreateResponse

MoodCreateResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coverContentUrl | string |  | No |
| created | string |  | No |
| author | object |  | No |
| latitude | number |  | No |
| flags | string |  | No |
| description | string |  | No |
| aspectRatio | number |  | No |
| label | string |  | No |
| isPrivate | boolean |  | No |
| title | string |  | No |
| posts | [ object ] |  | No |
| content | string |  | No |
| stakeToAccess | number |  | No |
| tags | [ object ] |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| defaultView | string |  | No |
| postsCount | number |  | No |
| blurHash | string |  | No |
| id | string |  | No |
| updated | string |  | No |
| contentType | string |  | No |
| longitude | number |  | No |

#### MoodReadResponse

MoodReadResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| coverContentUrl | string |  | No |
| created | string |  | No |
| author | object |  | No |
| latitude | number |  | No |
| flags | string |  | No |
| description | string |  | No |
| aspectRatio | number |  | No |
| label | string |  | No |
| isPrivate | boolean |  | No |
| title | string |  | No |
| posts | [ object ] |  | No |
| content | string |  | No |
| stakeToAccess | number |  | No |
| tags | [ object ] |  | No |
| contentUrl | string |  | No |
| deleted | boolean |  | No |
| defaultView | string |  | No |
| postsCount | number |  | No |
| blurHash | string |  | No |
| id | string |  | No |
| updated | string |  | No |
| contentType | string |  | No |
| longitude | number |  | No |

#### MoodListAttachedPostsResponse

MoodListAttachedPostsResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### MoodListAttachedResponse

MoodListAttachedResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### MoodCreateRequest

MoodCreateRequest Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| latitude | number |  | No |
| description | string |  | Yes |
| title | string |  | Yes |
| longitude | number |  | No |
| tags | [ string ] |  | No |

#### MoodUpdateRequest

MoodUpdateRequest Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| latitude | number |  | No |
| description | string |  | No |
| id | string |  | Yes |
| title | string |  | No |
| longitude | number |  | No |

#### EntityAttachRequest

EntityAttachRequest Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| targetId | string |  | Yes |
| id | string |  | Yes |

#### MoodGrantAccessRequest

MoodGrantAccessRequest Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| targetId | string |  | No |
| grantee | object |  | No |
| policy | object |  | No |

#### MoodGrantAccessResponse

MoodGrantAccessResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| level | string |  | No |
| grantor | string |  | No |
| updated | string |  | No |

#### MoodListGranteesResponse

MoodListGranteesResponse Model

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | [ object ] |  | No |
| done | boolean |  | No |

#### CreativeSearchResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hits | [ object ] |  | No |

#### PaymentStripePaymentIntentCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | [ object ] |  | No |
| username | string |  | No |

#### PaymentStripeWebhookRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| request | object |  | No |
| livemode | boolean |  | No |
| data | object |  | No |
| created | integer |  | No |
| id | string |  | No |
| type | string |  | No |
| api_version | string |  | No |
| pending_webhooks | integer |  | No |
| object | string |  | No |

#### PaymentStripePaymentIntentCreateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| client_secret | string |  | No |

#### InstagramVerificationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

#### InstagramVerificationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isVerified | boolean |  | No |
| success | boolean |  | No |

#### EvmVerificationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payload | object |  | No |
| signature | string |  | No |

#### SessionTokenResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jwt | string |  | No |