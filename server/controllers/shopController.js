//require model
const Transaction = require('../models/transaction')
const Item = require('../models/item')

let welcomePage = (req, res) => {
  res.send({msg: 'welcomePage'})
}

/* POST transaction
*  Require req.body.cart, req.body.total
*  Save to database
*/
let checkout = (req, res) => {
  let transaction = new Transaction ({
    receipt: req.body.cart,
    grandtotal: Number(req.body.total)
  })
  transaction.save()
  .then((result)=>{
    res.send({
      msg: 'transaction created',
      transaction: result
    })
  }).catch(err=>{
    res.status(501).send({err: err})
  })
}

/* GET all transaction
*/
let allTrans = (req, res) => {
  Transaction.find((err, trans)=>{
    if(err) res.send(500).send(err)
    else {
      res.send(trans)
    }
  })
}

/* POST item
*  Require: itemName,
*           image(location),
*           specification[
*             {spec1key: spec1value}
*             {spec2key: spec2value}
*           ],
*           catagory,
*           priceidr
*  Desc: Save to database
*/
let addItem = (req, res) => {
  let spec1 = {}
  let spec2 = {}
  spec1[req.body.spec1key] = req.body.spec1value
  spec2[req.body.spec2key] = req.body.spec2value  
  
  let item = new Item ({
    itemName: req.body.name,
    image: req.body.image,
    specification: [
      spec1,
      spec2
    ],
    category: req.body.category,
    priceidr: req.body.priceidr
  })
  item.save()
  .then((result)=>{
    res.send({
      msg: 'item created',
      item: result
    })
  }).catch(err=>{
    res.status(501).send({err: err})
  })
}

/* GET all item
*/
let getItem = (req, res) => {
  Item.find((err, item)=>{
    if(err) res.send(500).send(err)
    else {
      res.send(item)
    }
  })  
}

/* Delete specific item by id
*/
let delItem = (req, res) => {
  Item.remove({ _id:req.params.id })
  .then(response=>{
    res.send({response: response})
  }).catch(err=>{
    res.send({err: err})
  })
}

module.exports = {
  welcomePage,
  checkout,
  allTrans,
  addItem,
  getItem,
  delItem
};