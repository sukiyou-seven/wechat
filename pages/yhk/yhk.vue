<template>
	<view>
		<view class="gty78iolk" v-for="(item,index) in card_list" :key="index">
			<u--image :showLoading="true" :src="item.img" width="100%" mode='aspectFit' height="280rpx"></u--image>
			<view class="gy789iokjh">{{item.num}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card_list: [{
					img: '',
					num: ''
				}]
			};
		},
		methods: {
			random_list(n) {
				const data = [];
				const imgList = ['/static/gs.png', '/static/jh.png', '/static/nh.png'];
				for (let i = 0; i < n; i++) {
				 const item = {
						img: imgList[Math.floor(Math.random() * imgList.length)],
						num: Math.floor(Math.random() * 9000 + 1000)
					};
					data.push(item);

				}
				this.card_list = data
			}
		},
		onShow() {
			this.random_list(Math.floor(Math.random() * 10))
		}
	}
</script>

<style lang="scss">
	// 2bac69
	.gy789iokjh {
		    font-size: 28px;
		    color: #fff;
		    float: left;
		    position: absolute;
		    margin-top: -124rpx;
		    margin-left: 420rpx;
	}

	.gty78iolk {
		margin: 20rpx;
	}
</style>
