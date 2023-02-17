<template>
	<view>
		<!-- <u-status-bar class="u-status-bar"></u-status-bar> -->
		<u-gap height="80" bgColor="#fff"></u-gap>
		<view class="user">
			<view class="avatar">
				<u-avatar :src="src" size="56" shape="square"></u-avatar>
			</view>
			<view class="user_info">
				<view>
					<view class="nickname">
						{{value}}
					</view>
					<view class="code">
						微信号 : wxid_{{wxid}}
					</view>
					<view class="zt">
						<!-- <u-tag text="状态" plain shape="circle" type="info" size="mini"  icon="plus" borderColor="#acacad"></u-tag>
						<u-tag class="xyg" text="" plain shape="circle" type="info" size="mini"  icon="more-dot-fill" borderColor="#acacad"></u-tag> -->
						<view class="dyg">+ 状态</view>
						<view class="xyg">...</view>
					</view>
				</view>
				<view class="icon">
					<u-icon name="grid" size=""></u-icon>
					<u-icon class="you" name="arrow-right" size=""></u-icon>
				</view>
			</view>

		</view>
		
		<view>
			<u-gap height="10" bgColor="#f2f2f3"></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="服务" :isLink="true" :titleStyle="{marginLeft:'20rpx'}" :border="false" @click="fuwu_func">
					<u-icon slot="icon" size="24" name="/static/m-fw.png"></u-icon>
				</u-cell>
			</u-cell-group>
			
			<u-gap height="10" bgColor="#f2f2f3"></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="收藏" :isLink="true" :titleStyle="{marginLeft:'20rpx'}" >
					<u-icon slot="icon" size="24" name="/static/m-sc.png"></u-icon>
				</u-cell>
				<u-cell  title="朋友圈" :isLink="true" :titleStyle="{marginLeft:'20rpx'}" >
					<u-icon slot="icon" size="24" name="/static/m-pyq.png"></u-icon>
				</u-cell>
				<u-cell  title="表情" :isLink="true" :titleStyle="{marginLeft:'20rpx'}" :border="false">
					<u-icon slot="icon" size="24" name="/static/m-bq.png"></u-icon>
				</u-cell>
			</u-cell-group>
			
			<u-gap height="10" bgColor="#f2f2f3"></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="设置" :isLink="true" :titleStyle="{marginLeft:'20rpx'}" :border="false">
					<u-icon slot="icon" size="24" name="/static/m-set.png"></u-icon>
				</u-cell>
			</u-cell-group>
		</view>


	</view>
</template>

<script>
	import {
		v4 as uuidv4
	} from "uuid";
	export default {
		data() {
			return {
				src: "",
				value: "",
				wxid: ''
			}
		},
		methods: {
			create_uuid__() {

				// 要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
				// 生成游客临时身份
				let uuid_token = uuidv4();
				// 本地存储一次
				let a = uuid_token.split('-')
				console.log("a=>", a);
				this.wxid = a[4]

			},
			fuwu_func(){
				console.log("服务");
				uni.$u.route({
					url : "pages/service/service"
				})
			}
		},
		onShow() {
			this.create_uuid__()
			try {
				const value = uni.getStorageSync('nickname');
				if (value) {
					console.log(value);
					this.value = value
				}

				const src = uni.getStorageSync('avatarurl');
				if (src) {
					console.log(src);
					this.src = src
				}

			} catch (e) {
				// error
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		background-color: #fff;
		display: flex;
		padding: 24rpx 30rpx;
		padding-left: 40rpx;
		padding-bottom: 50rpx;

		.user_info {
			margin-left: 28rpx;
			display: flex;

			.nickname {
				font-size: 38rpx;
				font-weight: 900;
			}

			.code {
				font-size: 28rpx;
				font-weight: 100;
				color: #6f6f70;
				margin-top: 26rpx;
				width: 450rpx;
			}

			.icon {
				display: flex;
				margin-top: 0rpx;

				.you {
					margin-left: 30rpx;
				}
			}

			.zt {
				margin-top: 30rpx;
				// width: 120rpx;
				display: flex;

				.dyg {
					border-width: 1px;
					border-style: solid;
					border-color: #b7b7b8;
					font-size: 26rpx;
					border-radius: 40rpx;
					padding: 8rpx;
					color: #a5a5a6;
					width: 106rpx;
					text-align: center; 
				}

				.xyg {
					border-width: 1px;
					border-style: solid;
					border-color: #b7b7b8;
					margin-left: 20rpx;
					border-radius: 40rpx;
					width: 48rpx;
					line-height: 30rpx;
					text-align: center;
					color: #a5a5a6;
				}
			}
		}
	}
</style>
<style>
	body {
		background-color: #f2f2f3;
	}
</style>
