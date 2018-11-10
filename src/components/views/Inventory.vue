<template>
	<div class="row" v-if="!loading">
	  <div class="card mr-2 mb-2" style="width: 17rem;" v-for="(item,index) in items" :key="index">
	  	<router-link tag="div" :to="{path:'/item/' + item.id}">	
		    <img class="card-img-top" :src="item.photo" alt="Card image cap">
		    <div class="card-body">
		      <h5 class="card-title">{{item.title}}</h5>
		    </div>
		</router-link>
	    <div class="card-footer">
	      <p class="card-text">${{item.price}}</p>
	      <a @click="addToCart(item)" class="btn btn-primary">+ add</a>	    	
	    </div>
	  </div>             
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				loading:true
			}
		},
		computed:{
			items(){
				return this.$store.getters.getInventory
			}
		},
		mounted(){
			this.fetchInventory()
		},
		methods:{
			addToCart(item){
				this.$store.dispatch('addToCart',item)
			},

			fetchInventory(){
				var self = this
				axios.get('http://localhost:3000/items')
				.then(res => {
					self.$store.commit('setInventory', res.data)
					self.loading = false
				})

			}
		}
	}
</script>

<style>
	
</style>