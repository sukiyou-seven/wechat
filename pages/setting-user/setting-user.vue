<template>
	<view class="content">
		<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" :maxCount="10"></u-upload>
		<u-gap height="30"></u-gap>
		<u-avatar :src="src" size="60"></u-avatar>
		<u-gap height="30"></u-gap>
		<u--input placeholder="请输入昵称" border="surround" v-model="value" @change="change"></u--input>
		<u-gap height="30"></u-gap>

		<u-button type="success" :plain="true" text="保存" @click="save"></u-button>


		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "",
				value: ""
			}
		},
		methods: {
			afterRead(file, lists, name) {
				console.log(file, lists, name);
				this.src = file.file.url
			},
			save() {
				try {
					uni.setStorageSync('nickname', this.value);
					uni.setStorageSync('avatarurl', this.src);

					this.$refs.uToast.show({
						type: 'success',
						title: '默认主题',
						message: "保存成功！请自行返回查看",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
					})
				} catch (e) {
					// error
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 40rpx 60rpx;
	}
</style>
