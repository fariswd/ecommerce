Vue.component('item-list', {
  template: `
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Image Loc</th>
          <th>Spec1</th>
          <th>Value Spec1</th>
          <th>Spec2</th>
          <th>Value Spec2</th>
          <th>Category</th>
          <th>Price Idr</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <td>{{ index+1 }}</td>
          <td>{{ item.itemName }}</td>
          <td>{{ item.image }}</td>
          <td>{{ Object.keys(item.specification[0])[0] }}</td>
          <td>{{ Object.values(item.specification[0])[0] }}</td>
          <td>{{ Object.keys(item.specification[1])[0] }}</td>
          <td>{{ Object.values(item.specification[1])[0] }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.priceidr }}</td>
          <td>
            <button class="badge badge-pill badge-danger" @click="remove(index)">Delete</button>
            <a class="badge badge-pill badge-warning" @click="edit(index)">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
  `,
  props: ['items'],
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    // readMore: function () {
    //   this.$emit('unread-minus-one', {
    //     title: this.article.title
    //   })
    // },
    edit: function(i) {
      let item = this.items[i]
      console.log('ini item di child ', item)
      this.$emit('populate-item', {
        item: item,
        i: i
      })
    },
    remove: function(i){
      let item = this.items[i]
      console.log('ini item di remove ', item)
      axios.delete('http://vps.masfaris.com:3000/api/shop/item/'+item._id)
      .then((response)=>{
        console.log(response.data);
        this.items.splice(i,1)
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }
})