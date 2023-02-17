<template>
	<view>
		<!-- 3cb371 -->
		<u-navbar title="" leftIcon="close" bgColor="#3cb371" placeholder :autoBack="true">
		</u-navbar>
		<view class="tops">
			<view class="tabs">
				<u-tabs :list="list1" @click="tabs_click" lineColor="#fff"
					:itemStyle="{color:'#fff',marginBottom:'20rpx'}" :activeStyle="{color: '#fff'}"
					:inactiveStyle="{color: '#9bdcb2'}" lineWidth="50"></u-tabs>
			</view>
			<view class="top-midle">
				<view class="times_" @click="choose_time(zd_show_time)">
					{{zd_show_time}}
					<u-icon name="arrow-down" size="12" top="0" color="#fff" :bold="true"></u-icon>
				</view>
				<view class="buttons">
					<view class="mar" :class="0==current?bb:''" @tap="inout_check(0)">支出</view>
					<view class="mar" :class="1==current?bb:''" @tap="inout_check(1)">收入</view>
					<view class="mar" :class="2==current?bb:''" @tap="inout_check(2)">其他</view>
				</view>
			</view>
			<view class="top-bot">
				<view class="upss">
					共{{current==0?"支出":current==1?"收入":""}}{{current==0?zd_show_data.num_out:current==1?zd_show_data.num_in:""}}笔，合计
				</view>
				<view class="down"><text
						class="yang">￥</text>{{current==0?zd_show_data.all_out:current==1?zd_show_data.all_in:""}}
				</view>
			</view>
		</view>

		<view class="e-char">
			<view class="jzb">
				<view class="icon__">
					<u-icon name="red-packet-fill" size="13" color="#fff" top="2"></u-icon>
				</view>
				使用记账本,查看分类统计
			</view>
			<view class="sukiyou_159418615">
				{{current==0?"支出对比":current==1?"收入对比":""}}
			</view>
			<view v-if="current != 2">
				<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
			</view>
		</view>
		
		<view class="sukiyou_163q41rt3456">
			<view class="sukiyou_156489651">
				{{current==0?"支出排行榜":current==1?"收入排行榜":""}}
			</view>
			<view class="sukiyou_3894y93h4t89374h" v-for="(item1,index) in zd_list" :key="index">
				
				<view v-for="(item,index1) in item1.detial" :key="index1"  class="sukiyou_1a6s51f65as4d1"
				v-if="item.inout.indexOf(current==0?'-':current==1?'+':'*') != -1"
				>
					<view class="sukiyou_4a65sd4f1as615df165as">
						{{index}}
					</view>
					<view class="a56w4g6">
						<u-avatar :src="item.avatarurl" size="30"></u-avatar>
					</view>
					<view class="a56sg415s">{{item.nickname}}</view>
					<view class="sukiyou_1a6s5d1g65s">{{item.inout}} ></view>
				</view>
			</view>
		</view>

		<u-popup :show="picker_show" @close="close" @open="open">
			<view>
				<u-datetime-picker :show="picker_show" v-model="picker_value" mode="year-month" :sukiyou_toolbar="true"
					@confirm="confirm" @cancel="cancel" :maxDate="Number(new Date())" :showToolbar="false">
				</u-datetime-picker>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
						name: "月账单"
					},
					{
						name: "年账单"
					}
				],
				bb: "border_",
				current: 0,
				picker_show: false,
				picker_value: "",
				zd_list: [],
				zd_show_data: {},
				zd_show_time: "2023年1月",
				chartData: {
					categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
					series: [{
						name: "目标值",
						data: ["35.00", 36, 31, 33, 13, 34]
					}, ]
				},
				opts: {
					color: ["#3cb371"],
					fontColor: "#3cb371",
					yAxis: {
						disabled: true,
						disableGrid: true
					},
					legend: {
						show: false
					},
					xAxis: {
						format: "\r\n"
					},
				}
			};
		},
		methods: {
			inout_check(e) {
				this.current = e
				this.confirm({
					value: this.zd_show_time,
					pp : 1
				})
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
			numtoymd(e) {

				var date = new Date(e);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
				return Y + M
			},
			confirm(e) {
				console.log("e==>",e);
				// 根据选择时间 选择数据
				var tmp_zd_list = this.zd_list
				this.zd_show_data = {}
				var time_ = ""
				var t = ""
				var time =  " "
				if(e.pp!=1){
					time = this.numtoymd(e.value)
					t = time.split('-')
					time_ = t[0] + "年" + t[1] + "月"
				}else{
					time_ = e.value
					
					time = e.value
					time = time.replace("月","")
					t = time.split("年")
					
				}
				
				console.log("time_=>",time_);
				this.zd_show_time = time_
				var year = Number(t[0])
				var month = Number(t[1])

				// 图表
				let categories = []
				let series = []
				// this length is six
				// find now
				var c_tmp_date = new Date();
				var c_tmp_Y = c_tmp_date.getFullYear()
				var c_tmp_M = Number(c_tmp_date.getMonth() + 2)
				let c_tmp_a = 0
				for (var index = 0; index < 6; index++) {
					c_tmp_a = c_tmp_M - 1
					if (c_tmp_a <= 0) {
						c_tmp_M = 13
						c_tmp_a = c_tmp_M - 1
						c_tmp_Y -= 1
					}
					categories.push(String(c_tmp_a) + "月")
					c_tmp_M -= 1
				}
				categories = categories.reverse()

				console.log("categories.length=>", categories.length);
				let categories_len = categories.length

				tmp_zd_list.forEach((item) => {
					var tmp_year = item.year
					var tmp_month = item.month
					// 选择的年月必须 相等
					if (year == tmp_year) {
						if (month == tmp_month) {
							this.zd_show_data = item
						}
					}
					let serie_len_tmp = series.length
					if (serie_len_tmp < categories_len) {
						if (this.current == 0) {
							series.push(item.all_out)
						} else if (this.current == 1) {
							series.push(item.all_in)
						}
					}

				})

				
				while (true){
					let serie_len = series.length
					if (serie_len < categories_len) {
						series.push("0.00")
						console.log("inininininin");
					}else{
						console.log("break");
						break
					}
				}
				series = series.reverse()

				// 图表

				this.chartData = {
					categories: categories,
					series: [{
						name: "目标值",
						data: series
					}, ]
				}

				this.picker_show = false
			},
			tabs_click(e) {
				console.log(e);
			},
			test() {
				let a = [{
						"time": "2023年2月",
						"year": 2023,
						"month": 2,
						"all_out": "0.00",
						"all_in": "598.63",
						"num_out": 0,
						"num_in": 1,
						"detial": [{
							"avatarurl": "/static/tx/IMG_0001.JPG",
							"nickname": "手机充值",
							"nickname_time": "2月2日 11:11",
							"inout": "+598.63"
						},
						{
							"avatarurl": "/static/tx/IMG_0001.JPG",
							"nickname": "手机充值",
							"nickname_time": "2月2日 11:11",
							"inout": "+598.63"
						}]
					},
					{
						"time": "2023年1月",
						"year": 2023,
						"month": 1,
						"all_out": "0.00",
						"all_in": "598.63",
						"num_out": 0,
						"num_in": 1,
						"detial": [{
							"avatarurl": "/static/tx/IMG_0001.JPG",
							"nickname": "手机充值",
							"nickname_time": "2月2日 11:11",
							"inout": "+598.63"
						}]
					},
					{
						"time": "2022年12月",
						"year": 2022,
						"month": 12,
						"all_out": "0.00",
						"all_in": "598.63",
						"num_out": 0,
						"num_in": 1,
						"detial": [{
							"avatarurl": "/static/tx/IMG_0001.JPG",
							"nickname": "手机充值",
							"nickname_time": "2月2日 11:11",
							"inout": "+598.63"
						}]
					},
					{
						"time": "2022年11月",
						"year": 2022,
						"month": 11,
						"all_out": "0.00",
						"all_in": "598.63",
						"num_out": 0,
						"num_in": 1,
						"detial": [{
							"avatarurl": "/static/tx/IMG_0001.JPG",
							"nickname": "手机充值",
							"nickname_time": "2月2日 11:11",
							"inout": "+598.63"
						}]
					}
					
				]
				uni.setStorageSync("zd_list", a)
			}
		},
		onShow() {
			uni.showToast({
				icon: 'loading',
				title: '加载中',
				duration: 2000,
				success: () => {
					try {
						const value = uni.getStorageSync('zd_list');
						if (value) {
							console.log(value);
							this.zd_list = value
						}
					} catch (e) {
						// error
					}
				}
			});
			// uni.navigationBarTextStyle=""

			// 获取当前年月
			var date = new Date();
			var Y = date.getFullYear() + '年';
			var M = date.getMonth() + 1 + "月";
			this.zd_show_time = Y + M


			Y = date.getFullYear() + '-';
			M = date.getMonth() + 1;

			this.confirm({
				value: Y + M,
			})
		}
	}
