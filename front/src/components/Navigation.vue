<template>
	<nav id="nav">
		<ul>
			<li>
				<router-link to="/"><p>Home</p></router-link>
			</li>
			<li>
				<router-link to="/login"><p>Login</p></router-link>
			</li>
			<li>
				<router-link to="/myProducts"><p>My Products</p></router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
#nav {
	position: fixed;
	top: 80px;
	left: 0px;
	background-color: #42b983;
	width: 230px;
	z-index: 2;

	ul {
		list-style: none;
	}

	a {
		position: relative;
		display: block;
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		margin: 0 15px;
		padding: 10px 8px;

		&.router-link-exact-active {
			color: #ffff;
		}
		&.router-link-exact-active::before {
			content: " ";
			position: absolute;
			height: 6px;
			width: 6px;
			top: calc(50% - 6px);
			transform: translateY(50%);
			left: -4px;
			background: #fff;
			border-radius: 50%;
		}
	}
}
</style>