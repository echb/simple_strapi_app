<template>
	<p>editar producto</p>
	<form method="post" @submit.prevent="update">
		<input type="text" v-model="editableFields.title" /><br />
		<input type="text" v-model="editableFields.description" /><br />
		<input type="number" v-model="editableFields.qty" /><br />
		<input type="number" v-model="editableFields.price" /><br />
		<p>{{ editableFields.category.name }}</p>
		<select name="" id="">
			<option
				@click="changeCategoryOnSelectedValue(category)"
				v-for="category in category"
				:key="category.id"
				:value="category"
			>
				{{ category.name }}
			</option>
		</select>
		<br />
		<button type="submit">edit product</button>
	</form>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, ref } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";
import store from "../store";
import axios from "axios";
export default {
	setup() {
		const changeCategoryOnSelectedValue = (e) => {
			editableFields.category.id = e.id;
			editableFields.category.name = e.name;
		};

		const storeLocal = inject("store", store);

		const route = useRoute();
		const pageEdit = `${storeLocal.state.urlBase}/products/${route.params.id}`;

		const category = ref({});
		const editableFields = reactive({
			title: "",
			description: "",
			qty: "",
			price: "",
			category: {},
		});

		const editableHeaders = reactive({
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});

		onMounted(async () => {
			getCategories();
			await axios.get(pageEdit).then(({ data }) => {
				editableFields.title = data.title;
				editableFields.description = data.description;
				editableFields.qty = data.qty;
				editableFields.price = data.price;
				editableFields.category = data.category;
			});
		});

		const update = async () => {
			await axios.put(pageEdit, editableFields, editableHeaders);
		};

		const getCategories = async () => {
			const data = await axios.get(
				`${storeLocal.state.urlBase}/categories`
			);
			category.value = data.data;
		};

		return {
			editableFields,
			update,
			category,
			changeCategoryOnSelectedValue,
		};
	},
};
</script>