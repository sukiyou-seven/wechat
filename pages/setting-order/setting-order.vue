<template>
	<view>

		<view class="card ">
			<u-input placeholder="请输入内容" border="surround" v-model="zd_list.time" disabled>
				<u--text text="账单时间(自动填写)" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
			</u-input>
			<u-input placeholder="请输入内容" border="surround" v-model="zd_list.year" @change="change_year" type="number">
				<u--text text="年" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
			</u-input>
			<u-input placeholder="请输入内容" border="surround" v-model="zd_list.month" @change="change_month" type="number">
				<u--text text="月" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
			</u-input>
			<u-input placeholder="请输入内容" border="surround" v-model="zd_list.all_out" disabled>
				<u--text text="总支出(自动计算)" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
			</u-input>
			<u-input placeholder="请输入内容" border="surround" v-model="zd_list.all_in" disabled>
				<u--text text="总收入(自动计算)" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
			</u-input>
		</view>
		<u-sticky offsetTop="0" zIndex="9999999999999">
			<view style="z-index: 999999999; padding: 20rpx;">
				<u-button text="添加明细" @click="add_detial" type="primary"></u-button>
			</view>
		</u-sticky>
		<view class="detial">
			<view class="buttons">
				<view>↓↓↓账单明细↓↓↓</view>
				<view>请按照下方示例添加</view>
				<view style="color: #ff3366;">!!!依次添加并保存每月设置 最后点击完成所有 即可完成设置!!!</view>
				<view @click="help_show__" style="margin: 40rpx 0;">使用帮助 点我</view>

			</view>

			<view v-for="(item,index) in zd_list.detial" :key="index" class="detial_item card">
				<view @click="choose_avatar(index)">
					<u-input placeholder="点击选择" border="surround" v-model="item.avatarurl" disabled>
						<u--text text="头像" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
					</u-input>
				</view>
				<u-input placeholder="请输入内容" border="surround" v-model="item.nickname">
					<u--text text="明细名称" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
				</u-input>
				<u-input placeholder="请输入内容" border="surround" v-model="item.nickname_time">
					<u--text text="明细时间" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
				</u-input>
				<u-input placeholder="请输入内容" border="surround" v-model="item.inout">
					<u--text text="出入账" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>
				</u-input>
				<u-button text="删除本条明细" @click="del_item(item,index)" type="warning" size="mini"></u-button>
			</view>
		</view>

		<view class="over">
			<u-button text="完成本月设置" @click="model_show('over_set')" type="success"></u-button>
			<u-button text="完成所有账单设置" @click="model_show('over_set_all')" type="success"></u-button>
			<u-button text="重置本月账单" @click="model_show('re_set_month')" type="error"></u-button>
			<u-button text="重置所有账单" @click="model_show('re_set')" type="error"></u-button>
		</view>

		<u-modal :show="show" :title="title" :content='content' :closeOnClickOverlay="true" @confirm="confirm"
			@cancel="cancel" @close="close" :showCancelButton="true"></u-modal>


		<u-popup :show="popup_show" @close="popup_close" :closeOnClickOverlay="true">
			<view class="popup">
				<u-scroll-list>
					<u-avatar v-for="(item,index) in avatar_url_list_default" :key="index" :src="item" size="50"
						@click="conf_this_url(item)">
					</u-avatar>
				</u-scroll-list>
			</view>
		</u-popup>


		<u-popup :show="help_show" @close="help_close" :closeOnClickOverlay="true">
			<view style="padding: 40rpx;">
				<u-divider text="!!!重点!!!"></u-divider>
				<view>
					！！！请按时间倒叙添加！！！
				</view>
				<view>
					！！！2023年 应比2022年先添加！！！
				</view>
				<view>
					！！！3 月 应比 2 月先添加！！！
				</view>
				<view>
					！！！20 号 应比 2 号先添加！！！
				</view>
				<u-divider text="方法步骤"></u-divider>
				<view>
					1.添加年月
				</view>
				<view>
					2.添加明细
				</view>
				<view>
					3.点击 <完成本月> 按钮
				</view>
				<view>
					4.重复 1 2 3 步骤 直至所有年月添加完成
				</view>
				<view>
					5. 点击 <完成所有> 按钮
				</view>
				<u-divider text="注意事项"></u-divider>
				<view>点击完成本月设置，保存当前年月账单内容，但无法使用</view>
				<view>点击完成所有，保存所有账单内容，此时设置生效 <！！！ 注意 : 请在完成所有月份后点击 按钮每50秒仅可触发一次，点击本按钮后 将会清空所有月份设置>
				</view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				help_show: false,
				zd_list: {
					time: "2023年2月",
					year: 2023,
					month: 2,
					all_out: "100.00",
					all_in: "200.00",
					num_out: 0,
					num_in: 0,
					detial: [{
						avatarurl: "",
						nickname: "手机充值",
						nickname_time: "2月2日 11:11",
						inout: "+598.63"
					},
					{
						avatarurl: "",
						nickname: "足疗",
						nickname_time: "2月2日 11:11",
						inout: "-598.63"
					},
					{
						avatarurl: "",
						nickname: "足疗",
						nickname_time: "2月2日 11:11",
						inout: "-598.63"
					},
					{
						avatarurl: "",
						nickname: "足疗",
						nickname_time: "2月2日 11:11",
						inout: "-598.63"
					},
					{
						avatarurl: "",
						nickname: "购入",
						nickname_time: "2月2日 11:11",
						inout: "+1357.94"
					}]
				},
				zd_list_total: [],
				show: false,
				title: "",
				content: "",
				event: '',
				avatar_url_list_default: ["/static/tx/meituan.png",
					"/static/tx/baobao.png", "/static/tx/kuangkuang.png", "/static/tx/hongbao.png",
					"/static/tx/IMG_0001.JPG", "/static/tx/IMG_0002.JPG", "/static/tx/IMG_0003.JPG",
					"/static/tx/IMG_0004.JPG", "/static/tx/IMG_0005.JPG", "/static/tx/IMG_0006.JPG",
					"/static/tx/IMG_0007.JPG", "/static/tx/IMG_0008.JPG", "/static/tx/IMG_0009.JPG",
					"/static/tx/IMG_0010.JPG", "/static/tx/IMG_0011.JPG", "/static/tx/IMG_0012.JPG",
					"/static/tx/IMG_0013.JPG", "/static/tx/IMG_0014.JPG", "/static/tx/IMG_0015.JPG",
					"/static/tx/IMG_0016.JPG", "/static/tx/IMG_0017.JPG", "/static/tx/IMG_0018.JPG",
					"/static/tx/IMG_0019.JPG", "/static/tx/IMG_0020.JPG", "/static/tx/IMG_0021.JPG",
					"/static/tx/IMG_0022.JPG", "/static/tx/IMG_0023.JPG", "/static/tx/IMG_0024.JPG",
					"/static/tx/IMG_0025.JPG",
					"/static/tx/IMG_0026.JPG", "/static/tx/IMG_0027.JPG", "/static/tx/IMG_0028.JPG",
					"/static/tx/IMG_0029.JPG", "/static/tx/IMG_0030.JPG", "/static/tx/IMG_0031.JPG",
					"/static/tx/IMG_0032.JPG", "/static/tx/IMG_0033.JPG", "/static/tx/IMG_0034.JPG",
					"/static/tx/IMG_0035.JPG", "/static/tx/IMG_0036.JPG", "/static/tx/IMG_0037.JPG",
					"/static/tx/IMG_0038.JPG", "/static/tx/IMG_0039.JPG", "/static/tx/IMG_0040.JPG",
					"/static/tx/IMG_0041.JPG", "/static/tx/IMG_0042.JPG", "/static/tx/IMG_0043.JPG",
					"/static/tx/IMG_0044.JPG", "/static/tx/IMG_0045.JPG", "/static/tx/IMG_0046.JPG",
					"/static/tx/IMG_0047.JPG", "/static/tx/IMG_0048.JPG", "/static/tx/IMG_0049.JPG",
					"/static/tx/IMG_0050.JPG", "/static/tx/IMG_0051.JPG",
					"/static/tx/IMG_0052.JPG", "/static/tx/IMG_0053.JPG", "/static/tx/IMG_0054.JPG",
					"/static/tx/IMG_0055.JPG", "/static/tx/IMG_0056.JPG", "/static/tx/IMG_0057.JPG",
					"/static/tx/IMG_0058.JPG", "/static/tx/IMG_0059.JPG", "/static/tx/IMG_0060.JPG",
					"/static/tx/IMG_0061.JPG", "/static/tx/IMG_0062.JPG", "/static/tx/IMG_0063.JPG",
					"/static/tx/IMG_0064.JPG", "/static/tx/IMG_0065.JPG", "/static/tx/IMG_0066.JPG",
					"/static/tx/IMG_0067.JPG", "/static/tx/IMG_0068.JPG", "/static/tx/IMG_0069.JPG",
					"/static/tx/IMG_0070.JPG", "/static/tx/IMG_0071.JPG", "/static/tx/IMG_0072.JPG",
					"/static/tx/IMG_0073.JPG", "/static/tx/IMG_0074.JPG", "/static/tx/IMG_0075.JPG",
					"/static/tx/IMG_0076.JPG", "/static/tx/IMG_0077.JPG", "/static/tx/IMG_0078.JPG",
					"/static/tx/IMG_0079.JPG", "/static/tx/IMG_0080.JPG", "/static/tx/IMG_0081.JPG",
					"/static/tx/IMG_0082.JPG", "/static/tx/IMG_0083.JPG", "/static/tx/IMG_0084.JPG",
					"/static/tx/IMG_0085.JPG", "/static/tx/IMG_0086.JPG", "/static/tx/IMG_0087.JPG",
					"/static/tx/IMG_0088.JPG", "/static/tx/IMG_0089.JPG", "/static/tx/IMG_0090.JPG",
					"/static/tx/IMG_0091.JPG", "/static/tx/IMG_0092.JPG",
				],
				popup_show: false,
				avatar_index: "",

			}
		},
		methods: {
			add_detial() {
				this.zd_list.detial.push({})
			},
			change_year() {
				this.zd_list.time = this.zd_list.year + "年" + this.zd_list.month + "月"
			},
			change_month() {
				if (this.zd_list.month > 12 || this.zd_list.month < 0) {
					console.log("input error");
				}
				this.zd_list.time = this.zd_list.year + "年" + this.zd_list.month + "月"
			},
			over_set() {
				// 遮盖页面
				uni.showLoading({
					title: '保存中...'
				});

				// uni.hideLoading();
				// 进行设置项验证
				// let data = this.zd_list

				// 计算总支出 收入
				let in__ = 0
				let out__ = 0
				this.zd_list.detial.forEach((e) => {
					if (e.inout.length > 0) {
						if (e.inout.indexOf("+") != -1) {
							// 出现了 + 收入
							in__ += (e.inout.split('+')[1]) * 100
							this.zd_list.num_in += 1
						} else if (e.inout.indexOf("-") != -1) {
							//出现了 - 支出
							out__ += (e.inout.split('-')[1]) * 100
							this.zd_list.num_out += 1
						} else {
							uni.hideLoading();
							uni.showToast({
								title: '出入账错误',
								duration: 2000,
								icon: "error"
							});
						}
					} else {
						uni.hideLoading();
						uni.showToast({
							title: '出入账错误',
							duration: 2000,
							icon: "error"
						});
					}
				})
				in__ /= 100
				out__ /= 100

				in__ = String(in__)
				out__ = String(out__)
				console.log(in__, out__);

				if (in__.indexOf(".") != -1) {
					let tmp = in__.split('.')
					if (tmp[1].length < 2) {
						tmp[1] = (tmp[1]) + "0"
					}
					in__ = String(tmp[0]) + '.' + String(tmp[1])
				} else {
					in__ = String(in__) + '.00'
				}

				if (out__.indexOf(".") != -1) {
					let tmp = out__.split('.')
					if (tmp[1].length < 2) {
						tmp[1] = (tmp[1]) + "0"
					}
					out__ = String(tmp[0]) + '.' + String(tmp[1])
				} else {
					out__ = String(out__) + '.00'
				}

				this.zd_list.all_in = in__
				this.zd_list.all_out = out__
				
				// year month
				

				// save
				this.zd_list_total.push(this.zd_list)
				this.zd_list = {
					time: "2021年2月",
					year: 2021,
					month: 2,
					all_out: "100.00",
					all_in: "200.00",
					detial: [{
						avatarurl: "",
						nickname: "手机充值",
						nickname_time: "2月2日 11:11",
						inout: "+500.00"
					}]
				}

				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
			},
			over_set_all() {
				// 将信息存储 缓存
				try {
					uni.setStorageSync('zd_list', this.zd_list_total);
					uni.showToast({
						title: '保存完成',
						duration: 2000,
					});
				} catch (e) {
					this.title = "未知错误 setting-order->193"
					this.content = "信息保存失败，请联系管理员"
					this.show = true
				}
			},
			re_set_month() {
				this.zd_list = {
					time: "2021年2月",
					year: 2021,
					month: 2,
					all_out: "100.00",
					all_in: "200.00",
					detial: [{
						avatarurl: "",
						nickname: "手机充值",
						nickname_time: "2月2日 11:11",
						inout: "+500.00"
					}]
				}
			},
			re_set() {
				this.zd_list = {
					time: "2021年2月",
					year: 2021,
					month: 2,
					all_out: "100.00",
					all_in: "200.00",
					detial: [{
						avatarurl: "",
						nickname: "手机充值",
						nickname_time: "2月2日 11:11",
						inout: "+500.00"
					}]
				}
				this.zd_list_total = []
			},
			confirm() {
				// 确认
				let e = this.event
				switch (e) {
					case "over_set":
						// 完成本月设置
						this.over_set()
						break;
					case "over_set_all":
						// 完成所有设置
						uni.$u.throttle(this.over_set_all, 50000)

						break;
					case "re_set_month":
						// 重置本月
						this.re_set_month()
						break;
					case "re_set":
						// 重置所有
						this.re_set()
						break;
					default:
						console.log("无效密码")
						break;
				}
				this.show = false
			},
			cancel() {
				// 取消
				this.show = false
			},
			close() {
				// 关闭
				this.show = false
			},
			model_show(e) {
				this.event = e
				switch (e) {
					case "over_set":
						// 完成本月设置
						this.title = "请确认信息是否正确"
						this.content = "请确认信息是否正确"
						break;
					case "over_set_all":
						// 完成所有设置
						this.title = "全部账单"
						this.content = "请确认账单是否正确，点击确认保存账单设置"
						break;
					case "re_set_month":
						// 重置本月
						this.title = "！！！警告！！！"
						this.content = "您正在进行本月份重置操作，是否执行？"
						break;
					case "re_set":
						// 重置所有
						this.title = "！！！警告！！！"
						this.content = "您正在进行所有账单重置操作，是否执行？"
						break;
					default:
						console.log("无效密码")
				}
				this.show = true
			},
			del_item(e, i) {
				this.zd_list.detial.splice(i, 1)
			},
			choose_avatar(i) {
				console.log("dianjile");
				this.popup_show = true
				this.avatar_index = i
			},
			popup_close() {
				this.popup_show = false
			},
			conf_this_url(e) {
				this.zd_list.detial[this.avatar_index].avatarurl = e
				this.popup_show = false
			},
			help_show__() {
				this.help_show = true
			},
			help_close() {
				this.help_show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup {
		height: 600rpx;
		padding: 60rpx 20rpx 60rpx 20rpx;

		.u-avatar {
			margin-right: 30rpx;
		}
	}

	.card {
		margin-top: 20rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.detial {
		margin: 20rpx;

		.detial_item {
			margin-bottom: 20rpx;

		}

		.buttons {
			margin: 30rpx;
		}
	}

	.u-input {
		margin-bottom: 10rpx;
	}

	.over {
		.u-button {
			margin-top: 20rpx;
		}

		padding-bottom: 150rpx;
	}
</style>
<style>
	body {
		background-color: #c8c8c8;
	}
</style>
