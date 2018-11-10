<template>
<!-- <h1>Item {{$route.params.id}}</h1> -->
<div v-if="item" class="row">
	<div class="col-sm-6">
		<img :src="item.photo" alt="photo">
	</div>
	<div class="col-sm-6">
		<h4>{{item.title}}</h4>
		<p>{{item.description}}</p>
		<div class="card-footer">
			<p>{{item.price}}</p>
			<button @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+ Add To Cart</button>
		</div>
	</div>
	
</div>
<div v-else><h2>Loading</h2></div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			item:null
		}
	},
	mounted(){
		this.fetchItem()
	},
	methods:{
		fetchItem(){
			var self = this
			axios.get('http://localhost:3000/item/' + self.$route.params.id)
			.then(res => {
				self.item = res.data
			})
		},
		addToCart(item){
			this.$store.commit('addToCart',item)
		}
	}
}
</script>

<style>

</style>
