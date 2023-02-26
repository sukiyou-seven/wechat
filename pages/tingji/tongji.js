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
				extra: {
					column: {
						width: 20
					}

				}
			},
			year_picker_show: false,
			year_picker_value: "",
			percentage: 100,
			year_data: {
				out_: 0,
				in_: 0
			},
			datetime: '',
			num_out: 0,
			num_in: 0,
			all_out: 0,
			all_in: 0,
			nzd: {
				in: [{
					name: '收转账',
					color: '#ff9900',
					price: "0.00",
					percentage: 30
				}, {
					name: '退款',
					color: '#ff9900',
					price: "0.00",
					percentage: 30
				}, {
					name: '收红包',
					color: '#ff3366',
					price: "0.00",
					percentage: 30
				}],
				out: [{
					name: '转账',
					color: '#ff9900',
					price: "0.00",
					percentage: 30
				}, {
					name: '消费支出',
					color: '#409eff',
					price: "0.00",
					percentage: 30
				}, {
					name: '发红包',
					color: '#ff3366',
					price: "0.00",
					percentage: 30
				}],
				other: [{
					name: '零钱提现',
					color: '#333333',
					disabled: true,
					price: "0.00",
					percentage: 30
				}]
			},
			sukiyou_meiyong_001: ''
		};
	},
	methods: {
		hm_to_ym(milliseconds) {
			const date = new Date(milliseconds);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			return `${year}年${month}月`;
		},
		hm_to_ym2(milliseconds) {
			const date = new Date(milliseconds);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			return `${year}年`;
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
		inout_check(e, my) {
			this.current = e
			var date = new Date();
			if (this.tab_current == 1) {
				this.confirm({
					value: this.sukiyou_meiyong_001,
					pp: 1
				})
			}

			// } else {
			// 	this.confirm_year({
			// 		value: date,
			// 		pp: 1
			// 	})
			// }


		},
		check_str(str) {
			let condition = ['转账', '红包', '退款', '提现']
			for (var i = 0; i < condition.length; i++) {
				if (str.indexOf(condition[i]) !== -1) {
					return '转账'
				}
				return false
			}
		},
		confirm_year(e) {
			console.log("confirm_year=>", e);
			// 组件返回的是当前毫秒数
			// 2023-01 1672502400000
			// 2023-02 1675180800000
			// 得到的结果
			// {value: '2023-02', mode: 'year-month'}
			// 用于显示的时间
			this.sukiyou_meiyong_001 = e.value
			let tmp_show_date = this.hm_to_ym2(e.value)
			console.log("tmp_show_date=>", tmp_show_date);
			this.zd_show_year = tmp_show_date

			// 需要计算的值
			// 绿色区域
			let zd_list_tmp = this.zd_list
			// 当前选定年份
			let dq_date_list = tmp_show_date.split('年')
			let dq_year = dq_date_list[0]

			// 收支 数量
			let in_num = 0
			let out_num = 0
			// 收支 金额
			let in_price = 0
			let out_price = 0
			// 收支分项 金额
			let out_zz = 0
			let out_xf = 0
			let out_hb = 0
			let in_zz = 0
			let in_tk = 0
			let in_hb = 0
			let tx = 0
			zd_list_tmp.forEach((item1) => {
				// 如果 当前数据年份  ==  用户选定年份
				if (item1.year == dq_year) {
					item1.items.forEach((item2) => {
						// console.log("item2: ",item2);
						if (item2.item.in_out == 0) {
							out_num += 1
							out_price += item2.price * 100
							if (item2.item.nickname.indexOf('红包') !== -1) {
								out_hb += item2.price * 100
							} else if (item2.item.nickname.indexOf('转账') !== -1) {
								out_zz += item2.price * 100
							} else {
								out_xf += item2.price * 100
							}
						} else if (item2.item.in_out == 2) {
							tx += item2.price * 100
						} else {
							in_num += 1
							in_price += item2.price * 100
							if (item2.item.nickname.indexOf('红包') !== -1) {
								in_hb += item2.price * 100
							} else if (item2.item.nickname.indexOf('转账') !== -1) {
								in_zz += item2.price * 100
							} else if (item2.item.nickname.indexOf('退款') !== -1) {
								in_tk += item2.price * 100
							}
						}
					})
				}
			})
			console.log(out_zz);

			// 计算百分比
			let out_zz_perc = 0
			let out_xf_perc = 0
			let out_hb_perc = 0
			let in_zz_perc = 0
			let in_tk_perc = 0
			let in_hb_perc = 0

			console.log("wlp=>", out_zz_perc, out_zz, out_price, out_xf);
			out_zz_perc = out_zz / out_price * 100
			out_xf_perc = out_xf / out_price * 100
			out_hb_perc = out_hb / out_price * 100
			in_zz_perc = in_zz / in_price * 100
			in_tk_perc = in_tk / in_price * 100
			in_hb_perc = in_hb / in_price * 100

			this.all_in = in_price / 100
			this.all_out = out_price / 100
			this.num_in = in_num
			this.num_out = out_num

			//下方

			this.nzd = {
				in: [{
					name: '收转账',
					color: '#ff9900',
					price: in_zz / 100,
					percentage: in_zz_perc
				}, {
					name: '退款',
					color: '#ff9900',
					price: in_tk / 100,
					percentage: in_tk_perc
				}, {
					name: '收红包',
					color: '#ff3366',
					price: in_hb / 100,
					percentage: in_hb_perc
				}],
				out: [{
					name: '转账',
					color: '#ff9900',
					price: out_zz / 100,
					percentage: out_zz_perc
				}, {
					name: '消费支出',
					color: '#409eff',
					price: out_xf / 100,
					percentage: out_xf_perc
				}, {
					name: '发红包',
					color: '#ff3366',
					price: out_hb / 100,
					percentage: out_hb_perc
				}],
				other: [{
					name: '零钱提现',
					color: '#333333',
					disabled: true,
					price: tx / 100,
					percentage: 0
				}]
			}

			console.log("this.nzd=>", this.nzd);
			this.year_picker_show = false

		},
		cancel() {
			this.year_picker_show = false
			this.picker_show = false
		},
		choose_year(e) {
			this.year_picker_value = this.ym_to_ms(e).ms
			console.log("this.year_picker_value=>", this.year_picker_value);
			this.year_picker_show = true
		},
		choose_time(e) {
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
			this.zd_list_bottom = []
			// 组件返回的是当前毫秒数
			// 2023-01 1672502400000
			// 2023-02 1675180800000
			// 得到的结果
			// {value: '2023-02', mode: 'year-month'}
			// 用于显示的时间
			this.sukiyou_meiyong_001 = e.value
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
			categories.forEach((e) => {
				// 这个循环保证了 6 次
				// 同时可以拿到 需要执行的月份
				let sftj = 0
				tmp_zd_list.forEach((item__sukiyou_093nic) => {
					if (item__sukiyou_093nic.month == e && item__sukiyou_093nic.year == begin_year) {
						// 当年月为所需时
						// 定义其他初始变量
						let begin_all_in = 0
						let begin_all_out = 0
						item__sukiyou_093nic.items.forEach((dsc => {
							if (dsc.item.in_out == 0) {
								// 当前详情账单 为支出
								// 计算初始变量
								begin_all_out += dsc.price * 100
								if ((item__sukiyou_093nic.month == 10 ? item__sukiyou_093nic
										.month : item__sukiyou_093nic.month.replace('0', '')
									) == dq_month) {
									// console.log(`当前查询月:${item__sukiyou_093nic.month} 当前选择月份 : ${dq_month},当前支出数量:${begin_total_out}`);
									begin_total_out += 1
									this.zd_list_bottom.push(dsc.item)
								}

							} else if (dsc.item.in_out == 1) {
								begin_all_in += dsc.price * 100
								if ((item__sukiyou_093nic.month == 10 ? item__sukiyou_093nic
										.month : item__sukiyou_093nic.month.replace('0', '')
									) == dq_month) {
									// console.log(`当前查询月:${item__sukiyou_093nic.month},当前选择月份 : ${dq_month}当前收入数量:${begin_total_out}`);
									begin_total_in += 1
									this.zd_list_bottom.push(dsc.item)
								}

							}
						}))
						if (this.current == 0) {
							data.push(((begin_all_out / 100)/10000).toFixed(2))
						} else if (this.current == 1) {
							data.push(((begin_all_in / 100)/10000).toFixed(2))
							// data.push(begin_all_in / 100)
						}
						sftj += 1
						return
					} else {
						// 当没找到任何数据时 啥都不干 但是 缺失占位数据
						// console.log("执行");
						// return
					}
					// data.push("0.00")
				})

				if (sftj == 0) {
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
				categories: categories.reverse(),
				series: series
			}

			// 绿色区域数据
			this.num_out = begin_total_out
			this.num_in = begin_total_in
			this.all_out = 0
			this.all_in = 0

			// 当前选择 年月 的总收支
			let dq_month_e = dq_month
			tmp_zd_list.forEach((e) => {
				if ((e.month == 10 ? e.month : e.month.replace('0', '')) == dq_month_e && e.year == dq_year) {
					e.items.forEach((dsc => {
						if (dsc.item.in_out == 0) {
							// 当前详情账单 为支出
							this.all_out += dsc.price * 100
						} else if (dsc.item.in_out == 1) {
							// ----
							this.all_in += dsc.price * 100
						}
					}))
				}
			})
			this.all_out /= 100
			this.all_in /= 100

			this.picker_show = false
		},
		tabs_click(e) {
			this.tab_current = e.id
			// 获取当前年月
			var date = new Date();

			if (e.id == 1) {
				this.confirm({
					value: date,
				})
			} else if (e.id == 2) {
				this.confirm_year({
					value: date,
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
				this.zd_list = res
				var date = new Date();
				this.confirm({
					value: date,
				})
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
		this.zd_show_year = this.hm_to_ym2(date)
		console.log("this.hm_to_ym2(date)=>", this.hm_to_ym2(date));

		// Y = date.getFullYear() + '-';
		// M = date.getMonth() + 1;


	}
}
