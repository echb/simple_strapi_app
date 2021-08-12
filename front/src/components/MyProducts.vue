<template>
	<section class="products">
		<table>
			<thead>
				<tr>
					<th><span>id</span></th>
					<th>title</th>
					<th>description</th>
					<th>qty</th>
					<th>price</th>
					<th>state</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="product__row"
					v-for="(product, index) in products"
					:key="product.id"
				>
					<td>{{ index + 1 }}</td>
					<td>{{ product.title }}</td>
					<td>{{ product.description }}</td>
					<td>{{ product.qty }}</td>
					<td>{{ product.price }}</td>
					<td>
						<button @click="editProduct(product.id)">edit</button>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { inject, onMounted, ref } from "@vue/runtime-core";
import store from "../store";
export default {
	setup() {
		const router = useRouter();
		const route = useRoute();

		const storeLocal = inject("store", store);
		const products = ref();
		const page = `${
			storeLocal.state.urlBase
		}/products?user.username=${storeLocal.methods.getUsername()}`;

		const created = async () => {
			await axios.get(page).then((data) => (products.value = data.data));
		};

		onMounted(() => {
			created();
		});

		const editProduct = (id) => {
			const redirectPath = route.query.redirect || `/editproduct/${id}`;
			router.push(redirectPath);
		};

		return { products, storeLocal, editProduct };
	},
};
</script>

<style lang="scss">
.products {
	position: relative;
	width: 100%;
	padding: 14px 20px;
	background-color: #1f2242;
	border-radius: 5px;
	color: #fff;

	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		th,
		td {
			padding: 10px;
		}
		td {
			height: 70px;
		}

		thead {
			text-transform: uppercase;
		}
	}
}
.product__row:nth-child(2n + 1) {
	background-color: #171830;
}
</style>