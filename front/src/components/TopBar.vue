<template>
	<header>
		<div class="container_nav">
			<div class="container_nav-search">
				<input type="text" />
			</div>
			<div class="container_nav-r">
				<span>dasasdasdasddas</span>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
header {
	height: 80px;
	background-color: antiquewhite;
	.container_nav {
		max-width: 1110px;
		display: flex;
		// justify-content: center;
		margin-left: auto;
		margin-right: auto;
		&-search {
			display: flex;
			justify-content: center;
			width: 70%;
		}
		&-r {
			display: flex;
			width: auto;
			justify-content: center;
		}
	}
}
</style>