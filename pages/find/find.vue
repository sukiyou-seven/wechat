<template>
	<view>
		<u-navbar title="发现" @rightClick="rightClick" leftIcon="" bgColor="#f4f4f5" rightIcon="plus-circle" placeholder
			:titleStyle="{fontWeight:'900'}">
		</u-navbar>
		<view class="search" @click="search_">
			<u-icon name="search" size="26" @click="search_"></u-icon>
		</view>
		<view>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="朋友圈"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}" :border="false"> 
					<u-icon slot="icon" size="22" name="/static/f-pyq.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="视频号"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" > 
					<u-icon slot="icon" size="22" name="/static/f-sph.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="扫一扫"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}" > 
					<u-icon slot="icon" size="22" name="/static/f-sys.png"></u-icon>
				</u-cell>
				<u-cell  title="摇一摇"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" >
					<u-icon slot="icon" size="22" name="/static/f-yyy.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="看一看"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}" > 
					<u-icon slot="icon" size="22" name="/static/f-kyk.png"></u-icon>
				</u-cell>
				<u-cell  title="搜一搜"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" >
					<u-icon slot="icon" size="22" name="/static/f-sysy.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="直播和附近"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" > 
					<u-icon slot="icon" size="22" name="/static/f-zbfyj.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="购物"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}" > 
					<u-icon slot="icon" size="22" name="/static/f-gw.png"></u-icon>
				</u-cell>
				<u-cell  title="游戏"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" >
					<u-icon slot="icon" size="22" name="/static/f-yx.png"></u-icon>
				</u-cell>
			</u-cell-group>
			<u-gap height="8" ></u-gap>
			<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
				<u-cell  title="小程序"  size="large" isLink :titleStyle="{marginLeft:'20rpx'}":border="false" > 
					<u-icon slot="icon" size="22" name="/static/f-xcx.png"></u-icon>
				</u-cell>
			</u-cell-group>
		</view>
		<u-overlay :show="popup_show" @click="popup_show = false" :opacity="0">
			<view class="warp">
				<view class="pop-right" @tap.stop>
					<u--image src="/static/yousj.jpg" width="300rpx" height="480rpx" :lazyLoad="false" mode="aspectFit">
					</u--image>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popup_show: false
			}
		},
		methods: {
			rightClick() {
				this.popup_show = true
			},
			popup_close() {
				this.popup_show = false
			},
			search_() {
				uni.$u.route({
					url: "pages/search/search"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		float: right;
		position: fixed;
		right: 88rpx;
		top: 88rpx;
		z-index: 9999999;
	}
	.pop-right {
		float: right;
		right: 10rpx;
		position: fixed;
		top: 140rpx;
	
		.itemsss_ss {
			display: flex;
			width: 100%;
	
			.left__ {
				margin-left: 20rpx;
				width: 240rpx;
			}
	
			.addhy {
				float: left;
				// position: absolute;
				top: -10rpx;
			}
		}
	
		.bor {
			border-bottom: 1px solid #4b4d51;
		}
	
		.wenzi {
			margin: 0 0 26rpx 0;
			padding: 0 0 26rpx 0;
		}
	}
</style>
<style>
	body{
		background-color: #f2f2f3;
	}
</style>