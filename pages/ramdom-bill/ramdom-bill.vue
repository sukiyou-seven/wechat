<template>
	<view>
		<view @click="ramdom_bill">
			---------------test-----------------
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total_in: 0,
				total_out: 0,

			};
		},
		methods: {
			ramdom_bill() {
				// 生成随机账单

				// bill demo
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
					}]
				}]

				// get today
				var date = new Date();
				var Y = date.getFullYear()
				var M = date.getMonth() + 1

				let time = Y + "年" + M + "月"
				let year = Y
				let month = M

				// 生成月份列表
				let month_in_list = []
				let year_in_list = []
				for (var i = 0; i < 12; i++) {
					if (month <= 0) {
						month = 12
					}
					month_in_list.push(month)
					month -= 1
				}
				// console.log(month_in_list);
				
				// 将总收入随机分成12份
				// let tmp_total_in = this.total_in
				
				// 生成随机账单 当账单总金额大于 x 时 停止生成
				

			},
		}
	}
</script>

<style lang="less">

</style>
