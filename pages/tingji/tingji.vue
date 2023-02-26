<template>
	<view>
		<!-- 3cb371 -->
		<u-navbar title="" leftIcon="close" bgColor="#3cb371" placeholder :autoBack="true">
		</u-navbar>
		<!-- <view @click="test">
			设置测试数据
		</view> -->
		<view class="tops">
			<view class="tabs">
				<u-tabs :list="list1" @click="tabs_click" lineColor="#fff"
					:itemStyle="{color:'#fff',marginBottom:'20rpx'}" :activeStyle="{color: '#fff'}"
					:inactiveStyle="{color: '#9bdcb2'}" lineWidth="50"></u-tabs>
			</view>
			<view class="top-midle">
				<!-- 年月 -->
				<view class="times_" @click="choose_time(zd_show_time)" v-if="tab_current == 1">
					{{zd_show_time}}
					<u-icon name="arrow-down" size="12" top="0" color="#fff" :bold="true"></u-icon>
				</view>
				<!-- 年 -->
				<view class="times_" @click="choose_year(zd_show_year)" v-else>
					{{zd_show_year}}
					<u-icon name="arrow-down" size="12" top="0" color="#fff" :bold="true"></u-icon>
				</view>
				<view class="buttons">
					<view class="mar" :class="0==current?bb:''" @tap="inout_check(0,sukiyou_meiyong_001)">支出</view>
					<view class="mar" :class="1==current?bb:''" @tap="inout_check(1,sukiyou_meiyong_001)">收入</view>
					<view class="mar" :class="2==current?bb:''" @tap="inout_check(2,sukiyou_meiyong_001)">其他</view>
				</view>
			</view>
			<view class="top-bot">
				<view class="upss">
					共{{current==0?"支出":current==1?"收入":""}}
					{{current==0?num_out:current==1?num_in:""}}笔，合计
				</view>
				<view class="down"><text
						class="yang">￥</text>{{current==0?all_out:current==1?all_in:"0.00"}}
				</view>
			</view>
		</view>

		<view v-if="tab_current == 1">
			<view class="e-char">
				<view class="jzb">
					<view class="icon__">
						<u-icon name="red-packet-fill" size="13" color="#fff" top="2"></u-icon>
					</view>
					使用记账本,查看分类统计
				</view>
				<view class="sukiyou_159418615">
					{{current==0?"支出对比":current==1?"收入对比":""}}
				</view>
				<view v-if="current != 2">
					<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
				</view>
				<view class="wqt" v-else>
					<view class="sukiyou_a8y923w89tuifh">
						<u-icon name="order" size="40px" color="#909399"></u-icon>
					</view>
					无其他资金流转记录
				</view>
			</view>

			<view class="sukiyou_163q41rt3456">
				<view class="sukiyou_156489651">
					{{current==0?"支出排行榜":current==1?"收入排行榜":""}}
				</view>
				<view class="sukiyou_3894y93h4t89374h" v-for="(item1,index) in zd_list_bottom" :key="index">
					<!-- {{item1}} -->
					<view  class="sukiyou_1a6s51f65as4d1"
						>
						<view class="sukiyou_4a65sd4f1as615df165as">
							{{index}}
						</view>
						<view class="a56w4g6">
							<u-avatar :src="item1.avatarurl" size="30"></u-avatar>
						</view>
						<view class="a56sg415s">{{item1.nickname}}</view>
						<view class="sukiyou_1a6s5d1g65s">￥{{item1.price}} ></view>
					</view>
				</view>
			</view>
		</view>

		<view class="sukiyou_283hn2o9ui34th" v-else>
			<view >
				<view>
					{{current==0?"支出构成":current==1?"收入构成":""}}
				</view>
				<view class="sukiyou_2n4oj5n3uo4">
					<u-row customStyle="margin-bottom: 10px" 
					v-for="(item,index) in current==0?nzd.out:current==1?nzd.in:nzd.other" 
					:key="index">
						<u-col span="3">
							{{item.name}}
						</u-col>
						<u-col span="5">
							<view class="asdg145">
								<u-line-progress :percentage="item.percentage"
									:activeColor="item.color" height="8"
									:showText="false" v-if="!item.disabled">
								</u-line-progress>
							</view>
						</u-col>
						<u-col span="4">
							<view class="awrg1561">
								{{item.price}} >
							</view>

						</u-col>
					</u-row>
				</view>
			</view>
			<!-- <view class="wqt" v-else>
				<view class="sukiyou_a8y923w89tuifh">
					<u-icon name="order" size="40px" color="#909399"></u-icon>
				</view>
				无其他资金流转记录
			</view> -->
		</view>


		<u-popup :show="picker_show" @close="close" @open="open">
			<view>
				<u-datetime-picker :show="picker_show" v-model="picker_value" mode="year-month" :sukiyou_toolbar="true"
					@confirm="confirm" @cancel="cancel" :maxDate="Number(new Date())" :showToolbar="false">
				</u-datetime-picker>
			</view>
		</u-popup>

		<u-popup :show="year_picker_show" @close="close" @open="open">
			<view>
				1
				<u-datetime-picker :show="year_picker_show" v-model="year_picker_value" mode="year-month"
					:sukiyou_toolbar="true" :sukiyou_month="false" @confirm="confirm_year" @cancel="cancel"
					:maxDate="Number(new Date())" :showToolbar="false">
				</u-datetime-picker>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import tongji from '@/pages/tingji/tongji.js'
	export default tongji;
