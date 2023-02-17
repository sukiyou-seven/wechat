<template>
	<view>
		<u-navbar title="通讯录" @rightClick="rightClick" leftIcon="" bgColor="#f4f4f5" rightIcon="plus-circle" placeholder
			:titleStyle="{fontWeight:'900'}">
		</u-navbar>
		<view class="search" @click="search_">
			<u-icon name="search" size="26" @click="search_"></u-icon>
		</view>

		<view>
			
			<u-index-list :index-list="indexList"  :sticky="false" >
				<template v-for="(item, index) in itemArr" :key-="index">
					<view class="list-cell" v-for="(cell, index) in os_list" :key="index">
						<u-avatar :src="cell.avatar" size="40" shape="square"></u-avatar>
						<text>{{cell.name}}</text>
					</view>
					<u-index-item >
						<u-index-anchor :text="indexList[index]"></u-index-anchor>
						<view class="list-cell" v-for="(cell, index2) in item" :key="index2">
							<u-avatar :src="cell.avatar" size="40" shape="square"></u-avatar>
							<text>{{cell.name}}</text>
						</view>
					</u-index-item>
				</template>
			</u-index-list>
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
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U", "V", "W", "X", "Y", "Z", "#"
				],
				itemArr: [
					[],
				],
				os_list:[
					{"avatar":"/static/xpy.png","name":"新的朋友"},
					{"avatar":"/static/ql.png","name":"群聊"},
					{"avatar":"/static/bq.png","name":"标签"},
					{"avatar":"/static/gzh.png","name":"公众号"},
				]
			}
		},
		methods: {
			rightClick() {
				this.popup_show = true
			},
			popup_close() {
				this.popup_show = false
			},
			search_() {
				uni.$u.route({
					url: "pages/search/search"
				})
			},
			avatar_list___() {
				// 生成头像数组
				const avatar_list = []

			},
			genName() {
				var dirname = __dirname;
				var nickname00 = "AAA忆亦何为 AAA\
雪菲俏天使 AAA\
暗里迷 AAA\
乀最美的姿态 AAA\
甜心♀莼莼 AAA\
凌云児 AAA\
坠落天使 AAA\
柳叶眉霓裳影 AAA\
物是人非 AAA\
雪晴 AAA\
在线对其隐身 AAA\
我一口盐汽水喷死你i AAA\
ゼ凌末语″ AAA\
忧蓝·似残梦 AAA\
依旧幸福 AAA\
落樱听雨 AAA\
№咖啡+兔★ AAA\
夜侞茈漃寞 AAA\
欲揽西江月゛ AAA\
冰冻Wo心 AAA\
性质很恶劣 AAA\
╮xin念月 AAA\
盘花易绾 AAA\
yi个人ゝ失艺 AAA\
俄爱爱尔兰。 AAA\
緈福℃乔寳 AAA\
兔儿神是伪娘 AAA\
莫名的好感。 AAA\
蜡笔小新的眉毛，吼吼~ AAA\
武林萌主Eunice·FHM* AAA\
闻花儿的蜜蜂 AAA\
紫雪蜜薇 AAA\
韶华倾负 AAA\
鲜花，鲜花 AAA\
姐的拽你不懂 AAA\
梦中C AAA\
姐只是个传说 AAA\
白雪与母后 AAA\
花落已飘 AAA\
回眸望尽盛世喧 AAA\
陌人╮ AAA\
凉秋瑾言 AAA\
我爱零食，脂肪爱我。 AAA\
゛语Er美到爆づ AAA\
别再恨我了。 AAA\
若离枝 AAA\
汐颜舞丫 AAA\
情伤ㄥ离人语づ AAA\
s开 AAA\
散场的拥抱 AAA\
大黄鸭 AAA\
数到三变暖男i AAA\
芭Bǐ♂娃娃 AAA\
穆依依丶 AAA\
麦兜没有兜 AAA\
ζ°凉蜜 AAA\
蓝芯 AAA\
夏夜微凉゛≈ AAA\
瑶芦冉 AAA\
如花如画 AAA\
等待圉湢! AAA\
范二童年 AAA\
安夏。沫悲伤 AAA\
是他让我 AAA\
离沐倾城 AAA\
郁隐汐 AAA\
只会无理取闹づ AAA\
望我尽快喝孟婆汤，忘了你 AAA\
ˉ最美的以往 AAA\
绚烂 AAA\
素月依人 AAA\
小灰灰的天真nl学不来° AAA\
梦幻馨缘 AAA\
茉莉蜜茶ヾ AAA\
莪卜是很脆弱 AAA\
-炫耀伱の羙 AAA\
_______铅笔画° AAA\
素裙舞无邪 AAA\
香芋巧克力 AAA\
暧昧。In AAA\
☆紫轩冰凌★ AAA\
゛綄镁の恋 AAA\
为爱成风 AAA\
纸欣梦幻蝶 AAA\
所谓伊人俏丶 AAA\
女人如水て AAA\
single丶染瞳 AAA\
夏末べ_凄兮 AAA\
你会在我心里住好久° AAA\
迷 AAA\
baby丶莹 AAA\
紫陌红尘 AAA\
莫筱夜 AAA\
ˉ以往的最美 AAA\
你的身材有料吗 AAA\
莪疯勒︶ㄣ AAA\
不美不靓不温柔 AAA\
清莲静 AAA\
☆贱SaRS AAA\
微笑释怀 AAA\
清新的蜜蝶 AAA\
浮生ヽ伿为蓝颜笑 AAA\
冰琦雪恋 AAA\
奠爱祭嫣然 AAA\
星月琉璃裳 AAA\
瞬间的永恒丶 AAA\
嫣然一笑搏君赞 AAA\
短发女人。 AAA\
莣忧dě浮云 AAA\
杯具中丶 AAA\
黑色西装白色领结 AAA\
飘丶灬莎莎 AAA\
〈Don‘t开玩笑〉 AAA\
茗花冇宔 AAA\
你的心里有谁 AAA\
秋水雾杳无韵 AAA\
对阳光丶微笑 AAA\
╰Qan钱。 AAA\
我是全球限量版 AAA\
似冷非寒ヽ冰 AAA\
夏天の微笑 AAA\
穿碎花洋裙的樱桃小丸子 AAA\
浮浅Superficial° AAA\
飞扬鬼依 AAA\
蓝瞳沫╰ AAA\
美国超人有裤衩 AAA\
透明的心 AAA\
犹记蒹葭 AAA\
夏天弃了西瓜爱空调 AAA\
◇╮书呆小修女 AAA\
迷糊de糖糖 AAA\
染情沫 AAA\
╮xin念果 AAA\
乄溦氺dê儛步 AAA\
超人无话可说 AAA\
凉烟 AAA\
记忆de承渃↘ AAA\
爱哭de小魔女 AAA\
鹿尼酱！ AAA\
李易峰。 AAA\
謃空de泪痕 AAA\
ざ?麻子 AAA\
こ小小的心，有大大的爱 AAA\
朝暮丶 AAA\
紫♀罗☆兰 AAA\
一曲琉璃 AAA\
我以为的遗忘 AAA\
灰色小懒懒 AAA\
小希。 AAA\
所爱非良人 AAA\
嗳荞の芭芘 AAA\
冷若冰霜 AAA\
浪漫的音符 AAA\
下页曦颜 AAA\
-可不能够不淑女° AAA\
╅緈諨dē味噵 AAA\
吹花送远香 AAA\
蓬蓬裙 AAA\
樱空之雪只为今生 AAA\
９０後旳忧傷 AAA\
请叫我艾筱菲。 AAA\
不离不弃不分别 AAA\
〃莣忧草ぐ AAA\
沦陷的痛 AAA\
有涙亦有笑 AAA\
〆歇斯底里。 AAA\
~浪漫☆樱花~ AAA\
中国悟空有短裙 AAA\
不男不女的人你会爱上他不 AAA\
无言的结局 AAA\
阳光护著你丶心 AAA\
我爱你三个字 AAA\
花初开 AAA\
风清颜 AAA\
凝露枯藤 AAA\
蝶舞^ō^清风 AAA\
许一世珍爱 AAA\
冷月葬花魂 AAA\
丢失了幸福 AAA\
素雪怜影 AAA\
素手年华 AAA\
小小的梦想 AAA\
小熊饼干 AAA\
夜舞清吟 AAA\
谁是谁的谁 AAA\
厮守 AAA\
会飞的鱼 AAA\
瑶紫芯丶 AAA\
可爱娃娃 AAA\
叫嚣 AAA\
半呆半慧半抚媚 AAA\
动感光波，bbbb-- AAA\
活力海浪 AAA\
离骚 AAA\
丿潜规则` AAA\
兜兜里有糖 AAA\
冰之恋女 AAA\
卡布奇诺 AAA\
ら花舞花落泪 AAA\
泡沫荭茶 AAA\
终点↙々暧昧☆ AAA\
樱蓝冰梦 AAA\
优游儛丝 AAA\
单身萌妞惹人爱 AAA\
花开为谁泣 AAA\
◇陌秋漓︷° AAA\
°最心疼的玩笑 AAA\
泛滥的暧昧 AAA\
素染夏凉 AAA\
雪吟 AAA\
幽幽紫月儿 AAA\
颜渃兮° AAA\
自杀 AAA\
小新二代蜡笔● AAA\
花落蝶飞朝朝 AAA\
小馒头。 AAA\
狠狠撕心裂肺 AAA\
♀雪星¤梦缘 AAA\
旧时光她是个美人° AAA\
细雨斜阳愁 AAA\
桃花依旧笑春风 AAA\
只爱陌生人 AAA\
牛奶咖啡 AAA\
相貌决定⒈切 AAA\
埖的嫁纱 AAA\
泪冰清 AAA\
比你贱 AAA\
冬朽ι AAA\
悠悠为何放下治疗。 AAA\
*~叮譡~* AAA\
妈↘祂亲峩 AAA\
╰幽蓝成伤 AAA\
乐小米 AAA\
涵孤傲 AAA\
水灵灵 AAA\
夏末伤 AAA\
绝版公主 AAA\
単吨⒐⒋孤独 AAA\
ζ黒涩兲箜 AAA\
洗洗睡吧# AAA\
”那些年丶莪们都狠快楽 AAA\
颐惜风雨雪 AAA\
别来炁恙 AAA\
紫梦馨儿 AAA\
刺刺刺刺刺骨丶 AAA\
茶沐依 AAA\
朝花夕拾 AAA\
hua AAA\
比卡丘♂的`梦★ AAA\
╭ゝ野゛魅舞セ╮ AAA\
最终的结局 AAA\
。舍不得ヽ AAA\
媚舞々鬼依 AAA\
紫高傲 AAA\
望眼欲穿 AAA\
眼泪闪烁着痛苦゛ AAA\
恋~音乐的公主 AAA\
嘟着丶小嘴卖萌 AAA\
情窦初开 AAA\
染脂红颜泪 AAA\
猫朵＃ AAA\
碎花洋裙 AAA\
漫天尘埃中的微笑 AAA\
白痴萌物^ AAA\
年的'矿泉水不好ci AAA\
淡然いで微笑 AAA\
右手边的我 AAA\
永釺手♀影 AAA\
没情绪〃 AAA\
◆夏沫依︷° AAA\
秋影月 AAA\
花小雅ヾ AAA\
不要迷恋哥ㄨ゛嫂子会生气 AAA\
那些不懂的错 AAA\
℡安小美 AAA\
半俗半雅半疯颠 AAA\
の甜♀蜜の AAA\
苛嗳の棉花糖 AAA\
丝丝甜甜 AAA\
伴夜看椛逝 AAA\
Lollipop丷仙 AAA\
宝呗゛乔ル AAA\
冰蓝的寒冰 AAA\
成全爱 AAA\
V紫℡铃铛 AAA\
极端※ AAA\
Nananana~ AAA\
城南旧梦° AAA\
冰淇淋的夏天 AAA\
眼眸印温柔 AAA\
〈还爱吗 AAA\
青衣素髻 AAA\
冰舞の恋雪 AAA\
雪花烂漫时 AAA\
飘络の枫僷 AAA\
一点都不酷＾ AAA\
狠耐狠耐哟丶 AAA\
多啦B梦 AAA\
雨点哇哇 AAA\
静静旳ノ纶 AAA\
廊桥遗梦 AAA\
慕雩婷丶 AAA\
悲傷與被傷 AAA\
指缝间刺眼旳阳光 AAA\
吃节操的小怪受w AAA\
红舞鞋 AAA\
血色彼岸花╮ AAA\
何必执着 AAA\
为何要爱丶 AAA\
幻冰忆雪 AAA\
爱Toyou。 AAA\
兔儿神是伪娘 AAA\
月朦胧 AAA\
别对我假惺惺 AAA\
我是一个笨小孩。 AAA\
开始的开始我们都是孩子 AAA\
回忆凌乱了吗 AAA\
感情骗子滚蛋っ AAA\
分钟的热度 AAA\
ゞm云ぃ溦ルぷ AAA\
倾一秋落叶 AAA\
群猪看夕阳 AAA\
锦绣醉流苏゜ AAA\
嘻哈公主 AAA\
不夜雪 AAA\
为君抚琴 AAA\
织梦行云 AAA\
懒懒dě高贵 AAA\
君紫雨泪 AAA\
碧籽莲芯 AAA\
性感不是骚 AAA\
Meily嫣儿 AAA\
で城市姑娘 AAA\
aini玄紫 AAA\
有你&amp;足咦 AAA\
陌上烟雨谣 AAA\
村中两朵花丶丽 AAA\
思維在裸奔 AAA\
凝籽&amp;雅涵 AAA\
我爱到，痛了 AAA\
姐，就是如此完美 AAA\
ShHo苏荷 AAA\
招牌式微笑 AAA\
Forever琪牵手 AAA\
雪尐（jie）儿 AAA\
的塞纳河 AAA\
安于现状 AAA\
歌岛礼弥 AAA\
青色记事 AAA\
№┩莎白 AAA\
消夨泡泡 AAA\
红叶初雨 AAA\
明眸绕指柔 AAA\
凝芸冰澜 AAA\
风是风筝的影子 AAA\
逗你玩 AAA\
天真。 AAA\
小布叮~ AAA\
╮气质你拽姐◇╮ AAA\
柏林的雪花飘 AAA\
柯南君▲ AAA\
你怎样酱紫 AAA\
゛溦偏执 AAA\
心只为你动 AAA\
☆﹎尐の潴猪 AAA\
一抹ˋ女人香 AAA\
想の恋ざ冻结 AAA\
俄只素一个单纯滴小女森っ AAA\
王小呆 AAA\
像个母亲 AAA\
陪你看细水长流` AAA\
小黑 AAA\
完美邂逅 AAA\
半岛北° AAA\
班里①枝婲 AAA\
&amp;乖乖*女&amp; AAA\
世界在喧闹什么 AAA\
有声默片 AAA\
兰韵犹芳 AAA\
本宫。已打烊 AAA\
懵懵懂懂大人 AAA\
旋转回忆 AAA\
下一秒天使 AAA\
卖姑娘的小女孩 AAA\
独儛メヾ溦ル AAA\
琉璃雪 AAA\
撕心裂肺的滋味° AAA\
闻花儿的蝴蝶 AAA\
Ta-欣 AAA\
馨怡桃 AAA\
あ浅浅の嘚僾 AAA\
メ被遗忘的爱丶 AAA\
Angel紫 AAA\
OnLy卟煽情 AAA\
可爱￥雪琪 AAA\
旋的女人 AAA\
彩虹泡泡 AAA\
你像小新一样搞笑 AAA\
公主小妹 AAA\
感情是微薄的， AAA\
伊小羙 AAA\
左岸·流年 AAA\
ぃ变身萌面人 AAA\
碎步飞天 AAA\
单纯Dé`开始 AAA\
标本╥ AAA\
村中两朵花丶莎 AAA\
ゞ为倪じ★ve AAA\
等下│个天亮 AAA\
旧梦滥心 AAA\
D调dě浪漫 AAA\
B型‘ AAA\
如风若梦 AAA\
芙雪宝贝 AAA\
我是来打酱油的’ AAA\
童贞贞 AAA\
灵音飘飘 AAA\
柠檬草精铃 AAA\
时光会远行 AAA\
为你而乖 AAA\
琉璃醉 AAA\
花眸羞似醉 AAA\
习鏆被伱嗳 AAA\
芳华芳蕤 AAA\
没有翅膀的天使 AAA\
桃花幻梦 AAA\
微风拥著你丶馨 AAA\
她夏了夏天丶 AAA\
就像一阵清风拂过心田 AAA\
我想一个人的情歌不好唱“ AAA\
致命的笑容 AAA\
我只是个孩子 AAA\
矜持的微笑 AAA\
美人 AAA\
纸鸢尾 AAA\
给我你的糖 AAA\
爱哭dē小魔女 AAA\
我像疯了一样 AAA\
我是ぬ菇凉 AAA\
一千年前的少女 AAA\
№┡伊丽 AAA\
罪恶感℅ AAA\
×××痕 AAA\
叶落归根 AAA\
爱你只爱你° AAA\
迷恋尔旳笑脸° AAA\
雨菲夜思君 AAA\
风吹辫辫飘 AAA\
姐丶万人追捧 AAA\
ヾ痛訫。 AAA\
初遇与他 AAA\
为→伱锁蕊 AAA\
゛半人半心半怀旧。 AAA\
不要迷恋姐 AAA\
贝壳里的公主 AAA\
碧寒冰竹 AAA\
小丑下的面具。 AAA\
舞阳岚裳 AAA\
初秋痛 AAA\
想想还是幼儿园好混 AAA\
泪wo落花 AAA\
声色倾城 AAA\
♂戴依~月雅♂ AAA\
Forever怡拥抱 AAA\
※凄凉。 AAA\
Tlove AAA\
Angel涵 AAA\
梦飞蝶幻 AAA\
冷弦樱女 AAA\
萌战必胜 AAA\
Mermaid AAA\
o雨蝶晨曦o AAA\
超有爱。 AAA\
世界末日ヽ AAA\
北极づ莜蓝 AAA\
现实太煽情ヽ AAA\
弑魂姐◎ AAA\
雪子#莹宝 AAA\
永釺手♀明 AAA\
╯以往单纯过 AAA\
薄荷☆糖糖 AAA\
素质㈠ AAA\
无名指的等待 AAA\
青苹果i AAA\
梦幻馨缘§ AAA\
粉色风雨草 AAA\
鹿晗收回你掉了的下巴° AAA\
伴夜看椛落 AAA\
甜蜜tian夜 AAA\
汐黛 AAA\
雪仒（e）儿 AAA\
蝴蝶雪 AAA\
抚半世妖娆 AAA\
ヤ℡炫丽人生〃 AAA\
吃货女人° AAA\
可丽希娅 AAA\
幸福的摩天轮 AAA\
没有星星的夜裏 AAA\
偌伊怡 AAA\
水晶の恋 AAA"
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
				for (let i = 0; i <= 84; i++) {
					var name = "";
					let avatar = ""
					var len = nickNameArr.length;
					var len2 = avatar_url_list_default.length;
					
					if (len > 0) {
						var pos = Math.floor(Math.random() * len);
						if (len2 > 0) {
							var pos2 = Math.floor(Math.random() * len2);
							avatar = avatar_url_list_default[pos2]
							console.log(pos2,avatar);
						}
						name = nickNameArr[pos];

						if (name.length == 0) { //防止拿到空白值，正常情况不会出现
							genName();
						}
						this.itemArr[0].push({
							"name": name,
							"avatar": avatar
						})
					}
					console.log(name);


				}
			}

		},
		onLoad() {
			this.genName()
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		float: right;
		position: fixed;
		right: 88rpx;
		top: 88rpx;
		z-index: 999999;
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

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 40px;
		background-color: #fff;
		border: thin;
		border-bottom: 1px solid #f0f0f0;

		text {
			margin-left: 30rpx;
			font-size: 32rpx;
		}

		// justify-content: center;
	}
</style>
