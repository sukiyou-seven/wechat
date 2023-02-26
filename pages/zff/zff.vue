<template>
	<view>
		<u-navbar title="" rightIcon="more-dot-fill" bgColor="#2bac69" placeholder :titleStyle="{fontWeight:'900'}"
			:autoBack="true" leftIconColor="#fff" rightIconColor="#fff">
		</u-navbar>
		<u--image :showLoading="true" src="/static/zff.png" width="100%" mode='aspectFit'></u--image>

		<view class="fenshu">
			{{fenshu}}
		</view>
		<view class="shijian">
			更新时间 {{formattedDate}}
		</view>
		<view class="shijian bhui0">
			了解分数>
		</view>
		<view class="green">
			<!-- <view class="gradient_top"></view> -->
		</view>
		<view class="u8ugy8">
			<view class="card lb">
				<view>
					我的服务
				</view>
				<view class="xz">
					暂无已开启的服务>
				</view>
			</view>

			<view class="card">
				<view class="lb">
					<view>
						服务使用记录
					</view>
					<view class="xz">
						>
					</view>
				</view>
				<view class="bji9899jhi">
					<view>
						<view>按时支付</view>
						<view class="uh9">128</view>
					</view>
					<view>
						<view>待支付</view>
						<view class="uh9">0</view>
					</view>
					<view>
						<view>进行中</view>
						<view class="uh9">0</view>
					</view>

				</view>
			</view>
			<view class="card">
				<view class="lb">
					<view>
						发现服务
					</view>
					<view class="xz">
						共3926个服务
					</view>
				</view>
				<view style="font-weight: 400; font-size: 30rpx;">
					<u-grid :border="false" @click="click">
						<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22" :color="baseListItem.color"></u-icon>
							<text class="grid-text">{{baseListItem.title}}</text>
							<text class="grid-text jj2">{{baseListItem.title2}}</text>
						</u-grid-item>
					</u-grid>

				</view>
			</view>
		</view>
		<view style="width: 750rpx; height: 100rpx; background-color: #e6e6e6; margin-top: -30rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fenshu: "",
				formattedDate: '',
				baseList : [
					{
						name:'car',
						title : '共享租物,',
						title2 : '免押金',
						color:'#398ade'
					},
					{
						name:'bookmark',
						title : '出行交通,',
						title2 : '先享后付',
						color:'#53c21d'
					},
					{
						name:'bag',
						title : '购物娱乐,',
						title2 : '先用后付',
						color:'#f1a532'
					},
					{
						name:'bookmark',
						title : '生活服务,',
						title2 : '先享后付、免预付费',
						color:'#606266'
					},
					{
						name:'calendar',
						title : '住宿预定,',
						title2 : '免押金、免查房',
						color:'#f1a532'
					}
				]
			};
		},
		methods: {
			random_fenshu(max, min) {
				this.fenshu = Math.floor(Math.random() * (max - min + 1)) + min;
			}
		},
		onShow() {
			this.random_fenshu(800, 600)

			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			this.formattedDate = year + '.' + month + '.' + day;


		}
	}
</script>

<style lang="scss">
	.u-grid-item{
		// justify-content: flex-end; 
		justify-content: flex-start;
		height: 160rpx;
	}
	.grid-text{
		font-size: '';
		font-weight: '';
		
	}
	.jj2{
		color: #9a9a9a;
		font-size: 26rpx;
	}
	.bji9899jhi {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
		font-size: 30rpx;
		color: #9d9d9d;
		text-align: center;

		.uh9 {
			color: #333;
			margin-top: 20rpx;
		}
	}

	.u8ugy8 {
		background-color: #e6e6e6;
		// margin-top: -30rpx;
		padding-top: 40rpx;

		.xz {
			font-size: 24rpx;
			color: #9d9d9d;
		}

	}

	.lb {
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	.card {
		background-color: #fff;
		font-size: 34rpx;
		font-weight: 800;
		border-radius: 30rpx;
		margin: 20rpx 30rpx;
		padding: 40rpx 40rpx;
	}

	.byx {
		width: 100%;
		display: flex;

		.xz {
			width: 1000rpx;
			height: 900rpx;
			background-color: #fff;
			border-radius: 375rpx;
		}

	}


	.green {
		width: 100%;
		height: 100rpx;
		position: relative;
		z-index: 1;
	}

	.green::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 72rpx;
		background: url("/static/bg.png") no-repeat left bottom;
		background-size: 100% 72rpx;
		z-index: 2;
	}


	.shijian {
		color: #e5e5e5;
		text-align: center;
		font-size: 30rpx;
	}

	.bhui0 {
		font-weight: 800;
		margin-top: 20rpx;
	}

	.fenshu {
		float: left;
		position: absolute;
		margin-top: -250rpx;
		margin-left: 310rpx;
		font-size: 80rpx;
		color: #fff;
	}
</style>
<style>
	page {
		background-color: #2bac69;
	}
</style>
