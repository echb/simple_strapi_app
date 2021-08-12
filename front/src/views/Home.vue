<template>
	<Home class="home" />
</template>

<script>
import Home from "../components/Home.vue";
export default {
	components: { Home },
};
</script>

<style lang="scss">
.home {
	max-width: 1140px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;
	color: #2c3e50;
	padding-top: 80px;
	// padding-right: 30px;
	// padding-left: 250px;
}
</style>