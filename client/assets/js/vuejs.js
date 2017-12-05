var vue = new Vue ({
  el: '#app',
  data: {
    itemList: [],
    cart: [],
    total: 0,
    transaction: []
  },
  methods: {
    getAllItem(){
      axios.get('http://vps.masfaris.com:3000/api/shop/item')
      .then(response=>{
        this.itemList = response.data
      }).catch(err=>{
        console.error();
      })
    },
    addtocart(id){
      var pos = this.checkId(id._id)
      if(pos>=0){
        this.cart[pos].qty += 1
        this.total += this.cart[pos].priceidr
        this.cart[pos].totalitem += this.cart[pos].priceidr
      } else {
        let item = this.itemList.find(element=>{
            return element._id == id._id
        })
        this.cart.push({
          itemid: item._id,
          name: item.itemName,
          priceidr: item.priceidr,
          qty: 1,
          totalitem: item.priceidr
        })
        this.total += item.priceidr;
      }
    },
    checkId(num){
      return this.cart.findIndex(element=>{
        return element.itemid == num
      });
    },
    delId(deleteid){
      let pos = this.cart.findIndex(element=>{
        return deleteid.itemid == element.itemid
      });
      this.total -= this.cart[pos].totalitem
      this.cart.splice(pos,1)
      $("#cart").modal("show");
    },
    checkout(){
      axios.post('http://vps.masfaris.com:3000/api/shop/checkout', {
        cart: this.cart,
        total: this.total
      })
      .then(function (response) {
        this.cart = []
        this.total = 0
        alert('Your order has been received')
        location.reload(); 
      })
      .catch(function (error) {
        console.error(error);
      });
    },
    gettransaction(){
      axios.get('http://vps.masfaris.com:3000/api/shop/transaction')
      .then(response=>{
        console.log(response.data);
        this.transaction = response.data
      }).catch(err=>{
        console.error();
      })
    }
  },
  created() {
    this.getAllItem();
  }
})