<template>
	<view class="content">
		<view class="sukiyou_naisd8fas9df">
			证件信息仅可更改一次，如上传错误请联系管理员修改
		</view>
		<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="6" multiple :maxCount="1"
			width="250" height="150">

			<u-icon name='photo' size="200"></u-icon>
			<text>点击上传身份证正面(国徽面)</text>
		</u-upload>
		<!-- <view class="sukiyou_baocun">
			<u-button text="保存" @click="upload_images1" type="success"></u-button>
		</view> -->
		<u-gap height="80"></u-gap>
		<u-upload :fileList="fileList2" @afterRead="afterRead2" @delete="deletePic" name="6" multiple :maxCount="1"
			width="250" height="150">
			<u-icon name='photo' size="200"></u-icon>
			<text>点击上传身份证反面(人像面)</text>
		</u-upload>

		<view class="sukiyou_baocun">
			<u-button text="保存" @click="upload_images1" type="success"></u-button>
		</view>


		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		save_card
	} from '@/config/api.js'
	export default {
		data() {
			return {
				fileList1: [],
				fileList2: [],
				upload_data: []
			};
		},
		methods: {
			afterRead(file, lists, name, e) {
				console.log(file, lists, name, e);
				this.fileList1 = file.file
			},
			afterRead2(file, lists, name, e) {
				console.log(file, lists, name, e);
				this.fileList2 = file.file
			},
			async upload_images1() {
				let send_data = []
				console.log(this.fileList1);
				if (this.fileList1.length > 0 && this.fileList2.length > 0) {
					await uni.$u.http.upload('/upload/', {
							filePath: this.fileList1[0].url, // 要上传文件资源的路径。
							name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
						}).then(res => {
							send_data.push(res[0])
							console.log("send_data1=>", send_data);
						}).catch(err => {
							console.log("err=>", err);
						})

					await uni.$u.http.upload('/upload/', {
							filePath: this.fileList2[0].url, // 要上传文件资源的路径。
							name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
						}).then(res => {
							send_data.push(res[0])
							console.log("send_data2=>", send_data);
						}).catch(err => {
							console.log("err=>", err);
						})
					
					console.log("send_data=>", send_data);
					this.upload_finish({
						value: send_data
					})

				} else {
					this.$refs.uToast.show({
						type: 'error',
						message: "证件信息不全",
					})
				}


			},
			upload_finish(e) {
				let user_info = uni.getStorageSync("login-info")
				console.log("e: ", e);
				console.log("user_info: ", user_info.username);
				save_card({
					username: user_info.username,
					img_list: e
				}).then((e) => {
					console.log("then=>", e);
					this.$refs.uToast.show({
						type: 'success',
						message: e[0],
						icon : false
					})
				}).catch((e) => {
					console.log("catch=>", e);
					this.$refs.uToast.show({
						type: 'success',
						message: 'i-104 数据更新失败，未知原因',
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 40rpx;
		margin: 0 auto;
	}

	.sukiyou_baocun {
		margin-top: 50rpx;
	}
	.sukiyou_naisd8fas9df{
		margin: 20rpx;
		padding: 20rpx;
		color: $uni-color-primary;
	}
</style>
