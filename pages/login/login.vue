<template>
	<view class="content_">
		<u--input placeholder="请输入用户名" border="surround" v-model="username"></u--input>
		<u--input placeholder="请输入密码" border="surround" v-model="password"type="password" ></u--input>

		<u-button type="primary" :plain="true" text="登录" @click="login"></u-button>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		login_
	} from "@/config/api.js"
	export default {
		data() {
			return {
				username: "",
				password: ""
			};
		},
		methods: {
			login() {
				login_({
					username: this.username,
					password: this.password
				}).then((e) => {
					console.log(e);
					uni.setStorageSync("login", true)
					uni.setStorageSync("login-info", e)
					
					this.$refs.uToast.show({
						type: 'success',
						icon: false,
						message: "登录成功,正在为您跳转...",
						complete(){
							uni.$u.route({
								url:'pages/index/index',
								type:'tab'
							})
						}
					})
				}).catch((e) => {

					this.$refs.uToast.show({
						type: 'error',
						icon: false,
						title: '失败主题',
						message: "用户名或密码错误",
					})

				})
			},
		}
	}
</script>

<style lang="scss">
	.content_ {
		padding: 40rpx;
		margin: 40rpx;

		.u-input {
			margin-top: 40rpx;
		}

		.u-button {
			margin-top: 40rpx;
		}

	}
</style>
