<template>
	<view>
		<u-navbar title="微信" @rightClick="rightClick" leftIcon="" bgColor="#f4f4f5" rightIcon="plus-circle" placeholder
			:titleStyle="{fontWeight:'900'}">
		</u-navbar>
		<view class="search" @click="search_">
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
				user_info_list: [{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "[图片问题和我让他和无任何问题和]",
						times: "12:22"
					},
					{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "[图片说的话问题如何文化]",
						times: "12:22"
					},
					{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "[图片巴尔干上的人敢死队风格 ]",
						times: "12:22"
					},
					{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "[图片arsgqerah]",
						times: "12:22"
					},
					{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "问题就后而一九无任何二号身体还是让他回家认为",
						times: "12:22"
					},
					{
						avatar_url: "http://e.rubyonly.cn/img/sz_02.jpg",
						nickname: "八重神子",
						content: "苦痛i例如亚尔皇家外科日语考级啊额体育课认同一位让他就",
						times: "12:22"
					}
				]

			}
		},
		onLoad() {
this.genName()
		},
		onShow() {
			
		},
		methods: {
			rightClick() {
				this.popup_show = true
			},
			popup_close() {
				this.popup_show = false
			},
			popup_open() {},
			chat_info(e) {
				uni.$u.route({
					url: "pages/chat_info/chat_info",
					params: e
				})
			},
			search_() {
				uni.$u.route({
					url: "pages/search/search"
				})
			},
			genName() {
				var dirname = __dirname;
				var nickname00 = "忆亦何为 \
雪菲俏天使 \
暗里迷 \
乀最美的姿态 \
甜心♀莼莼 \
凌云児 \
坠落天使 \
柳叶眉霓裳影 \
物是人非 \
雪晴 \
在线对其隐身 \
我一口盐汽水喷死你i \
凌末″ \
忧梦 \
依福 \
落雨 \
咖啡兔\
侞寞 \
欲江゛ \
冰冻 \
质月 \
易绾 \
失艺 \
爱爱尔兰。 \
福寳 \
兔伪娘 \
莫感 \
小新 \
武萌 \
花蜂 \
雪薇 \
韶倾\
鲜花 \
姐的拽你不懂 \
梦\
姐后 \
花飘 \
回世喧 \
陌人\
凉瑾言 \
我爱零食，脂肪爱我。 \
语爆\
别再恨我了。 \
若离枝 \
汐颜 \
情伤\
s开 \
散场的拥抱 \
大黄鸭 \
数到三变暖男 \
娃娃 \
穆依依丶 \
麦兜没有兜 \
ζ凉蜜 \
蓝芯 \
夏夜微凉゛≈ \
瑶芦冉 \
如花如画 \
等待圉湢! \
范二童年 \
沫悲伤 \
是他让我 \
离沐倾城 \
郁隐汐 \
只 \
望 \
美的以往 \
绚烂 \
素月依人 \
小灰灰 \
梦二姨 \
茉莉蜜茶ヾ \
二姨 \
-炫耀伱の羙 \
_______铅笔画° \
素裙舞无邪 \
香芋巧克力 \
暧昧。In \
☆紫轩冰凌★ \
゛綄镁の恋 \
为爱成风 \
纸二姨蝶 \
所谓伊人俏丶 \
女人如水て \
s二姨 \
夏末べ_凄兮 \
二姨\
迷 \
baby丶莹 \
紫陌红尘 \
莫筱夜 \
ˉ以往的最美 \
你的身材有料吗 \
莪疯勒︶ㄣ \
李哥 \
清莲静 \
李哥 \
微笑释怀 \
清新的蜜蝶 \
浮生ヽ伿为蓝颜笑 \
李哥\
奠爱祭嫣然 \
星月琉璃裳 \
瞬间的永恒丶 \
嫣然一笑搏君赞 \
短发女人。 \
莣忧dě浮云 \
杯具中丶 \
黑色西装白色领结 \
飘丶灬莎莎 \
刘瑶 \
茗花冇宔 \
你的心里有谁 \
赵雪梅 \
对阳光丶微笑 \
╰Qan钱。 \
我是全球限量版 \
似冷非寒ヽ冰 \
李丽 \
张磊 \
浮浅Superficial° \
飞扬鬼依 \
蓝瞳沫╰ \
美国超人有裤衩 \
透明的心 \
犹记蒹葭 \
赵家与 \
◇╮书呆小修女 \
迷糊de糖糖 \
染情沫 \
╮xin念果 \
王旭 \
超人无话可说 \
凉烟 \
王诺但 \
李青 \
鹿尼酱！ \
李易峰。 \
赵信 \
ざ?麻子 \
二娃 \
朝暮丶 \
紫♀罗☆兰 \
一曲琉璃 \
我以为的遗忘 \
灰色小懒懒 \
小希。 \
所爱非良人 \
张勋 \
冷若冰霜 \
浪漫的音符 \
下页曦颜 \
-可不能够不淑女° \
╅緈諨dē味噵 \
吹花送远香 \
蓬蓬裙 \
刘邦从 \
９０後旳忧傷 \
请叫我艾筱菲。 \
不离不弃不分别 \
〃莣忧草ぐ \
沦陷的痛 \
有涙亦有笑 \
〆歇斯底里。 \
~浪漫☆樱花~ \
中国悟空有短裙 \
李亚兰 \
无言的结局 \
阳光护著你丶心 \
我爱你三个字 \
花初开 \
风清颜 \
凝露枯藤 \
蝶舞^ō^清风 \
许一世珍爱 \
冷月葬花魂 \
刘明远 \
素雪怜影 \
素手年华 \
小小的梦想 \
小熊饼干 \
夜舞清吟 \
谁是谁的谁 \
厮守 \
会飞的鱼 \
瑶紫芯丶 \
可爱娃娃 \
叫嚣 \
半呆半慧半抚媚 \
涨停 \
活力海浪 \
离骚 \
丿潜规则` \
兜兜里有糖 \
冰之恋女 \
卡布奇诺 \
ら花舞花落泪 \
泡沫荭茶 \
李倩 \
樱蓝冰梦 \
优游儛丝 \
单身萌妞惹人爱 \
花开为谁泣 \
张勋图 \
张望元 \
泛滥的暧昧 \
素染夏凉 \
雪吟 \
幽幽紫月儿 \
颜渃兮° \
自杀 \
张留的费用 \
花落蝶飞朝朝 \
小馒头。 \
狠狠撕心裂肺 \
王大学 \
刘邦里 \
细雨斜阳愁 \
桃花依旧笑春风 \
只爱陌生人 \
牛奶咖啡 \
相貌决定⒈切 \
埖的嫁纱 \
泪冰清 \
比你贱 \
冬朽ι \
王晓芬 \
王学 \
妈↘祂亲峩 \
王思琪 \
乐小米 \
涵孤傲 \
水灵灵 \
夏末伤 \
绝版公主 \
王大乐 \
ζ黒涩兲箜 \
洗洗睡吧# \
哈萨克两个 \
颐惜风雨雪 \
别来炁恙 \
紫梦馨儿 \
刺刺刺刺刺骨丶 \
茶沐依 \
朝花夕拾 \
hua \
李东 \
╭ゝ野゛魅舞セ╮ \
最终的结局 \
张东 \
媚舞々鬼依 \
紫高傲 \
望眼欲穿 \
南河客户 \
恋~音乐的公主 \
嘟着丶小嘴卖萌 \
情窦初开 \
染脂红颜泪 \
老城客户 \
碎花洋裙 \
漫天尘埃中的微笑 \
白痴萌物^ \
年的'矿泉水不好ci \
淡然いで微笑 \
右手边的我 \
永釺手♀影 \
没情绪〃 \
东坝客户 \
秋影月 \
花小雅ヾ \
李达 \
那些不懂的错 \
℡安小美 \
半俗半雅半疯颠 \
浏阳其 \
苛嗳の棉花糖 \
丝丝甜甜 \
伴夜看椛逝 \
张磊 \
张雷 \
冰蓝的寒冰 \
成全爱 \
V紫℡铃铛 \
张琪罗 \
Nananana~ \
张董 \
冰淇淋的夏天 \
李总 \
〈还爱吗 \
青衣素髻 \
物流王总 \
雪花烂漫时 \
物流小苏 \
一点都不酷＾ \
狠耐狠耐哟丶 \
多啦B梦 \
雨点哇哇 \
物流李哥 \
廊桥遗梦 \
慕雩婷丶 \
悲傷與被傷 \
指缝间刺眼旳阳光 \
政府王哥 \
红舞鞋 \
血色彼岸花╮ \
何必执着 \
为何要爱丶 \
幻冰忆雪 \
 政府李哥 \
兔儿神是伪娘 \
月朦胧 \
别对我假惺惺 \
我是一个笨小孩。 \
开始的开始我们都是孩子 \
回忆凌乱了吗 \
感情骗子滚蛋っ \
分钟的热度 \
政府小叶 \
倾叶 \
群阳 \
锦苏 \
嘻哈 \
不夜雪 \
君琴 \
织云 \
懒懒 \
君紫雨泪 \
莲芯 \
性感不是骚 \
M嫣儿 \
市姑娘 \
玄紫 \
有咦 \
陌谣 \
村丽 \
思維在裸奔 \
雅涵 \
我爱到，痛了 \
姐，就是如此完美 \
ShHo苏荷 \
招牌式微笑 \
琪牵手 \
雪儿 \
的塞纳河 \
安于现状 \
歌岛礼弥 \
青色记事 \
莎白 \
消泡泡 \
红叶初雨 \
明眸绕指柔 \
凝芸冰澜 \
张琪 \
逗你玩 \
天真。 \
小布叮~ \
李晓明 \
柏林的雪花飘 \
柯南君▲ \
你怎样酱紫 \
六大徐 \
心只为你动 \
美的家电王 \
格力空调李 \
想の恋ざ冻结 \
空调 \
王小呆 \
像个母亲 \
陪你看细水长流` \
小黑 \
完美邂逅 \
原唱KTV \
班里①枝婲 \
KTV女子 \
世界在喧闹什么 \
有声默片 \
兰韵犹芳 \
本宫。已打烊 \
懵懵懂懂大人 \
旋转回忆 \
下一秒天使 \
卖姑娘的小女孩 \
李兄 \
琉璃雪 \
樊红梅 \
王东莞 \
Ta-欣 \
馨怡桃 \
张磊2 \
张磊 \
Angel紫 \
李红 \
可爱￥雪琪 \
旋的女人 \
刘红梅 \
张曼 \
公主小妹 \
德邦快递 \
伊小羙 \
左岸·流年 \
物流张军 \
物流刘洋 \
物流李丽 \
标本╥ \
广元东坝 \
ゞ为倪じ★ve \
等下│个天亮 \
旧梦滥心 \
D调dě浪漫 \
B型‘ \
如风若梦 \
芙雪宝贝 \
明天见 \
王兄弟 \
王哥 \
装修 \
物流老板 \
苍溪李姐 \
比亚迪 王 \
百度公司-涨停 \
POS机器小李 \
奥迪4S \
安娜酒店东坝 \
赵家强 \
长虹房地产 \
亮剑屏幕 \
王琦亏 \
酒吧张文 \
婚庆公司 \
我只是个孩子 \
婚纱老板 \
张教练 \
房地产小王 \
银行小马 \
A基地客户 \
酒店前台 \
我是ぬ菇凉 \
一千年前的少女 \
№┡伊丽 \
罪恶感℅ \
×××痕 \
叶落归根 \
爱你只爱你° \
迷恋尔旳笑脸° \
雨菲夜思君 \
风吹辫辫飘 \
姐丶万人追捧 \
ヾ痛訫。 \
初遇与他 \
南河酒店 \
明天 \
不要迷恋姐 \
贝壳里的公主 \
下西建材 \
家具老板 \
舞阳岚裳 \
广元客户 \
想想还是幼儿园好混 \
泪wo落花 \
声色倾城 \
♂戴依~月雅♂ \
客户 \
※凄凉。 \
Tlove \
Angel涵 \
梦飞蝶幻 \
冷弦樱女 \
萌战必胜 \
Mermaid \
二姨夫 \
超有爱。 \
世界末日ヽ \
北极づ莜蓝 \
现实太煽情ヽ \
弑魂姐◎ \
雪子#莹宝 \
永釺手♀明 \
╯以往单纯过 \
薄荷☆糖糖 \
素质㈠ \
无名指的等待 \
青苹果i \
梦幻馨缘§ \
粉色风雨草 \
鹿晗收回你掉了的下巴° \
伴夜看椛落 \
甜蜜tian夜 \
汐黛 \
雪仒（e）儿 \
蝴蝶雪 \
抚半世妖娆 \
ヤ℡炫丽人生〃 \
吃货女人° \
大爸 \
幸福的摩天轮 \
没有星星的夜裏 \
偌伊怡 \
水晶の恋 "
				//把换行的都全局替换成空格，然后按空格分割为数组
				// var rn00 = nickname00.replace(/\r\n/g," ");
				var nameArr00 = nickname00.split(' ');

				let nickNameArr = [].concat(nameArr00);

				let avatar_url_list_default = [
					"/static/tx/IMG_0001.JPG",
					"/static/tx/IMG_0002.JPG",
					"/static/tx/IMG_0003.JPG",
					"/static/tx/IMG_0004.JPG",
					"/static/tx/IMG_0005.JPG",
					"/static/tx/IMG_0006.JPG",
					"/static/tx/IMG_0007.JPG",
					"/static/tx/IMG_0008.JPG",
					"/static/tx/IMG_0009.JPG",
					"/static/tx/IMG_0010.JPG",
					"/static/tx/IMG_0011.JPG",
					"/static/tx/IMG_0012.JPG",
					"/static/tx/IMG_0013.JPG",
					"/static/tx/IMG_0014.JPG",
					"/static/tx/IMG_0015.JPG",
					"/static/tx/IMG_0016.JPG",
					"/static/tx/IMG_0017.JPG",
					"/static/tx/IMG_0018.JPG",
					"/static/tx/IMG_0019.JPG",
					"/static/tx/IMG_0020.JPG",
					"/static/tx/IMG_0021.JPG",
					"/static/tx/IMG_0022.JPG",
					"/static/tx/IMG_0023.JPG",
					"/static/tx/IMG_0024.JPG",
					"/static/tx/IMG_0025.JPG",
					"/static/tx/IMG_0026.JPG",
					"/static/tx/IMG_0027.JPG",
					"/static/tx/IMG_0028.JPG",
					"/static/tx/IMG_0029.JPG",
					"/static/tx/IMG_0030.JPG",
					"/static/tx/IMG_0031.JPG",
					"/static/tx/IMG_0032.JPG",
					"/static/tx/IMG_0033.JPG",
					"/static/tx/IMG_0034.JPG",
					"/static/tx/IMG_0035.JPG",
					"/static/tx/IMG_0036.JPG",
					"/static/tx/IMG_0037.JPG",
					"/static/tx/IMG_0038.JPG",
					"/static/tx/IMG_0039.JPG",
					"/static/tx/IMG_0040.JPG",
					"/static/tx/IMG_0041.JPG",
					"/static/tx/IMG_0042.JPG",
					"/static/tx/IMG_0043.JPG",
					"/static/tx/IMG_0044.JPG",
					"/static/tx/IMG_0045.JPG",
					"/static/tx/IMG_0046.JPG",
					"/static/tx/IMG_0047.JPG",
					"/static/tx/IMG_0048.JPG",
					"/static/tx/IMG_0049.JPG",
					"/static/tx/IMG_0050.JPG",
					"/static/tx/IMG_0051.JPG",
					"/static/tx/IMG_0052.JPG",
					"/static/tx/IMG_0053.JPG",
					"/static/tx/IMG_0054.JPG",
					"/static/tx/IMG_0055.JPG",
					"/static/tx/IMG_0056.JPG",
					"/static/tx/IMG_0057.JPG",
					"/static/tx/IMG_0058.JPG",
					"/static/tx/IMG_0059.JPG",
					"/static/tx/IMG_0060.JPG",
					"/static/tx/IMG_0061.JPG",
					"/static/tx/IMG_0062.JPG",
					"/static/tx/IMG_0063.JPG",
					"/static/tx/IMG_0064.JPG",
					"/static/tx/IMG_0065.JPG",
					"/static/tx/IMG_0066.JPG",
					"/static/tx/IMG_0067.JPG",
					"/static/tx/IMG_0068.JPG",
					"/static/tx/IMG_0069.JPG",
					"/static/tx/IMG_0070.JPG",
					"/static/tx/IMG_0071.JPG",
					"/static/tx/IMG_0072.JPG",
					"/static/tx/IMG_0073.JPG",
					"/static/tx/IMG_0074.JPG",
					"/static/tx/IMG_0075.JPG",
					"/static/tx/IMG_0076.JPG",
					"/static/tx/IMG_0077.JPG",
					"/static/tx/IMG_0078.JPG",
					"/static/tx/IMG_0079.JPG",
					"/static/tx/IMG_0080.JPG",
					"/static/tx/IMG_0081.JPG",
					"/static/tx/IMG_0082.JPG",
					"/static/tx/IMG_0083.JPG",
					"/static/tx/IMG_0084.JPG",
					"/static/tx/IMG_0085.JPG",
					"/static/tx/IMG_0086.JPG",
					"/static/tx/IMG_0087.JPG",
					"/static/tx/IMG_0088.JPG",
					"/static/tx/IMG_0089.JPG",
					"/static/tx/IMG_0090.JPG",
					"/static/tx/IMG_0091.JPG",
					"/static/tx/IMG_0092.JPG"
				]


				this.itemArr = [
					[]
				]
				
				this.user_info_list=[]
				this.user_info_list.push({
					avatar_url: "/static/tx/1wer651t5e6r.jpg",
					nickname: "四川电信",
					content: "充值成功提醒",
					times: "06:28"
				},{
					avatar_url: "/static/tx/15e6wr1fg5.jpg",
					nickname: "文件传输助手",
					content: "[图片]",
					times: "10:54"
				},{
					avatar_url: "/static/tx/as5d4f618w.jpg",
					nickname: "腾讯手机充值",
					content: "充值成功通知",
					times: "10:54"
				}
				)
				for (let i = 0; i <= 30; i++) {
					var name = "";
					let avatar = ""
					let contents = ""
					var len = nickNameArr.length;
					var len2 = avatar_url_list_default.length;

					if (len > 0) {
						var pos = Math.floor(Math.random() * len);
						if (len2 > 0) {
							var pos2 = Math.floor(Math.random() * len2);
							avatar = avatar_url_list_default[pos2]
							console.log(pos2, avatar);
						}
						var pos2 = Math.floor(Math.random() * len);
						name = nickNameArr[pos];
						contents = nickNameArr[pos2] + "_";

						if (name.length == 0) { //防止拿到空白值，正常情况不会出现
							genName();
						}
						// this.itemArr[0].push({
						// 	"name": name,
						// 	"avatar": avatar
						// })
						this.user_info_list.push({
							avatar_url: avatar,
							nickname: name,
							content: contents,
							times: "12:22"
						})
					}


				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx 30rpx;
		font-size: 32rpx;

		.message {
			display: flex;

			.avatar {}

			.info {
				border: thin;
				border-bottom: 1px solid #f0f0f0;
				width: 100%;
				margin-left: 20rpx;
				padding-bottom: 20rpx;

				.name {
					font-weight: 800;
					margin-top: 6rpx;
				}

				.cm {
					margin-top: 10rpx;
					color: #979ba2;
					font-size: 28rpx;
					width: 80%;
				}

				.times_ {
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

		.u-icon {
			z-index: 10072;
		}
	}
</style>
