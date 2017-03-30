<template>
	<div class="invite1">
		<div class="box1">
			<img  class="headimg" src="../assets/images/head.png" alt="">
			<div class="hi">Hi~长按二维码拿奖励</div>
			<img class="bg" src="../assets/images/bg.jpg" alt="">
			<img class="qr1" src="../assets/images/qr.jpg" alt="">
			<a href="#">如何邀请获得积分？</a>
		</div>
		<div class="choose in1">
			<p>选择奖励兑换<span>·</span>45分</p>
			<router-link tag="span" to="/exchange">
				<a>兑换奖励</a>	
			</router-link>
		</div>
		 
    
      <ul class="attention inv1">
         <li>
           <div class="left">
             <p class="num">邀请1个好友关注</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <p class="add">+1</p>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">邀请1个好友关注</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <p class="add">+1</p>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">邀请<span>Cloud</span>关注</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <div class="cancel1">取消关注</div>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">邀请<span>Cloud</span>关注</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <div class="cancel1">取消关注</div>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">邀请1个好友关注</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <p class="add">+1</p>
           </div>
         </li>
      </ul>
	</div>
</template>
<script>
</script>
<style>
.invite1{
	width: 100%;
	background: #37393e;
	display: block;
	margin-top: 0
}
.invite1 .bg{
	width: 100%;
	display: block;
}
.invite1 .hi{
	width: 100%;
	text-align: center;
	background: #fff;
	height: 80px;
	font-size: 1rem;
	line-height: 60px;
	font-weight: bold;
}
.invite1 .box1{
	width: 80%;
	margin: 30px 10% 0 10%;
	margin-top: 0;
	padding-top: 30px;
	position: relative;
	display: block;
}
.invite1 .headimg{
	position: absolute;
	width: 24%;
	left: 38%;
	top: 80px;
}
.invite1 .qr1{
	position: absolute;
	width: 30%;
	left: 35%;
	bottom: 16%;
}
.invite1 .box1 a{
	color: #82848a;
	line-height: 4rem;
	font-size: 1rem;
	text-decoration: none;
}
.in1 p{
	position: absolute;
	left: 20px;
}
.inv1{
	text-align: left;
	background: #fff;
}
.int1{
	background: #fff;
	text-align: left;
}
.invite{
  text-align: left;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  font-size: 1rem
}
.invite p,.invite a{
  display: inline-block;
  position: absolute;
}
.invite p{
  left: 20px;
  color: #a3a3a3
}
.invite .exchange{
  color: #1e94e0;
  text-decoration: none;
  right: 20px;
  font-weight: bold;
}
.exchange span{
  font-family: simsun;
  font-weight: bold;
  margin-left: 7px;
}

.attention{
  text-align: left;
  position: relative;
}
.attention li{
  border-bottom: 1px solid #e9e9e9;
  height: 3.5rem;
}
.left,.status{
  float: left;
}
.left{
  padding-left: 20px;
}
.left .num{
  font-size: 1rem;
  line-height: 2rem;
  font-weight: bold;
}
.left .date{
  font-size: 0.8rem;
  color: #aba8a8;
  line-height: 1.6rem;
}
.status{
  position: absolute;
  right: 25px;
  line-height: 3.6rem;
  height: 3rem;
  display: block;
}
.add{
  color: #0cc04c;
}
.cancel{
  color: #db4d4d;
  font-size: 1.2rem
}
.hello{
  width: 100%;
}
.cancel1{
  width: 80px;
  height:30px;
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  color: #fff;
  background: #ff5c5c;
  margin-top: 10px;
  position: absolute;
  right: -5px;
}
</style>