</script>

<style lang="scss" scoped>
	.e-char {
		border-radius: 20rpx;
		margin-top: -20rpx;
		background-color: #fff;
		padding: 30rpx;

		.jzb {
			font-size: 26rpx;
			background-color: #f4f4f5;
			padding: 30rpx 30rpx;
			color: #909399;
			border-radius: 20rpx;
			display: flex;

			.icon__ {
				background-color: #3cb371;
				height: 36rpx;
				width: 36rpx;
				border-radius: 36rpx;
				margin-right: 40rpx;

				.u-icon {
					margin-left: 6rpx;
				}
			}
		}

		.sukiyou_159418615 {
			margin-top: 20rpx;
			color: #000000;
			margin-left: 20rpx;
		}
	}

	.tops {
		background-color: #3cb371;
		height: 460rpx;

		.tabs {
			width: 300rpx;
			margin: 0 auto;
			padding-top: 30rpx;
		}

		.top-bot {
			padding: 40rpx 40rpx;

			.upss {
				color: #9bdcb2;
				font-size: 26rpx;
			}

			.down {
				color: #fff;
				font-size: 62rpx;
				font-weight: 1000;
				
				.yang {
					font-size: 42rpx;
					// justify-content: top;
				}
			}
		}

	}

	.top-midle {
		padding: 40rpx 40rpx;
		display: flex;

		.times_ {
			font-size: 32rpx;
			display: flex;
			font-weight: 600;
			color: #fff;
		}

		.buttons {
			display: flex;
			font-size: 24rpx;
			color: #9bdcb2;
			float: right;
			position: absolute;
			right: 40rpx;

			.border_ {
				border: 1px solid #fff;
				border-radius: 26rpx;
				color: #fff;
			}

			.mar {
				padding: 8rpx 20rpx;
				margin-left: 30rpx;
			}
		}

	}
	.sukiyou_163q41rt3456{
		padding: 40rpx;
		.sukiyou_156489651{
			margin-top: 20rpx;
			color: #000000;
			margin-left: 20rpx;
			font-size: 30rpx;
			margin-bottom: 40rpx;
		}
		.sukiyou_3894y93h4t89374h{
			display: flex;
			color: #2f2f2f;
			font-size: 28rpx;
			.sukiyou_1a6s51f65as4d1{
				display: flex;
				margin-bottom: 40rpx;
				.sukiyou_4a65sd4f1as615df165as{
					 margin-right: 20rpx;
				}
				.a56w4g6{
					margin-right: 30rpx;
				}
				.a56sg415s{
				}
				.sukiyou_1a6s5d1g65s{
					float: right;
					position: absolute;
					right: 40rpx;
					font-weight: 600;
					
				}
			}
			
		}
	}
	
</style>
<style>

</style>
