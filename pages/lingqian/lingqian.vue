<template>
	<view>
		<u-navbar title="" @rightClick="rightClick" leftIcon="arrow-left" bgColor="#f4f4f5" placeholder
			:titleStyle="{fontWeight:'900'}" :autoBack="true" rightText="零钱明细">
		</u-navbar>


		<view class="sukiyou_3jmfiejkn4tei">
			<u-icon name="rmb-circle-fill" color="#ff9900" size="70"></u-icon>
		</view>
		<view class="sukiyou_fnh8io3nhfiu">
			我的零钱
		</view>
		<view class="sukiyou_jnaifj8aiofh">
			￥ {{values}}
		</view>
		<view class="sukiyou_fjio48af98844">
			<u-cell-group>
				<u-cell icon="integral-fill" title="转入零钱通,能赚又能花" label="零钱通,七日年化2.10%" :iconStyle="iconStyle" isLink>
				</u-cell>
			</u-cell-group>
		</view>
		<view class="sukiyou_15648634k5n67">
			<view class="sukiyou_joifi4woif9">
				<u-button type="success" text="充值"></u-button>
				<u-button type="info" text="提现"></u-button>
			</view>
			<view class="cjwt">
				常见问题
			</view>
			<view class="xm">
				本服务由财付通提供
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconStyle: {
					fontSize: '40px',
					color: '#f9ae3d'
				},
				values: '0.00'
			};
		},
		methods: {
			rightClick() {
				uni.$u.route({
					url: 'pages/lqmx/lqmx',
					params:{
						show_options : 1
					}
				})
			}
		},
		onShow() {
			try {
				const value = uni.getStorageSync('money');
				console.log("yue=<", value);
				if (value) {
					console.log(value);
					this.values = value
				}
			} catch (e) {

			}
		}
	}
</script>

<style lang="scss">
	.sukiyou_15648634k5n67 {
		.cjwt {
			font-weight: 800;
			color: #092353;
			font-size: 30rpx;
		}

		.xm {
			font-size: 24rpx;
			color: #c8c8c8;
			margin-top: 20rpx;
		}

		.sukiyou_joifi4woif9 {
			margin: 0 auto;
			width: 300rpx;

			.u-button {
				margin-bottom: 30rpx;
			}

			margin-bottom: 100rpx;
		}

		float: left;
		bottom: 0;
		position: fixed;
		padding: 60rpx;
		text-align: center;
		width: 630rpx;
		margin: 0 auto;
	}

	.sukiyou_fjio48af98844 {
		margin-top: 40rpx;
	}

	.sukiyou_jnaifj8aiofh {
		font-size: 70rpx;
		font-weight: 900;
		text-align: center;
	}

	.sukiyou_fnh8io3nhfiu {
		margin-top: 80rpx;
		text-align: center;
	}

	.sukiyou_3jmfiejkn4tei {
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		margin-top: 80px;
	}
</style>
<style>
	body {
		background-color: #f2f2f3;
	}
</style>
