<template>
	<view>
		<u-navbar title="账单" @rightClick="rightClick" leftIcon="close" bgColor="#f2f2f3" placeholder
			:titleStyle="{fontWeight:'900',zIndex:'10060'}" :autoBack="true" rightText="常见问题" :border="true">
		</u-navbar>


		<view >
			<view class="all_order">
				<view class="but" @tap="all_bill">
					<view>
						全部账单
					</view>
					<view>
						<u-icon name="arrow-down-fill" size="10" top="5"></u-icon>
					</view>
				</view>
				<view  class="tj" @click="tongji">
					<view>
						统计
					</view>
					<view>
						<u-icon name="arrow-right" size="10" top="4"></u-icon>
					</view>
				</view>
			</view>
		</view>

		<u-gap height="70"></u-gap>
		<!-- {{zd_list_tmp}} -->
		<view class="info" v-for="(item,index) in zd_list_tmp" :key="index">
			<!-- {{item}} -->
			<u-sticky offsetTop="140">
				<view class="info1 dis">
					<view class="times_" @click="choose_time(item.time)">
						{{item.year+ "年"+ item.month+"月"}}
						<u-icon name="arrow-down" size="12" top="0" color="#333" :bold="true"></u-icon>
					</view>
					<view class="all color_ font_26">
						支出￥{{item.total_out}} 收入￥{{item.total_in}}
					</view>
				</view>
			</u-sticky>
			<view class="" v-for="(item2,index2) in item.items" :key="index2">
				<view class="moneys dis bg">
					<view class="avatar">
						<u-avatar :src="item2.item.avatarurl" size="42"></u-avatar>
					</view>
					<view class="nick">
						<view class="nickname">
							<text  class="u-line-1">{{item2.item.nickname}}</text >
						</view>
						<view class="nick_time color_ font_26">
							{{item2.item.nickname_time}}
						</view>
					</view>
					<view class="money_money" :class="item2.item.in_out !== 0 ? bbclass:''">
						{{item2.item.in_out == 0 ? "-" + item2.item.price : "+" +item2.item.price}}
					</view>
				</view>

				<view class="xian"></view>
				<u-gap height="1" bgColor="#fff"></u-gap>
			</view>

		</view>


		<u-popup :show="picker_show" @close="close" @open="open">
			<view>
				<u-datetime-picker :show="picker_show" v-model="picker_value" mode="year-month" :sukiyou_toolbar="true"
					@confirm="confirm" @cancel="cancel" :maxDate = "Number(new Date())"
					:showToolbar="false"></u-datetime-picker>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {get_bill} from '@/config/api.js'
	export default {
		data() {
			return {
				zd_list: [],
				zd_list_tmp : [],
				picker_show: false,
				picker_value: "",
				bbclass : 'sukiyou_aubn2389fn29'
			};
		},
		methods: {
			all_bill() {
				console.log('cfhl');
			},
			choose_time(e) {
				console.log(e);
				var t = e.split('年')
				var year = t[0]
				var month = t[1].replace('月', '')
				console.log(year, month);
				var b = year + "-" + month 
				this.picker_value = b
				this.picker_show = true
			},
			rightClick() {
				console.log("asdf");
				// 测试 排序
				this.zd_list_tmp.sort((a,b)=>{
					return b.year-a.year
				})
				console.log(this.zd_list_tmp);
				
			},
			numtoymd(e){
				
				var date = new Date(e);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
				return Y+M
			},
			confirm(e) {
				// 根据选择时间 将更晚的数据剔除
				var tmp_zd_list = this.zd_list
				this.zd_list_tmp = []
				var time = this.numtoymd(e.value)
				var t = time.split('-')
				var time_ = t[0]+"年"+t[1]+"月"
				var year = Number(t[0])
				var month = Number(t[1])
				
				tmp_zd_list.forEach((item)=>{
					// var tmp_ = item.time.split('年')
					var tmp_year = item.year
					var tmp_month = item.month
					console.log(year,month,tmp_year,tmp_month);
					if (year < tmp_year){
						// 选择年份 小于 数据年份 数据被需要
						this.zd_list_tmp.push(item)
					}else if(year = tmp_year){
						if (month <= tmp_month){
							//  选择年份 等于 数据年份 月份是否小于
							this.zd_list_tmp.push(item)
						}
					}
				})
				
				this.picker_show = false
			},
			cancel() {
				this.picker_show = false
			},
			tongji(){
				uni.$u.route({
					url : "pages/tingji/tingji"
				})
			},
			get_bill__(){
				let userinfo = uni.getStorageSync('login-info')
				let username = userinfo.username
				get_bill({
					username : username,
					datetime : this.datetime,
					page : "",
					limit : "",
				}).then((res)=>{
					console.log("lqmx  get_bill__=>",res);
					this.zd_list = res
					this.zd_list_tmp = this.zd_list
					// uni.hideToast();
				})
			}
		},
		onShow() {
			uni.showToast({
				icon: 'loading',
				title: '加载中',
				duration: 5000,
				success:()=>{
					this.get_bill__()
				}
			});
			
		}
	}
</script>

<style lang="scss">
	.info {

		.bg {
			background-color: #fff;
		}

		.dis {
			display: flex;
		}

		.font_26 {
			font-size: 26rpx;
		}

		.color_ {
			color: #aeaeaf;
		}

		.info1 {
			padding: 30rpx;
			background-color: #f2f2f3;

			.times_ {
				font-size: 32rpx;
				display: flex;
			}

			.all {
				float: right;
				position: absolute;
				right: 30rpx;
			}
		}

		.moneys {
			padding: 30rpx;

			.avatar {}

			.nick {
				// border-bottom: 1px solid #ededee;
				margin-left: 30rpx;
				width: 100%;

				.nickname {}

				.nick_time {
					margin-top: 20rpx;
				}
			}

			.money_money {}

		}

		.xian {
			float: right;
			border-bottom: 1px solid #ededee;
			width: 606rpx;
			right: 0;
		}
	}

	.all_order {
		// background-color: #ff9900;
		display: flex;
		padding: 30rpx;
		font-size: 28rpx;
		border-bottom: 1px solid #ededee;
		position: fixed;
		height: 80rpx;
		width: 710rpx;
		z-index: 10060;
		background-color: #f2f2f3;

		.but {
			text-align: center;
			justify-content: center;
			display: flex;
			height: 50rpx;
			background-color: #e7e7e8;
			padding: 18rpx;
			padding-bottom: 8rpx;
			border-radius: 50rpx;
		}

		.tj {
			color: #aeaeaf;
			font-size: 28rpx;
			float: right;
			position: absolute;
			right: 40rpx;
			margin-top: 20rpx;
			display: flex;
		}
	}

	.asdfsd {
		z-index: 9999999;
	}
	.sukiyou_aubn2389fn29{
		color: #ffb011;
	}
</style>
<style>
	body {
		background-color: #f2f2f3;
	}
</style>
