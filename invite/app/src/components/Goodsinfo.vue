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
				<p class="name">所需积分</p>
				<p class="num">13</p>
			</div>
			<div class="scores fl">
				<p class="name">所需积分</p>
				<p class="num">13</p>
			</div>
		</div>
		<input class="btn" type="button" value="立即兑换" />
		<div class="introduce">
			奖励描述
		</div>
	</div>
</template>
<script>
</script>
<style>
.fl{
	float: left;
}
.info{
	width: 100%;
}
.info .picture{
	width: 60px;
	height: 60px;
	margin-bottom: 15px;
}
.info .scores{
	height: 35px;
	width: 33%;
}
.info .scores:first-child{
	border-right: 1px solid #ddd
}
.info .scores:last-child{
	border-left: 1px solid #ddd
}
.info .name{
	line-height: 2rem;
	font-size: 0.9rem;
	margin-top: -10px;
}
.info .num{
	font-size: 0.9rem;
}
.box{
	width: 90%;
	margin-left: 5%;
}
.goodsname{
	margin-top: 13px;
	font-size: 1.1rem;
	line-height: 3rem;
	font-weight: bold;
}
.btn{
	width: 35%;
	height: 2rem;
	background: #1AAD19;
	border: 0;
	border-radius: 3px;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	margin:25px auto;
}
.introduce{
	width: 100%;
	height: 2.2rem;
	font-size: 1rem;
	background: #f9f9f9;
	text-align: left;
	line-height: 2.2rem;
	padding-left: 20px;
	color: #8e8e8e;
	outline: 0;
}
.introduce:hover{
	outline: 0;
	border: 0
}
</style>
