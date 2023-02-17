<template>
	<view>
		<u-navbar title="服务" @rightClick="rightClick" leftIcon="arrow-left" bgColor="#f4f4f5" rightIcon="more-dot-fill"
			placeholder :titleStyle="{fontWeight:'900'}" :autoBack="true">
		</u-navbar>

		<u-action-sheet :actions="sheet_list" :title="sheet_title" :show="sheet_show" cancelText="取消"
			:closeOnClickOverlay="true" :closeOnClickAction="true" @close="close_sheet" @select="close_sheet">
		</u-action-sheet>

		<!-- #2bac69 -->

		<view class="card green ">
			<u-grid :border="false" @click="click" col="2">
				<u-grid-item>
					<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/sfk.png"
						:size="32"></u-icon>
					<text class="grid-text">收付款</text>
				</u-grid-item>
				<u-grid-item @click="qianbao">
					<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/qb.png"
						:size="32"></u-icon>
					<text class="grid-text">钱包</text>
				</u-grid-item>
			</u-grid>
			<view class="lq">
				￥{{money}}
			</view>
		</view>
		
		<view class="card wite">
			<view class="title">
				金融理财
			</view>
			<view>
				<u-grid :border="false" @click="click" col="4">
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/xyk.png"
							:size="32"></u-icon>
						<text class="grid-text">信用卡还款</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/lct.png"
							:size="32"></u-icon>
						<text class="grid-text">理财通</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/bx.png"
							:size="32"></u-icon>
						<text class="grid-text">保险服务</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<view class="card wite">
			<view class="title">
				生活服务
			</view>
			<view>
				<u-grid :border="false" @click="click" col="4">
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/sj.png"
							:size="32"></u-icon>
						<text class="grid-text">手机充值</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/shjf.png"
							:size="32"></u-icon>
						<text class="grid-text">生活缴费</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/qbi.png"
							:size="32"></u-icon>
						<text class="grid-text">Q币充值</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/csfw.png"
							:size="32"></u-icon>
						<text class="grid-text">城市服务</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<view class="card wite">
			<view class="title">
				交通出行
			</view>
			<view>
				<u-grid :border="false" @click="click" col="4">
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/hcp.png"
							:size="32"></u-icon>
						<text class="grid-text">火车票机票</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<view class="card wite">
			<view class="title">
				购物消费
			</view>
			<view>
				<u-grid :border="false" @click="click" col="4">
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/dy.png"
							:size="32"></u-icon>
						<text class="grid-text">电影演出赛事</text>
					</u-grid-item>
					<u-grid-item>
						<u-icon :customStyle="{paddingTop:20+'rpx',marginBottom:'20rpx'}" name="/static/service/mt.png"
							:size="32"></u-icon>
						<text class="grid-text">美团特价</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheet_list: [{
					name: '服务管理',
				}],
				sheet_title: "",
				sheet_show: false,
				money :"0.00"
			};
		},
		methods: {
			rightClick() {
				this.sheet_show = true
			},
			close_sheet() {
				this.sheet_show = false
			},
			qianbao(){
				uni.$u.route({
					url : "pages/qianbao/qianbao"
				})
			}
		},
		onShow() {
			try{
				const value = uni.getStorageSync('money');
				console.log("yue=<",value);
				if (value) {
					console.log(value);
					this.money = value
				}
			}catch(e){
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		margin: 20rpx;
		border-radius: 20rpx;
		padding: 40rpx;
		padding-left: 10rpx;
		padding-bottom: 50rpx;
		padding-right: 10rpx;
	}

	.green {
		background-color: #2bac69;
		color: #fff;
		font-weight: 400;
		font-size: 32rpx;
		padding-bottom: 80rpx;
	}

	.title {
		color: #747474;
		font-size: 28rpx;
		margin-bottom: 30rpx;
		padding-left: 30rpx;
	}

	.wite {
		background-color: #fff;
		font-size: 26rpx;
	}
	.lq{
		color: #7eca9b;
		font-size: 28rpx;
		float: right;
		position: absolute;
		right: 140rpx;
		width: 150rpx;
		text-align: center;
	}
</style>
<style>
	body {
		background-color: #f2f2f3;
	}
</style>
