<template>
	<view>
		<u-navbar title="钱包" @rightClick="rightClick" leftIcon="arrow-left" bgColor="#f4f4f5" placeholder
			:titleStyle="{fontWeight:'900'}" :autoBack="true" rightText="账单">
		</u-navbar>

		<view v-for="(in_list,index) in list_data" :key="index">
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell v-for="(item,i) in in_list" :key="i" :title="item.title" :isLink="true"
					:titleStyle="{marginLeft:'20rpx'}" @click="item.click ? jump(item):''">
					<text slot="value" class="lq">
						{{item.title === '零钱' ? '￥'+values : '' }}
					</text>
					<u-icon slot="icon" size="24" :name="item.name"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="10" bgColor="#f2f2f3"></u-gap>
		</view>
<!-- 身份信息 后台验证 -->
		<view class="bottom">
			<view class="bz">
				帮助中心
			</view>
			<view class="fw">
				本服务由财付通提供
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list_data: [
					[{
							title: "零钱",
							name: "/static/qianbao/lq.png",
						},
						{
							title: "零钱通",
							name: "/static/qianbao/lqt.png"
						},
						{
							title: "银行卡",
							name: "/static/qianbao/yhk.png"
						}
					],
					[{
							title: "支付分",
							name: "/static/qianbao/zff.png"
						},
						{
							title: "亲属卡",
							name: "/static/qianbao/qsk.png"
						}
					],
					[{
						title: "消费者保护",
						name: "/static/qianbao/xfzbh.png"
					}],
					[{
							title: "身份信息",
							name: "/static/qianbao/sfxx.png",
							click:true,
							url:'pages/sfxx/sfxx'
						},
						{
							title: "支付设置",
							name: "/static/qianbao/zfsz.png"
						}
					]
				],
				values: "0.00",

			};
		},
		methods: {
			rightClick() {
				uni.$u.route({
					url: 'pages/lqmx/lqmx'
				})
			},
			jump(e){
 				uni.$u.route(e.url, {
					show: 'lisa',
				});
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
	.lq {
		font-weight: 800;
	}

	.bottom {
		float: left;
		position: fixed;
		bottom: 40rpx;
		text-align: center;
		width: 750rpx;
		.bz {
			font-size: 28rpx;
			font-weight: 900;
			color: #092c84;
			margin-bottom: 20rpx;
		}

		.fw {
			font-size: 24rpx;
			color: #747474;
		}
	}
</style>
<style>
	body {
		background-color: #f2f2f3;
	}
</style>
