<template>
	<view>
		<u-navbar :title="item.nickname" @rightClick="rightClick" bgColor="#f4f4f5" placeholder
			:titleStyle="{fontWeight:'900'}" :autoBack="true" rightIcon="more-dot-fill">
		</u-navbar>
		<view class="chat">
			<view class="my"></view>
			<view class="he"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {}
			}
		},
		methods: {
			rightClick(){
				
			}
		},
		onLoad(options) {
			console.log(options);
			this.item = options
		}
	}
</script>
<style>
	body {
		background-color: #f4f4f5;
	}
</style>
<style lang="scss" scoped>
.chat{
	padding: 0 20rpx;
}
</style>
