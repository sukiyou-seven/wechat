<template>
	<view>
		<u-cell-group :customStyle="{backgroundColor:'#fff'}">
			<u-cell title="实名认证状态":value="nickname.length < 1?'未设置':'已认证('+nickname+')'"></u-cell>
			<u-cell title="个人信息" :isLink="true" :value="user_info?'已完善':'未完善'" @click="jump()"></u-cell>
			<u-cell title="身份证照片" :isLink="true"  :value="login_info.idcard_z?'已上传':'待上传'"></u-cell>
		</u-cell-group>
		<u-gap height="20" bgColor=""></u-gap>
		<u-cell-group :customStyle="{backgroundColor:'#fff'}">
			<u-cell title="更换实名" :isLink="true"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login : false,
				login_info : '',
				user_info : "",
				nickname : ""
			};
		},
		methods:{
			jump(){
				uni.$u.route('pages/really_user/really_user', {
					show: true,
				});
			}
		},
		onShow() {
			try{
				this.login = uni.getStorageSync('login')
				this.login_info = uni.getStorageSync('login-info')
				this.user_info = uni.getStorageSync('really_data')
				console.log(this.user_info);
				this.user_info.forEach((e)=>{
					if(e.prefix == '姓名'){
						this.nickname = e.value
					}
				})
			}catch(e){
				//TODO handle the exception
				console.log(e);
			}
			
		}
	}
</script>

<style lang="scss">

</style>
<style>
	body{
		background-color: #f2f2f3;
	}
</style>
