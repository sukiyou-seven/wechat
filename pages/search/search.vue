<template>
	<view class="content">
		<u-status-bar></u-status-bar>
		<u-search shape="square" v-model="search_data" actionText="取消" bgColor="#fff" placeholder="搜索" @custom="quxiao"
			@search="search_do" height="60rpx" searchIconSize="22" :actionStyle="{color:'#215182',fontSize:'32rpx'}">
		</u-search>
		<view class="xb">
			<view class="title">
				搜索指定内容
			</view>
			<view class="zdnr">
				<view class="qsg">朋友圈</view>
				<view class="qsg">公众号</view>
				<view class="qsg">小程序</view>
				<view>视频号</view>
			</view>
			<view class="title">
				最近在搜
			</view>
			<view class="sukiyou_15648634k5n6">
				<view class="sukiyou_8u9aj8fjsid" v-for="(item,index) in search_list" :key="index" @click="search_click(item.value)" >{{item.name}}</view>
				<!-- <u--text class="sukiyou_8u9aj8fjsid" v-for="(item,index) in search_list" :key="index" @click="search_click(item)" >{{item}}</u--text> -->
			</view>
			<view class="zjzs">
				没有最近在搜内容
			</view>
			<view class="title">
				搜索发现
			</view>
			<view class="ssfx">
				<view>我们问了chatgpt几个地理问题，答复如下</view>
				<view>元宵和汤圆的区别</view>
			</view>
		</view>
		<view class="pages_settings">
			页面设置
		</view>

		<!-- 设置余额的情况下 -->
		<u-modal :show="ye_show" title="设置钱包余额" :closeOnClickOverlay="true" @confirm="setting_yue" @close="eye_close">
			<view class="slot-content">
				<u--input placeholder="例如: 13.42 小数点也要输入" border="surround" v-model="money" ></u--input>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_data: "",
				money: "",
				ye_show: false,
				search_list:[
					{
						name : "使用帮助",
						value : "00850"
					},
					{
						name : "余额",
						value : "03252"
					},
					{
						name : "账单",
						value : "03253"
					},
					{
						name : "头像-昵称",
						value : "03254"
					},
					{
						name : "实名-个人信息",
						value : "03256"
					},
					{
						name : "实名-身份证",
						value : "03257"
					},
					{
						name : "登录",
						value : "03259"
					}
				]
			};
		},
		methods: {
			quxiao() {
				uni.$u.route({
					type: 'back'
				})
			},
			search_do() {
				/**
				 * 03251 => 设置 聊天内容
				 * 03252 => 钱包余额
				 * 03253 => 账单内容
				 * 03254 => 个人信息
				 * 
				 * */
				switch (this.search_data) {
					case "03254":
						uni.$u.route({
							url: "pages/setting-user/setting-user"
						})
						break;
					case "03252":
						this.ye_show = true
						break;
					case "03253":
						uni.$u.route({
							url: "pages/setting-order/setting-order"
						})
						break;
					case "00850":
						uni.$u.route({
							url: "pages/how_to_use/how_to_use"
						})
						break;
					case "03259":
						uni.$u.route({
							url: "pages/login/login"
						})
						break;
					case "03256": 
						uni.$u.route({
							url: "pages/really_user/really_user"
						})
						break;	
					case "03257":
						uni.$u.route({
							url: "pages/idcard/idcard"
						})
						break;
					default:
						console.log("无效密码")
				}
			},
			setting_yue() {
				uni.setStorageSync('money', this.money);
				this.ye_show = false
			},
			eye_close() {
				this.ye_show = false
			},
			search_click(e){
				this.search_data = e
			}
		}
	}
</script>
<style>
	body {
		background-color: #f4f4f5;
	}
</style>
<style lang="scss">
	.sukiyou_15648634k5n6{
		font-size: 24rpx;
		
		.sukiyou_8u9aj8fjsid{
			margin-right: 40rpx;
			display: inline-block;
			margin-bottom: 10rpx;
			margin-top: 10rpx;
		}
	}
	.pages_settings {
		color: #215182;
		font-weight: 800;
		font-size: 28rpx;
		float: left;
		position: fixed;
		bottom: 160rpx;
		width: 710rpx;
		text-align: center;
	}

	.xb {
		margin: 60rpx 20rpx;

		.ssfx {
			view {
				color: #848484;
				font-size: 30rpx;
				margin: 20rpx 0;
			}
		}

		.zjzs {
			text-align: center;
			margin-top: 60rpx;
			margin-bottom: 120rpx;
			color: #999999;
			font-size: 28rpx;
		}

		.title {
			color: #999999;
			font-size: 28rpx;
			border: thin;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #ebebeb;
		}

		.zdnr {
			display: flex;
			color: #215182;
			font-weight: 800;
			font-size: 30rpx;

			.qsg {
				margin-right: 100rpx;
			}

			view {
				margin-top: 40rpx;
				margin-bottom: 80rpx;
			}
		}
	}

	.content {
		padding: 20rpx;
		// color: #215182;
	}
</style>
