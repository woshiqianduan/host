<template>
	<div class="goods">
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
					<div class="info">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						&gt
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						&gt
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						&gt
					</div>
				</a>
			</router-link>
			<router-link tag="li" to="/goodsinfo?id=1">
				<a>
					<img src="../assets/logo.png" alt="">
					<div class="info">
						<p class="name">全自动酸奶机一台</p>
						<p class="fl score">积分<span>13</span></p>
						<p class="fl score">剩余<span>54</span></p>
					</div>
					<div class="gt fl">
						&gt
					</div>
				</a>
			</router-link>
		</ul>

		<div class="rules">
		    <div class="intro">
		      <img src="../assets/images/icon.png" alt="">
		      <p class="rule">规则说明</p>
		      <router-link tag="p" class="close" to="/">
		          <a>X</a>
		        </router-link>
		    </div>
		    <div class="content">
		      <p>1、Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
		      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
		      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。</p>
		            <br/>
		            <p>2、Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
		      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
		      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。</p>
		    </div>
		  </div>
	    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
.rules{
	position: absolute;
	top: 0;
	background: #fff;
	display: none;
}
.fl{
	float: left;
}
.goods{
	width: 100%;
	text-align:left;
	background: #f9f9f9;
	position: relative;
}
.choose{
	color: #716f6f;
	line-height: 2.5rem;
	font-size: 1rem;
	padding-left: 20px;
	position: relative;
	background: #fff;
}
.choose p,.choose a{
	display: inline-block;
}
.choose a{
	color: #1e94e0;
	text-decoration: none;
	position: absolute;
	right: 20px;
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
}
.goods-lists img{
	width: 50px;
	height: 50px;
	margin: 10px;
	display: block;
	float: left;
	margin-left: 0
}
.goods-lists li{
	background: #fff;
	border-bottom: 1px solid #ddd;
	clear: both;
	overflow: hidden;
	padding-left: 20px;
}
a{
	color: #222
}
.goods-lists .info{
	width: 50%;
	float: left;	
	height: 50px;
	margin-top: 8px;
	margin-left: 15px;
}
.goods-lists .name{
	font-size: 1rem;
	font-weight: bold;
	line-height: 2rem
}
.goods-lists .score{
	font-size: 0.85rem;
	color: #8f8a8a
}
.goods-lists .score:last-child{
	margin-left: 20px;
}
.goods-lists .score span{
	margin-left: 5px;
	margin-right: 5px;
}
.goods-lists .gt{
	width: 20px;
	height: 50px;
	margin-top: 5px;
	line-height: 50px;
	font-size: 1.8rem;
	font-family: 'Simsun';
	position: absolute;
	right: 15px;
	color: #cac8c8;
}
.content{
  margin: 0 20px 0 20px;
}
.content p{
  line-height: 1.8rem;
  font-size: 1rem;
}
.rules{
  width: 100%;
  text-align: left;
}
.intro{
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  line-height: 3rem;
}
.intro img,.intro p{
  display: inline-block;
}
.intro .close{
  position: absolute;
  right: 20px;
}
.intro .close a{
  text-decoration: none;
  font-size: 1.1rem;
  color: #666
}
.intro .rule{
  position: absolute;
  left: 50px;
}
.intro img{
  width: 1.4rem;
  height: 1.4rem;
  margin-top: 0.8rem;
  position: absolute;
  left: 20px;
}
</style>
