<template>
	<view>
		<!-- 3cb371 -->
		<u-navbar title="" leftIcon="close" bgColor="#3cb371" placeholder :autoBack="true">
		</u-navbar>
		<!-- <view @click="test">
			设置测试数据
		</view> -->
		<view class="tops">
			<view class="tabs">
				<u-tabs :list="list1" @click="tabs_click" lineColor="#fff"
					:itemStyle="{color:'#fff',marginBottom:'20rpx'}" :activeStyle="{color: '#fff'}"
					:inactiveStyle="{color: '#9bdcb2'}" lineWidth="50"></u-tabs>
			</view>
			<view class="top-midle">
				<!-- 年月 -->
				<view class="times_" @click="choose_time(zd_show_time)" v-if="tab_current == 1">
					{{zd_show_time}}
					<u-icon name="arrow-down" size="12" top="0" color="#fff" :bold="true"></u-icon>
				</view>
				<!-- 年 -->
				<view class="times_" @click="choose_year(zd_show_year)" v-else>
					{{zd_show_year}}
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
						class="yang">￥</text>{{current==0?zd_show_data.all_out:current==1?zd_show_data.all_in:"0.00"}}
				</view>
			</view>
		</view>

		<view v-if="tab_current == 1">
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
				<view class="wqt" v-else>
					<view class="sukiyou_a8y923w89tuifh">
						<u-icon name="order" size="40px" color="#909399"></u-icon>
					</view>
					无其他资金流转记录
				</view>
			</view>

			<view class="sukiyou_163q41rt3456">
				<view class="sukiyou_156489651">
					{{current==0?"支出排行榜":current==1?"收入排行榜":""}}
				</view>
				<view class="sukiyou_3894y93h4t89374h" v-for="(item1,index) in zd_list_bottom" :key="index">

					<view v-for="(item,index1) in item1.detial" :key="index1" class="sukiyou_1a6s51f65as4d1"
						v-if="item.inout.indexOf(current==0?'-':current==1?'+':'*') != -1">
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
		</view>

		<view class="sukiyou_283hn2o9ui34th" v-else>
			<view v-if="current != 2">
				<view>
					{{current==0?"支出构成":current==1?"收入构成":""}}
				</view>
				<view class="sukiyou_2n4oj5n3uo4">
					<u-row customStyle="margin-bottom: 10px">
						<u-col span="3">
							{{current==0?"消费支出":current==1?"收转账":""}}
						</u-col>
						<u-col span="5">
							<view class="asdg145">
								<u-line-progress :percentage="percentage"
									:activeColor="current==0?'#409eff':current==1?'#ff9900':''" height="8"
									:showText="false">
								</u-line-progress>
							</view>
						</u-col>
						<u-col span="4">
							<view class="awrg1561">
								{{current==0?year_data.out_:current==1?year_data.in_:""}} >
							</view>

						</u-col>
					</u-row>
				</view>
			</view>
			<view class="wqt" v-else>
				<view class="sukiyou_a8y923w89tuifh">
					<u-icon name="order" size="40px" color="#909399"></u-icon>
				</view>
				无其他资金流转记录
			</view>
		</view>


		<u-popup :show="picker_show" @close="close" @open="open">
			<view>
				<u-datetime-picker :show="picker_show" v-model="picker_value" mode="year-month" :sukiyou_toolbar="true"
					@confirm="confirm" @cancel="cancel" :maxDate="Number(new Date())" :showToolbar="false">
				</u-datetime-picker>
			</view>
		</u-popup>

		<u-popup :show="year_picker_show" @close="close" @open="open">
			<view>
				1
				<u-datetime-picker :show="year_picker_show" v-model="year_picker_value" mode="year-month"
					:sukiyou_toolbar="true" :sukiyou_month="false" @confirm="confirm_year" @cancel="cancel"
					:maxDate="Number(new Date())" :showToolbar="false">
				</u-datetime-picker>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		get_bill
	} from '@/config/api.js'
	export default {
		data() {
			return {
				list1: [{
						name: "月账单",
						id: 1
					},
					{
						name: "年账单",
						id: 2
					}
				],
				tab_current: 1,
				bb: "border_",
				current: 0,
				picker_show: false,
				picker_value: "",
				zd_list: [],
				zd_list_bottom: [],
				zd_show_data: {},
				zd_show_time: "2023年1月",
				zd_show_year: "2023年",
				chartData: {
					categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
					series: [{
						name: "目标值",
						data: ["35.00", 36, 31, 33, 13, 34]
					}, ]
				},
				opts: {
					color: ["#4eec93"],
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
				},
				year_picker_show: false,
				year_picker_value: "",
				percentage: 100,
				year_data: {
					out_: 0,
					in_: 0
				},
				datetime: ''
			};
		},
		methods: {
			hm_to_ym(milliseconds) {
				const date = new Date(milliseconds);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				return `${year}年${month}月`;
			},
			ym_to_ms(e) {
				var t = e.split('年')
				var year = t[0]
				var month = t[1].replace('月', '')
				var b = year + "-" + month
				var date = new Date(b);
				var milliseconds = date.getTime();
				return {
					ms: milliseconds,
					year: year,
					month: month
				}
			},
			open() {

			},
			close() {

			},
			inout_check(e) {
				this.current = e
				if (this.tab_current == 1) {
					this.confirm({
						value: this.zd_show_time,
						pp: 1
					})

				} else {
					this.confirm_year({
						value: this.zd_show_year,
						pp: 1
					})
				}


			},
			confirm_year(e) {
				this.year_picker_show = false
				// var year = String(e.value)
				var time_ = ""
				var t = ""
				var time = " "
				if (e.pp != 1) {
					time = this.numtoymd(e.value)
					t = time.split('-')
					time_ = t[0]
					this.zd_show_year = time_ + "年"
				} else {
					time_ = String(e.value)
					if (time_.indexOf("年") != -1) {
						this.zd_show_year = time_
					} else {
						this.zd_show_year = time_ + "年"
					}

					// time = e.value
					// time = time.replace("月", "")
					// t = time.split("年")
				}
				var year = time_
				year = year.split('年')[0]

				// 计算下方需要的数据
				var out_ = 0 // 年支出
				var in_ = 0 // 年收入
				var all = 0 // 没用
				var num_out = 0 // 年支出笔数
				var num_in = 0 // 年收入笔数
				var tmp_zd_list = this.zd_list
				this.zd_show_data = {}
				tmp_zd_list.forEach((item) => {
					if (item.year == year) {
						out_ += Number(item.all_out)
						in_ += Number(item.all_in)
						// all += item.all_in
						// all += item.all_out
						num_out += item.num_out
						num_in += item.num_in
					}
				})
				// this.zd_show_data.num_out = 0
				// this.zd_show_data.num_in = 0
				// this.zd_show_data.all_out = 0
				// this.zd_show_data.all_in = 0
				this.year_data.in_ = in_.toFixed(2)
				this.year_data.out_ = out_.toFixed(2)
				this.zd_show_data.num_out = num_out == NaN ? num_out : 0
				this.zd_show_data.num_in = num_in
				// this.zd_show_data = {}
				this.zd_show_data.all_out = out_.toFixed(2)
				this.zd_show_data.all_in = in_.toFixed(2)
				// 计算百分比

				// var out_percentage = out_ / all
				// var in_percentage = in_ / all



			},
			cancel() {
				this.year_picker_show = false
				this.picker_show = false
			},
			choose_year(e) {
				var year = e.replace('年', '')
				this.year_picker_value = year
				this.year_picker_show = true
			},
			choose_time(e) {
				console.log("choose_time=>", e);
				this.picker_value = this.ym_to_ms(e).ms
				this.picker_show = true
			},
			numtoymd(e) {

				var date = new Date(e);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
				return Y + M
			},
			confirm(e) {
				// 组件返回的是当前毫秒数
				// 2023-01 1672502400000
				// 2023-02 1675180800000
				// 得到的结果
				// {value: '2023-02', mode: 'year-month'}
				// 用于显示的时间
				let tmp_show_date = this.hm_to_ym(e.value)
				this.zd_show_time = tmp_show_date

				// 图表 x 轴
				let categories = []
				// 根据选定的时间 需要6个
				// 拿到当前选定月份
				let dq_date_list = tmp_show_date.split('年')
				let dq_year = dq_date_list[0]
				let dq_month = dq_date_list[1].replace('月', '')
				let dq_month_tmp = Number(dq_month) + 1
				for (var i = 0; i < 6; i++) {
					dq_month_tmp -= 1
					if (dq_month_tmp < 1) {
						dq_month_tmp = 12
					}
					categories.push(dq_month_tmp)

				}
				console.log("categories=>", categories);

				// 在数据中查找 当前选定年份 和当前需要执行月份的 数据
				// 定义初始年份
				let begin_year = dq_year
				// 初始数据在 zd_list 中 复制一份
				let tmp_zd_list = this.zd_list
				// 定义其他初始变量
				// let begin_all_in = 0
				// let begin_all_out = 0
				let begin_total_in = 0
				let begin_total_out = 0
				// 初始 X 轴 值 数组
				let data = []
				console.log("tmp_zd_list=>",tmp_zd_list);
				categories.forEach((e) => {
					// 这个循环保证了 6 次
					// 同时可以拿到 需要执行的月份
					let sftj = 0
					tmp_zd_list.forEach((item__sukiyou_093nic) => {
						console.log(`当前查找 ${e} 月 ${begin_year} 年`);
						if (item__sukiyou_093nic.month == e && item__sukiyou_093nic.year == begin_year) {
							// 当年月为所需时
							// 定义其他初始变量
							let begin_all_in = 0
							let begin_all_out = 0
							item__sukiyou_093nic.items.forEach((dsc => {
								if (dsc.item.in_out == 0) {
									// 当前详情账单 为支出
									// 计算初始变量
									begin_all_out += dsc.price *100
									begin_total_out += 1
									// data中添加
								} else {
									begin_all_in += dsc.price *100
									begin_total_in += 1
								}
							}))
							if(this.current == 0){
								data.push(begin_all_out/100)
							}else if(this.current == 1){
								data.push(begin_all_in/100)
							}
							sftj +=1
							return
						}
						else{
							// 当没找到任何数据时 啥都不干 但是 缺失占位数据
							// console.log("执行");
							// return
						}
						// data.push("0.00")
					})
					
					if(sftj ==0){
						// 若未查询到数据 则添加 0.00 补足 数据位
						data.push("0.00")
					}

					// 判断 如果下一个虚拟月份小于 1 则 年份-1
					if (e - 1 < 1) {
						begin_year -= 1
					}
				})
				
				// x 轴 值
				let series = [{
					name: "目标值",
					data: data.reverse()
				}]
				// data 依旧也需要6个
				
				// 复写 charData
				this.chartData = {
					categories : categories.reverse(),
					series : series
				}
				console.log("this.chartData: ",this.chartData);
				

			},
			tabs_click(e) {
				this.tab_current = e.id
				// 获取当前年月
				var date = new Date();
				var Y = date.getFullYear() + '年';
				var M = date.getMonth() + 1 + "月";
				this.zd_show_time = Y + M
				this.zd_show_year = Y

				Y = date.getFullYear() + '-';
				M = date.getMonth() + 1;

				if (e.id == 1) {
					this.confirm({
						value: Y + M,
					})
				} else if (e.id == 2) {
					this.confirm_year({
						value: date.getFullYear(),
						pp: 1
					})
				}
			},
			test() {
				let a = [{
						"time": "2023年2月",
						"year": 2023,
						"month": 2,
						"all_out": "1197.26",
						"all_in": "1197.26",
						"num_out": 0,
						"num_in": 1,
						"detial": [{
								"avatarurl": "/static/tx/IMG_0001.JPG",
								"nickname": "手机充值1+",
								"nickname_time": "2月2日 11:11",
								"inout": "+598.63"
							},
							{
								"avatarurl": "/static/tx/IMG_0001.JPG",
								"nickname": "手机充值2+",
								"nickname_time": "2月2日 11:11",
								"inout": "+598.63"
							},
							{
								"avatarurl": "/static/tx/IMG_0001.JPG",
								"nickname": "手机充值3-",
								"nickname_time": "2月2日 11:11",
								"inout": "-598.63"
							},
							{
								"avatarurl": "/static/tx/IMG_0001.JPG",
								"nickname": "手机充值4-",
								"nickname_time": "2月2日 11:11",
								"inout": "-598.63"
							}
						]
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
							"nickname": "手机充值5+",
							"nickname_time": "1月2日 11:11",
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
							"nickname": "手机充值6+",
							"nickname_time": "12月2日 11:11",
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
								"nickname": "手机充值7+",
								"nickname_time": "11月2日 11:11",
								"inout": "+598.63"
							},
							{
								"avatarurl": "/static/tx/IMG_0001.JPG",
								"nickname": "手机充值8-",
								"nickname_time": "11月2日 11:11",
								"inout": "-598.63"
							}
						]
					}

				]
				uni.setStorageSync("zd_list", a)
			},
			get_bill__() {
				let userinfo = uni.getStorageSync('login-info')
				let username = userinfo.username
				get_bill({
					username: username,
					datetime: this.datetime,
					page: "",
					limit: "",
				}).then((res) => {
					console.log("get_bill__=>", res);
					this.zd_list = res
					console.log("this.zd_list: ",this.zd_list);
				})
			}
		},
		onShow() {
			uni.showToast({
				icon: 'loading',
				title: '加载中',
				duration: 2000,
				success: () => {
					this.get_bill__()
				}
			});
			// uni.navigationBarTextStyle=""

			// 获取当前年月
			var date = new Date();
			let dq_date = this.hm_to_ym(date)
			this.zd_show_time = dq_date
			// this.zd_show_year = Y

			// Y = date.getFullYear() + '-';
			// M = date.getMonth() + 1;

			this.confirm({
				value: date,
			})
		}
	}
