<template>
	<view>
		<view class="sukiyou_ona4uitb83">
			个人信息
		</view>
		<view class="sukiyou_nmaol9mcn9w0">
			<view class="sukiyou_nui8c9j">
				证件信息
			</view>
			<view class="sukiyou_aiownf3989" v-for="(item,index) in form_list">
				<u-input placeholder="" border="none" v-model="item.value" @focus="item.modal?modal_show(item):''"
					:disabled="item.disabled" disabledColor="" :type="item.type"
					@blur="item.tm? item.value = do_tm(item.value): ''" color="#8b8b8b" 
					:suffixIcon="item.icon?item.icon:''"
					suffixIconStyle="color: #909399">
					<u--text class="sukiyou_jn309c3" :text="item.prefix" slot="prefix" margin="0 3px 0 0" type="tips">
					</u--text>
				</u-input>
			</view>
			<u-gap height="10"></u-gap>
			<view class="sukiyou_nui8c9j">
				其他信息
			</view>

			<view class="sukiyou_aiownf3989" v-for="(item,index) in form_list2">
				<u-input placeholder="" border="none" v-model="item.value"
					@blur="item.tm? item.value = do_tm(item.value): ''" color="#8b8b8b" :disabled="item.disabled"
					disabledColor="">
					<u--text class="sukiyou_jn309c3" :text="item.prefix" slot="prefix" margin="0 3px 0 0" type="tips">
					</u--text>
				</u-input>
			</view>
		</view>

		<view @click="showall" v-if="!disabled">
			<u-button type="success" text="保存" @click="save"></u-button>
		</view>

		<u-modal :show="show" :showCancelButton="true" :title="title" :content='content' :confirmText="confirmText"
			:cancelText="cancelText" @confirm="confirm(confirmText)" @cancel="cancel(cancelText)"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form_list: [{
						prefix: "姓名",
						value: "",
						tm: true,
						disabled: false
					},
					{
						prefix: "性别",
						value: "",
						modal: true,
						disabled: false,
						icon : 'arrow-right'
					},
					{
						prefix: "国籍",
						value: "中国",
						disabled: true,
					},
					{
						prefix: "证件类型",
						value: "居民身份证",
						disabled: true
					},
					{
						prefix: "证件号码",
						value: "",
						tm: true,
						disabled: false
					},
					{
						prefix: "证件有效期开始",
						value: "",
						disabled: false,
						icon : 'arrow-right'
					},
					{
						prefix: "证件有效期结束",
						value: "",
						disabled: false,
						icon : 'arrow-right'
					},
				],
				form_list2: [{
						prefix: "职业类别",
						value: "",
						disabled: false,
						icon : 'arrow-right'
					},
					{
						prefix: "地址",
						value: "",
						disabled: false,
						icon : 'arrow-right'
					},
					{
						prefix: "手机号码",
						value: "",
						type: 'number',
						tm: true,
						disabled: false,
						icon : 'arrow-right'
					},
				],
				confirmText: "",
				cancelText: "",
				show: false,
				title: "",
				content: "",
				disabled: false
			};
		},
		methods: {
			confirm(e) {
				console.log("confirm:", e);
				this.form_list.forEach((item) => {
					if (item.prefix == '性别') {
						item.value = e
					}
				})
				this.show = false
			},
			cancel(e) {
				console.log("cancel:", e);
				this.form_list.forEach((item) => {
					if (item.prefix == '性别') {
						item.value = e
					}
				})
				this.show = false
			},
			showall() {
				console.log(this.form_list);
			},
			modal_show(e) {
				this.show = true
				if (e.prefix == '性别') {
					this.confirmText = "男"
					this.cancelText = "女"
					this.title = "选择性别"
				}
			},
			do_tm(e) {
				console.log(e, this.formatName(e));

				return String(this.formatName(e))
			},
			formatName(name) {
				let value = ''
				if (name.length === 2) {
					value = name.substr(0, 1) + '*'
			 } else if (name.length > 2) {
					let char = ''
					for (let i = 0, len = name.length - 2; i < len; i++) {
						char += '*'
					}
					value = name.substr(0, 1) + char + name.substr(-1, 1)
				} else {
					value = name
				}
				return value
			},
			save() {
				uni.setStorageSync("really_data", this.form_list)
				uni.setStorageSync("really_data2", this.form_list2)
			}
		},
		onLoad(options) {
			try {
				let show = options.show
				console.log("show:", show);
				if (show) {
					console.log("jinlaile");
					this.disabled = true

					this.form_list = uni.getStorageSync('really_data')
					if (this.form_list) {
						this.form_list.forEach((e) => {
							e.disabled = true
						})
					}
					this.form_list2 = uni.getStorageSync('really_data2')
					if (this.form_list2) {
						this.form_list2.forEach((t) => {
							t.disabled = true
						})
					}
				}
			} catch (e) {
				console.log(e);
				//TODO handle the exception
			}

		}
		// watch(){
		// 	this.form_list.forEach((e)=>{
		// 		if(e.tm){
		// 			e.value = e.value[1] + "****************"+e.value[-1]
		// 		}
		// 	})
		// }
	}
</script>

<style lang="scss">
	.sukiyou_nmaol9mcn9w0 {
		padding: 40rpx;
		font-size: 24rpx;

		.sukiyou_nui8c9j {
			padding-bottom: 20rpx;
			margin-top: 20rpx;
			border-bottom: 1px solid #f1f1f1;

		}

		.sukiyou_aiownf3989 {
			// border-top: 1px solid #e9eff5;
			border-bottom: 1px solid #f1f1f1;
			// margin-top: 40rpx;
			padding-top: 30rpx;
			// margin-top: 20rpx;
			padding-bottom: 30rpx;

			.sukiyou_jn309c3 {
				span {
					color: #333;
					width: 180rpx;
				}

				text {
					color: #d8d8d8;
				}
			}
		}
	}

	.sukiyou_ona4uitb83 {
		font-size: 40rpx;
		font-weight: 900;
		text-align: center;
		height: 200rpx;
		line-height: 200rpx;
	}
</style>
<style>
	body {
		background-color: #f8f8f9;
	}
</style>
