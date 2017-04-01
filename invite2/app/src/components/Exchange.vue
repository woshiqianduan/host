<template>
	<div class="goods" onload="scrollTo(0,document.body.scrollHeight)">
		<div class="choose">
			<p>选择奖励兑换<span>·</span>45分</p>
			<router-link tag="span" to="/">
				<a>邀请好友得积分</a>	
			</router-link>
		</div>
		<ul class="goods-lists">
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info1">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info1">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info1">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info1">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						
					</div>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
window.onload = function (argument) {
  var oHtml = document.getElementsByTagName('html')
  oHtml[0].style.height = '90%'
}
</script>
<style>
.fl{
	float: left;
}
.goods{
	width: 100%;
	text-align:left;
	background: #f9f9f9;
	height: 100%;
}
.choose{
	color: #8e8e8e;
	line-height: 0.8rem;
	font-size: 0.25rem;
	padding-left: 0.4rem;
	position: relative;
	background: #fff;
	border: 1px solid #e9e9e9;
	border-right: 0;
	border-left: 0;
}
.choose p,.choose a{
	display: inline-block;
	font-size: 0.3rem;
}
.choose a{
	color: #1e94e0;
	text-decoration: none;
	position: absolute;
	right: 0.4rem;
}
.choose span{
	margin-left: 5px;
	margin-right: 5px;
	font-weight: bold;
}
.goods-lists{
	width: 100%;
	margin-top: 20px;
	position: relative;
	height: 100%;
	clear: both;
}
html{
	background: #f9f9f9;
	border: 1px solid blue;
	height: 100%;
}
.goods-lists img{
	width: 0.9rem;
	height: 0.9rem;
	margin: 0.2rem;
	display: block;
	float: left;
	margin-left: 0;
}
.goods-lists li{
	background: #fff;
	clear: both;
	overflow: hidden;
	padding-left: 0.4rem;
	height: 1.3rem;
	border: 1px solid #e9e9e9;
	border-left: 0;
	border-right: 0;
	margin-top: 0.2rem;
}
a{
	color: #222;
}
.goods-lists .info1{
	width: 50%;
	float: left;
	margin-top: 8px;
	margin-left: 15px;
	margin-top: 0.29rem;
}
.goods-lists .name{
	font-size: 0.30rem;
	font-weight: bold;
}
.goods-lists .score{
	font-size: 0.25rem;
	color: #8f8a8a;
	margin-top: 0.15rem;
}
.goods-lists .score:last-child{
	margin-left: 20px;
}
.goods-lists .score span{
	margin-left: 5px;
	margin-right: 5px;
}
.goods-lists .gt{
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.5rem;
  border-color:#cfcbcb;
  border-width: 0 0 3px 3px;
  border-style: solid;
  transform:rotateZ(225deg);
  position: absolute;
  right: 0.4rem;
}

</style>