</script>

<style lang="scss" scoped>
	@import './tongji.css';
	.sukiyou_283hn2o9ui34th {
		font-size: 30rpx;
		padding: 40rpx;
	
		view {
			margin-top: 30rpx;
		}
	
		.sukiyou_2n4oj5n3uo4 {
			// display: flex;
			font-size: 26rpx;
			// align-items: flex-end;
	
	
			.asdg145 {
				margin-top: -28rpx;
			}
	
			// .as156dg {
			// 	width: 340rpx;
	
			// }
	
			.awrg1561 {
				font-weight: 800;
				display: flex;
				justify-content: flex-end;
				margin-top: 0;
				// width: 170rpx;
			}
		}
	
	
	
	}
	
	.wqt {
		font-size: 26rpx;
		color: #909399;
		margin: 0 auto;
		text-align: center;
	
		.sukiyou_a8y923w89tuifh {
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
		}
	
	}
	
	.e-char {
		border-radius: 20rpx;
		margin-top: -20rpx;
		background-color: #fff;
		padding: 30rpx;
	
		.jzb {
			font-size: 26rpx;
			background-color: #f4f4f5;
			padding: 30rpx 30rpx;
			color: #909399;
			border-radius: 20rpx;
			display: flex;
	
			.icon__ {
				background-color: #3cb371;
				height: 36rpx;
				width: 36rpx;
				border-radius: 36rpx;
				margin-right: 40rpx;
	
				.u-icon {
					margin-left: 6rpx;
				}
			}
		}
	
		.sukiyou_159418615 {
			margin-top: 20rpx;
			color: #000000;
			margin-left: 20rpx;
		}
	}
	
	.tops {
		background-color: #3cb371;
		height: 460rpx;
	
		.tabs {
			width: 300rpx;
			margin: 0 auto;
			padding-top: 30rpx;
		}
	
		.top-bot {
			padding: 40rpx 40rpx;
	
			.upss {
				color: #9bdcb2;
				font-size: 26rpx;
			}
	
			.down {
				color: #fff;
				font-size: 62rpx;
				font-weight: 1000;
	
				.yang {
					font-size: 42rpx;
					// justify-content: top;
				}
			}
		}
	
	}
	
	.top-midle {
		padding: 40rpx 40rpx;
		display: flex;
	
		.times_ {
			font-size: 32rpx;
			display: flex;
			font-weight: 600;
			color: #fff;
		}
	
		.buttons {
			display: flex;
			font-size: 24rpx;
			color: #9bdcb2;
			float: right;
			position: absolute;
			right: 40rpx;
	
			.border_ {
				border: 1px solid #fff;
				border-radius: 26rpx;
				color: #fff;
			}
	
			.mar {
				padding: 8rpx 20rpx;
				margin-left: 30rpx;
			}
		}
	
	}
	
	.sukiyou_163q41rt3456 {
		padding: 40rpx;
	
		.sukiyou_156489651 {
			margin-top: 20rpx;
			color: #000000;
			margin-left: 20rpx;
			font-size: 30rpx;
			margin-bottom: 40rpx;
		}
	
		.sukiyou_3894y93h4t89374h {
			// display: flex;
			color: #2f2f2f;
			font-size: 28rpx;
	
			.sukiyou_1a6s51f65as4d1 {
				display: flex;
				margin-bottom: 40rpx;
	
				.sukiyou_4a65sd4f1as615df165as {
					margin-right: 20rpx;
					// margin-top: 10rpx;
				}
	
				.a56w4g6 {
					margin-right: 30rpx;
					margin-top: -10rpx;
				}
	
				.a56sg415s {}
	
				.sukiyou_1a6s5d1g65s {
					float: right;
					position: absolute;
					right: 40rpx;
					font-weight: 600;
	
				}
			}
	
		}
	}
	
</style>
