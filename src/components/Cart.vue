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
	</ul>
</template>

<script>
	export default{
		props:['items'],

		computed: {
			totalPrice(){
				var total = 0
				this.items.forEach(item => {
					total += parseFloat(item.price)
				})
				return total;
			}
		},
		methods:{
			removeItem(index){
				this.$emit('itemRemoved',index)
			}
		}

	}
</script>

<style>
	
</style>