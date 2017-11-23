# ecommerce
Selling Rocket & Space Gear http://rocksell.masfaris.com or backup http://shop.serangg.ga.com

## Frontend Library use:  
- Bootstrap- styling & grid system
- Vue- Frontend Framework
- JQuery- setup localStorage for login system
- Temporary admin username:password = ca@pung.com:123

## Endpoint API
| Endpoint | HTTP | Require | Description |
|----------|------|---------|-------------|
| /api/shop/checkout | POST | cart(array),total | post checkout add to database |
| /api/shop/alltrans | GET | - | get all transaction |
| /api/shop/additem | POST | itemName,image,.... | save item to database |
| /api/shop/item | GET | - | get all item |

## Use this app?
### /server
1. cd server
2. npm install
3. edit .env-template, fill yours, and rename to .env
4. start mongo
```sh
$ mongod
```
5. npm start  

### /server other option (only dummy server)
1. cd server
2. npm install -g json-server
3. json-server data-dummy.json  

### /client
1. cd client
2. npm install -g live-server
3. live-server

:rocket: