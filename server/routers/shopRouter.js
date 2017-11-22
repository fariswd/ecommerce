const router = require('express').Router()

//require controllers
const shopController = require('../controllers/shopController')

//route
router.get('/', shopController.welcomePage)

router.post('/checkout', shopController.checkout)

router.get('/transaction', shopController.allTrans)

router.post('/additem', shopController.addItem)

router.get('/item', shopController.getItem)

router.delete('/item/:id', shopController.delItem)

//export
module.exports = router;