<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
	<MyProducts />
</template>

<script>
import MyProducts from "../components/MyProducts.vue";
export default {
	components: { MyProducts },
};
</script>