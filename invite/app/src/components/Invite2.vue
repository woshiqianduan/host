<template>
	<div class="invite1">
		<div class="box1">
			<img  class="headimg" src="../assets/images/head.png" alt="">
			<div class="hi">Hi~长按二维码拿奖励</div>
			<img class="bg" src="../assets/images/bg.jpg" alt="">
			<img class="qr1" src="../assets/images/qr.jpg" alt="">
			<a href="#">这是什么活动？</a>
		</div>
		<div class="choose in1">
			<p>已邀请<span>13</span>人</p>
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
             <p class="num">好友取消关注公众号</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <p class="cancel">-1</p>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">好友取消关注公众号</p>
             <p class="date">2017-09-23&nbsp&nbsp14:34:45</p>
           </div>
           <div class="status">
             <p class="cancel">-1</p>
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
</style>
