# ecommerce
Selling Rocket & Space Gear http://rocksell.masfaris.com  

## Frontend Library use:  
- Bootstrap- styling & grid system
- Vue- Frontend Framework
- JQuery- setup localStorage for login system
- Temporary admin username:password = admin:admin

## Endpoint API
| Endpoint | HTTP | Require | Description |
|----------|------|---------|-------------|
| /api/shop/checkout | POST | cart(array),total | post checkout add to database |
| /api/shop/transaction | GET | - | get all transaction |
| /api/shop/additem | POST | itemName,image,catagory,priceidr,spec1key,spec2key,spec1value,spec2value | save item to database |
| /api/shop/item | GET | - | get all item |
| /api/shop/item/:id | PUT | itemName,image,catagory,priceidr,spec1key,spec2key,spec1value,spec2value | edit specific item |
| /api/shop/item/:id | DELETE | - | delete specific item |

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