<template>
	<ul class="list-group">
	  <li class="list-group-item">
	    <span class="item-name">Name</span>
	    <span class="item-name float-right">Price</span>
	  </li>
	  <li class="list-group-item" v-for="(item,index) in items">
	  	<span class="item-name"><button class="btn btn-danger btn-sm" @click="removeItem(index)">-</button></span>
	    <span class="item-name">{{item.title}}</span>
	    <span class="item-name float-right">${{item.price}}</span>
	  </li>
	  <li class="list-group-item">
	    <span class="item-name">Total</span>
	    <span class="item-name float-right">${{totalPrice}}</span>
	  </li>
	  <li class="list-group-item">
	    <button @click="checkout" class="btn btn-block btn-success" v-if="items.length > 0">Checkout</button>
	  </li>
	</ul>
</template>

<script>
	export default{
		computed: {
			items(){
				return this.$store.getters.getCart
			},
			totalPrice(){
				var total = 0
				this.items.forEach(item => {
					total += parseFloat(item.price)
				})
				return total.toFixed(2);
			}
		},
		methods:{
			removeItem(index){
				this.$store.commit('removeItem',index)
			},
			checkout(){
				if(confirm('Are You Sure You want to checkout ?')){
					this.$store.commit('clearCart')
				}
			}
		}

	}
</script>

<style>
	
</style>