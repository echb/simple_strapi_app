<template>
	<section>
		<article
			v-for="category in productsLocal.categories"
			:key="category.id"
		>
			<h1>{{ category.name }}</h1>
			<swiper
				:slidesPerView="3"
				:spaceBetween="30"
				:pagination="{
					clickable: true,
				}"
				class="mySwiper slider_categories"
			>
				<swiper-slide
					class="slider_categories_slide"
					v-for="categoryProducts in category.products"
					:key="categoryProducts.id"
				>
					{{ categoryProducts.title }}
				</swiper-slide>
			</swiper>
		</article>
	</section>
</template>

<script>
import { inject, onMounted, reactive } from "@vue/runtime-core";
import store from "../store";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
			console.log("das");
		};
		const onSlideChange = () => {
			console.log("slide change");
		};

		const productsLocal = reactive({
			one: [],
			categories: [],
			categoryEggs: {},
		});

		const storeLocal = inject("store", store);

		onMounted(() => {
			getAllProducts();
			getCategories();
		});

		const getAllProducts = async () => {
			const data = await axios.get(
				`${storeLocal.state.urlBase}/products`
			);
			productsLocal.one = data.data;
		};

		const getCategories = async () => {
			const data = await axios.get(
				`${storeLocal.state.urlBase}/categories`
			);
			productsLocal.categories = data.data;
		};

		return { productsLocal, onSwiper, onSlideChange };
	},
};
</script>

<style lang="scss">
.slider_categories {
	margin-bottom: 30px;
	height: 200px;
	&_slide {
		background-color: aquamarine;
	}
}
</style>