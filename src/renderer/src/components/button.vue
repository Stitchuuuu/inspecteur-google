<template>
  <component :is="type === 'link' ? 'a' : type" class="ui-button" @click="openLink" v-bind="$attrs">
		<slot/>
	</component>
</template>

<script>
export default {
	inheritAttrs: false,
	name: 'ui-button',
	props: {
		type: {
			type: String,
			default: 'button',
		},
		href: String,
		external: Boolean
	},
	methods: {
		openLink(e) {
			if (this.type === 'link' && this.external && typeof window.openExternal === 'function') {
				e.preventDefault()
				e.stopImmediatePropagation()
				window.openExternal(this.href)
			}
		}
	}
}
</script>

<style lang="scss">
.ui-button {
  margin: 0;
	padding: 0.5em 1em;
	border: 0px;
	outline: 0;
	user-select: none;
	-webkit-user-select: none;
	cursor: pointer;
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(246, 172, 94);
	font-size: 1em;
	color: black;
	transition: background-color 0.3s;
	text-decoration: none;
	&.fullwidth {
		display: block;
	}
	&:hover, &:active {
		background-color: rgba(246, 172, 94, 0.8);
	}
	&.unclickable {
		cursor: default;
		pointer-events: none;
	}
}
</style>
