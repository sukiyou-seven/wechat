<template>
	<view>
		<u-navbar title="微信" @rightClick="rightClick" leftIcon="" 
		bgColor="#f4f4f5" rightIcon="plus-circle" placeholder
		:titleStyle="{fontWeight:'900'}">
		</u-navbar>
		<view class="search"  @click="search_">
			<u-icon name="search" size="26" @click="search_"></u-icon>
		</view>
		<view class="content" v-for="(item,index) in user_info_list" :key="index" @click="chat_info(item)">
			<view class="message">
				<view class="avatar">
					<u-avatar :src="item.avatar_url" shape="square" size="44"></u-avatar>
				</view>
				<view class="info">
					<view class="name">{{item.nickname}}
					</view>
					<view class="cm">
					<text class="u-line-1">{{item.content}}</text>
					</view>
					<view class="times_">{{item.times}}
					</view>
				</view>
			</view>
		</view>


		<u-overlay :show="popup_show" @click="popup_show = false" :opacity="0">
			<view class="warp">
				<view class="pop-right" @tap.stop>
					<u--image src="/static/yousj.jpg" width="300rpx" height="480rpx" :lazyLoad="false" mode="aspectFit">
					</u--image>
				</view>
			</view>
		</u-overlay>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				popup_show: false,
				user_info_list :[
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "[图片问题和我让他和无任何问题和]",
						times : "12:22"
					},
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "[图片说的话问题如何文化]",
						times : "12:22"
					},
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "[图片巴尔干上的人敢死队风格 ]",
						times : "12:22"
					},
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "[图片arsgqerah]",
						times : "12:22"
					},
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "问题就后而一九无任何二号身体还是让他回家认为",
						times : "12:22"
					},
					{	avatar_url:"http://e.rubyonly.cn/img/sz_02.jpg",
						nickname:"八重神子",
						content: "苦痛i例如亚尔皇家外科日语考级啊额体育课认同一位让他就",
						times : "12:22"
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			rightClick() {
				this.popup_show = true
			},
			popup_close() {
				this.popup_show = false
			},
			popup_open() {},
			chat_info(e){
				uni.$u.route({
					url : "pages/chat_info/chat_info",
					params : e
				})
			},
			search_(){
				uni.$u.route({
					url:"pages/search/search"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx 30rpx;
		font-size: 32rpx;
		.message{
			display: flex;
			.avatar{
				
			}
			.info{
				border: thin;
				border-bottom:  1px solid #f0f0f0;
				width: 100%;
				margin-left: 20rpx;
				padding-bottom: 20rpx;
				
				.name{
					font-weight: 800;
					margin-top: 6rpx;
				}
				.cm{
					margin-top: 10rpx;
					color: #979ba2;
					font-size: 28rpx;
					width: 80%;
				}
				.times_{
					color: #979ba2;
					font-size: 24rpx;
					float: right;
					position: absolute;
					right: 30rpx;
					margin-top: -86rpx;
				}
			}
		}
	}
	.pop-right {
		float: right;
		right: 10rpx;
		position: fixed;
		top: 140rpx;

		.itemsss_ss {
			display: flex;
			width: 100%;

			.left__ {
				margin-left: 20rpx;
				width: 240rpx;
			}

			.addhy {
				float: left;
				// position: absolute;
				top: -10rpx;
			}
		}

		.bor {
			border-bottom: 1px solid #4b4d51;
		}

		.wenzi {
			margin: 0 0 26rpx 0;
			padding: 0 0 26rpx 0;
		}
	}

	.search {
		float: right;
		position: fixed;
		right: 88rpx;
		top: 88rpx;
		z-index: 9999999;
		.u-icon{
			z-index: 10072;
		}
	}
</style>