</script>

<style lang="scss" scoped>
	.sukiyou_283hn2o9ui34th {
		font-size: 30rpx;
		padding: 40rpx;

		view {
			margin-top: 30rpx;
		}

		.sukiyou_2n4oj5n3uo4 {
			// display: flex;
			font-size: 26rpx;
			// align-items: flex-end;


			.asdg145 {
				margin-top: -28rpx;
			}

			// .as156dg {
			// 	width: 340rpx;

			// }

			.awrg1561 {
				font-weight: 800;
				display: flex;
				justify-content: flex-end;
				margin-top: 0;
				// width: 170rpx;
			}
		}



	}

	.wqt {
		font-size: 26rpx;
		color: #909399;
		margin: 0 auto;
		text-align: center;

		.sukiyou_a8y923w89tuifh {
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
		}

	}

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

	.sukiyou_163q41rt3456 {
		padding: 40rpx;

		.sukiyou_156489651 {
			margin-top: 20rpx;
			color: #000000;
			margin-left: 20rpx;
			font-size: 30rpx;
			margin-bottom: 40rpx;
		}

		.sukiyou_3894y93h4t89374h {
			// display: flex;
			color: #2f2f2f;
			font-size: 28rpx;

			.sukiyou_1a6s51f65as4d1 {
				display: flex;
				margin-bottom: 40rpx;

				.sukiyou_4a65sd4f1as615df165as {
					margin-right: 20rpx;
				}

				.a56w4g6 {
					margin-right: 30rpx;
				}

				.a56sg415s {}

				.sukiyou_1a6s5d1g65s {
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
