<template>
	<div class="hello">
		<p>nnn@nnn.com</p>
		<p>123456</p>
		<p>strapi_post@mai.com</p>
		<p>123456</p>
		<h1>{{ msg }}</h1>
		<form method="post" @submit.prevent="login">
			<input type="text" v-model="logInAcces.email" />
			<br />
			<input type="text" v-model="logInAcces.password" />
			<br />
			<button type="submit">login</button>
		</form>
		<div v-if="logInAcces.error">error de autenticacion</div>
	</div>
</template>

<script>
import { inject } from "@vue/runtime-core";
import store from "../store";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { reactive } from "@vue/reactivity";
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	setup() {
		const storeLocal = inject("store", store);

		const router = useRouter();
		const route = useRoute();

		const logInAcces = reactive({
			email: "",
			password: "",
			error: false,
		});

		const setLocalStorages = (data) => {
			localStorage.token = data.data.jwt;
			localStorage.user = data.data.user.username;
		};

		const login = () => {
			const redirectPath = route.query.redirect || "/myproducts";

			axios
				.post(`${storeLocal.state.urlBase}/auth/local`, {
					identifier: logInAcces.email,
					password: logInAcces.password,
				})
				.then((data) => {
					logInAcces.error = false;
					setLocalStorages(data);
					router.push(redirectPath);
				})
				.catch((err) => {
					console.log(err);
					logInAcces.error = true;
				});
		};

		return { logInAcces, login };
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
