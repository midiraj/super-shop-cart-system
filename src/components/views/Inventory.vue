<template>
	<div class="row">
	  <div class="card mr-2 mb-2" style="width: 17rem;" v-for="(item,index) in items" :key="index">
	    <img class="card-img-top" :src="item.photo" alt="Card image cap">
	    <div class="card-body">
	      <h5 class="card-title">{{item.title}}</h5>
	      <p class="card-text">${{item.price}}</p>
	      <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
	    </div>
	  </div>             
	</div>
</template>

<script>
	export default{
		data(){
			return {
				items:[]
			}
		},
		methods:{
			addToCart(item){
				this.$emit('newItemAdded',item)
			}
		}
	}
</script>

<style>
	
</style>