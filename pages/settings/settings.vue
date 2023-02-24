<template>
	<view>
		<u-gap height="40" bgColor="#f2f2f3"></u-gap>
		<u-cell-group :customStyle="{backgroundColor:'#fff'}" :border="false">
			<u-cell v-for="(item,index) in search_list" :title="item.name" :isLink="true"
				:titleStyle="{marginLeft:'20rpx'}" :border="false" @click="handleClick(item.func,item)">

				<u-icon slot="icon" size="24" name="/static/m-set.png"></u-icon>
			</u-cell>
		</u-cell-group>
		
		<view>
			<view>当前登录账号：{{user_my}}</view>
			<pre>{{bill_data}}</pre>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-modal :show="show" :title="title" :closeOnClickOverlay="true" @close="close_modal" @confirm="begin_create">
			<view class="slot-content">
				<view>
					若已经生成账单,将为您清空历史并重新生成
					<view>数据基于账号 存于云端</view>
				</view>
				<u-gap height="20"></u-gap>
				<u-input placeholder="请输入年收入" border="surround" v-model="total_in" type="number">
					<u-text text="年收入(元)" slot="prefix" margin="0 3px 0 0" type="tips"></u-text>
				</u-input>
				<u-gap height="20"></u-gap>
				<u-input placeholder="请输入年支出" border="surround" v-model="total_out" type="number">
					<u-text text="年支出(元)" slot="prefix" margin="0 3px 0 0" type="tips"></u-text>
				</u-input>
			</view>
		</u-modal>
		
		<u-overlay :show="overlay_show">
			<u-loadmore :status="status" />
		</u-overlay>
		
		<u-modal :show="ye_show" title="设置钱包余额" :closeOnClickOverlay="true" @confirm="setting_yue" @close="eye_close">
			<view class="slot-content">
				<view>
					例如:13.42 小数点一定要输入
				</view>
				<u-gap height="20"></u-gap>
				<u--input placeholder="例如:13.42 小数点一定要输入" border="surround" v-model="money" ></u--input>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		create_bill,
		get_bill
	} from '@/config/api.js'
	export default {
		data() {
			return {
				search_list: [{
						name: "使用帮助",
						value: "00850",
						func: 'jump',
						url: "pages/how_to_use/how_to_use"
					},
					{
						name: "余额",
						value: "03252",
						func: "illegal_operation"
					},
					{
						name: "账单",
						value: "03253",
						func: 'jump',
						url: "pages/setting-order/setting-order"
					},
					{
						name: "头像-昵称",
						value: "03254",
						func: 'jump',
						url: "pages/setting-user/setting-user"
					},
					{
						name: "实名-个人信息",
						value: "03256",
						func: 'jump',
						url: "pages/really_user/really_user"
					},
					{
						name: "实名-身份证",
						value: "03257",
						func: 'jump',
						url: "pages/idcard/idcard"
					},
					{
						name: "登录",
						value: "03259",
						func: 'jump',
						url: "pages/login/login"
					},
					{
						name: "为我生成账单",
						value: "03258",
						func: 'create_bill__',
					},
					{
						name: "查看账单数据",
						value: "04001",
						func: 'look_bill',
					}
				],
				show: false,
				title: "随机账单生成",
				total_in: 0,
				total_out: 0,
				overlay_show : false,
				status : false,
				ye_show : false,
				money : "",
				bill_data : '',
				user_my : ""
			};
		},
		methods: {
			handleClick(e, item) {
				this[e](item)
			},
			jump(item) {
				console.log(item);
				uni.$u.route({
					url: item.url
				})
			},
			illegal_operation() {
				// this.$refs.uToast.show({
				// 	type: 'warring',
				// 	message: '暂未开放 请在搜索页面 设置',
				// })
				this.ye_show = true
			},
			create_bill__() {
				this.show = true
			},
			close_modal() {
				this.show = false
			},
			begin_create(){
				let userinfo = uni.getStorageSync('login-info')
				let username = userinfo.username
				create_bill({
					username: username,
					total_in: Number(this.total_in),
					total_out: Number(this.total_out),
				}).then((e)=>{
					console.log("e: ",e);
					this.$refs.uToast.show({
						type: 'warning',
						message: e[0],
						duration : 2000
					})
				}).catch((e)=>{
					console.log("e , catch: ",e);
				})
				this.show = false 
				
				this.$refs.uToast.show({
					type: 'success',
					message: '正在为您生成随机账单,请耐心等待, 请不要重复提交 大约5-10分钟',
					duration : 4000
				})
			},
			look_bill(){
				let userinfo = uni.getStorageSync('login-info')
				let username = userinfo.username
				this.user_my = username
				this.status = "loading"
				this.overlay_show = true
				get_bill({
					username : username,
					datetime : '',
					page : "",
					limit : ""
				}).then((e)=>{
					console.log(e);
					this.bill_data = e
					this.overlay_show =false
				}).catch((err)=>{
					this.overlay_show =false
				})
			},
			setting_yue() {
				uni.setStorageSync('money', this.money);
				this.ye_show = false
			},
			eye_close() {
				this.ye_show = false
			},
			
		}
	}
</script>

<style lang="scss">

</style>
