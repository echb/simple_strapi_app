<template>
	<TopBar />
	<router-view />
	<Navigation class="navigation" />
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Navigation from "./components/Navigation.vue";
import { provide } from "@vue/runtime-core";
import store from "./store/index.js";

export default {
	components: { Navigation, TopBar },
	setup() {
		provide("store", store);
	},
};
</script>

<style lang="scss">
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body {
	background-color: #1e1e2eb7;
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
}
</style>
