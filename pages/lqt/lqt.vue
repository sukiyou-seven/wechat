<template>
	<view>
		<u-navbar title="" rightIcon="more-dot-fill" bgColor="#f1a532" placeholder :titleStyle="{fontWeight:'900'}"
			:autoBack="true" leftIconColor="#fff" rightIconColor="#fff">
		</u-navbar>

		<view class="sukiyou_gy78ukom">
			<u-icon name="integral-fill" size="40" color="#f1a532"></u-icon>
		</view>

		<view class="sukiyou_nu8iknju8">
			零钱通
		</view>
		<view class="sukiyou_gyg7u8ik">
			<u-icon name="empty-permission" color="#fff"></u-icon>
			<view>
				资金安全保障中
			</view>
			<u-icon name="arrow-right" color="#fff"></u-icon>
		</view>
		<view class="sukiyou_card">
			<view class="padding_yes">
				<view class="a">
					账户余额
				</view>
				<view class="b">
					￥ {{zhye}}
				</view>
				<view class="c">
					资金明细
				</view>
				<view class="d">
					<view class="da">
						<view class="daa">7日年化收益率></view>
						<view class="dab">1.9060%</view>
						<view class="dac">华夏财富宝货币A</view>
					</view>
					<view class="db">
						<view class="daa">累计收益></view>
						<view class="dab">￥ 59.86</view>
						<view class="dac">昨日￥ 0.00</view>
					</view>
				</view>
				<view class="button___">
					<view class="lbt">
						<u-button text="转入" color="#f1a532" width="100rpx"></u-button>
						<u-button text="转出" color="#d6d6d6" width="100rpx" :customStyle="customStyle1"></u-button>
					</view>
				</view>
			</view>
			<view class="dszr">
				<u-cell-group :border="false">
					<u-cell icon="clock" title="定时转入" :iconStyle="iconStyle" isLink :border="false">
					</u-cell>
				</u-cell-group>
			</view>
		</view>

		<view class="lct_card">
			<u-cell-group :border="false">
				<u-cell icon="twitter-circle-fill" title="理财通" :iconStyle="iconStyle1"  isLink
					:border="false">
				</u-cell>
			</u-cell-group>
			<view class="xb">
				<view class="ghjk sdf">
					<view>查看更多产品收益</view>
					<view>2.91%</view>
				</view>
				<view class="gfd sdf">
					<view>特邀用户专享</view>
					<view>成立以来年化回报</view>
				</view>
			</view>
		</view>
		<view style="font-size: 28rpx; color: #fff; font-weight: 600;text-align: center;">
			了解零钱通 > 常见问题 >
		</view>
		<view style="width: 750rpx; height: 200rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhye: "0.00",
				customStyle1: {
					color: '#939393'
				},
				iconStyle1:{
					color:'#3776ff'
				}
			};
		}
	}
</script>
<style>
	body {
		background-color: #f1a532;
	}

	page {
		background-color: #f1a532;
	}
</style>

<style lang="scss">
	.lct_card {
		.sdf {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10rpx;
		}

		.gfd {
			font-size: 30rpx;
			color: #aaaaaa;
		}

		.ghjk {
			font-weight: 600;
		}

		.xb {
			margin-top: 30rpx;
			padding: 30rpx;
		}

		margin: 20rpx;
		border-radius: 30rpx;
		background-color: #fff;
	}

	.dszr {
		padding: 40rpx 0;
	}

	.sukiyou_card {
		.padding_yes {
			padding: 50rpx;
		}

		.button___ {
			margin-top: 80rpx;
			display: flex;
			justify-content: center;

			.lbt {
				width: 360rpx;

				.u-button {
					margin-bottom: 40rpx;
				}
			}
		}

		.d {
			.dac {
				background-color: #eaeaea;
				color: #9a9a9a;
				border-radius: 30rpx;
				padding: 10rpx;
				font-size: 24rpx;
			}

			.dab {
				font-size: 40rpx;
				font-weight: 800;
				margin-bottom: 20rpx;
			}

			.daa {
				font-size: 30rpx;
				color: #9a9a9a;
				margin-bottom: 20rpx;
			}

			.da {
				border-right: 1px solid #eaeaea;
				padding-right: 60rpx;
			}

			.db {
				padding-left: 60rpx;
			}

			display: flex;
			justify-content: space-evenly;
		}

		.c {
			color: #0f3890;
			font-weight: 800;
			font-size: 28rpx;
			text-align: center;
			margin: 20rpx;
			margin-bottom: 70rpx;
		}

		.b {
			text-align: center;
			font-size: 60rpx;
			font-weight: 900;
			margin-top: 20rpx;
		}

		.a {
			font-size: 30rpx;
			text-align: center;
		}

		background-color: #fff;
		border-radius: 30rpx;
		margin: 20rpx;
		// padding: 50rpx;
	}

	.sukiyou_gyg7u8ik {
		display: flex;
		justify-content: center;
		color: #fff;
		font-size: 30rpx;
	}

	.sukiyou_nu8iknju8 {
		text-align: center;
		color: #fff;
		margin: 20rpx 0;
		font-size: 36rpx;
		font-weight: 600;
	}

	.sukiyou_gy78ukom {
		background-color: #fff;
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		border-radius: 100rpx;
	}
</style>
