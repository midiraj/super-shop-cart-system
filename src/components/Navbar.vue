<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	  <router-link :to="{path:'/'}"  class="navbar-brand" > SuperStore </router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarColor01">

	    <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
	      <input v-model="keyword" class="form-control mr-sm-2" type="text" placeholder="Search">
	      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
	    </form>
	  </div>
	</nav>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				keyword:''
			}
		},
		methods: {
			search(){
				var self = this
				axios.get('http://localhost:3000/search/' + this.keyword)
				.then(res => {
					self.$store.commit('setInventory', res.data)
				})
			}
		}
	}
</script>

<style>

</style>
