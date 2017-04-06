<template>
	<div class="info">
		<p class="goodsname">全自动酸奶机一台</p>
		<img class="picture" src="../assets/logo.png" alt="">
		<div class="box">
			<div class="scores fl">
				<p class="name">所需积分</p>
				<p class="num">13</p>
			</div>
			<div class="scores fl">
				<p class="name">剩余数量</p>
				<p class="num">54</p>
			</div>
			<div class="scores fl">
				<p class="name">奖励类型</p>
				<p class="num">实物</p>
			</div>
		</div>
		<input class="btn" type="button" value="立即兑换" />
		<div class="introduce">
			奖励描述
		</div>
	</div>
</template>
<script>
alert(1)
</script>
<script>
</script>
<style>
#app{
	height: 100%;
}
body{
	height: 100%;
}
.fl{
	float: left;
}
.info{
	width: 100%;
	background: #fff;
	height: 95%;
	clear: both;
	overflow: hidden;
	margin-top: 0.3rem;
	border-top: 1px solid #e9e9e9;
	border-bottom:  1px solid #e9e9e9
}
.info .picture{
	width: 1rem;
	height: 1rem;
	margin-bottom: 0.15rem;
}
.info .scores{
	height: 0.7rem;
	width: 33%;
}
.info .scores:first-child{
	border-right: 1px solid #ddd
}
.info .scores:last-child{
	border-left: 1px solid #ddd
}
.info .name{
	margin-top: 0.01rem;
	font-size: 0.3rem;
	color: #686868;
}
.info .num{
	font-size: 0.28rem;
	line-height: 0.5rem;
	color: #686868
}
.box{
	width: 90%;
	margin-left: 5%;
}
.goodsname{
	margin-top: 0.2rem;
	font-size: 0.35rem;
	line-height: 1.0rem;
	font-weight: bold;
}
.btn{
	width: 35%;
	height: 0.6rem;
	line-height: 0.4rem;
	background: #21b962;
	border: 0;
	border-radius: 0.07rem;
	color: #fff;
	font-size: 0.30rem;
	font-weight: bold;
	margin:0.3rem auto;
}
.introduce{
	width: 100%;
	height: 0.7rem;
	font-size: 0.25rem;
	background: #f9f9f9;
	text-align: left;
	line-height: 0.7rem;
	padding-left: 0.25rem;
	color: #8e8e8e;
	outline: 0;
	border: 1px solid #e9e9e9;
	border-left: none;
}
.btn:active{
	outline: 0;
	border: 0;
	background: #1c7441;
}
</style>
