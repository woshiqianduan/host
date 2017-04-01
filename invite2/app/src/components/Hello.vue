<template>
  <div class="invite1">
    <div class="box1">
      <img  class="headimg" src="../assets/images/head.png" alt="">
      <div class="hi">Hi~长按二维码拿奖励</div>
      <img class="bg" src="../assets/images/bg.jpg" alt="">
      <img class="qr1" src="../assets/images/qr.jpg" alt="">
      <a class="how" v-on:click="show = true" >如何邀请好友获得积分？</a>
    </div>
    <div class="choose in1">
      <p class="chop">选择奖励兑换<span>·</span>45分</p>
      <router-link tag="span" to="/exchange">
        <a class="dh">兑换奖励<div></div></a> 
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
      <div class="rules" v-show="show" >
        <div class="intro">
          <img src="../assets/images/rules.png" alt="">
          <p class="rule">规则说明</p>
          <div  v-on:click="show = false" class="close">
          
          </div>
        </div>
        <div class="content">
          <p>1、Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
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
      show: false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
.rules{
  position: fixed;
  top:0px;
  background: #fff;
  display: block;
  transition: all .3s ease;
  background-color: #fff;
  overflow: hidden;
  animation: move 0.2s linear;
  height: 100%;
  font-size: 0.22rem;
}
@-webkit-keyframes move {
  from {
    top: 900px
  }
  to {
    top: 0;
  }
}
@keyframes move {
  from {
    top: 900px
  }
  to {
    top: 0;
  }
}
.invite1{
  width: 100%;
  background: #404249;
  display: block;
  margin-top: 0;
  position: relative;
}
.invite1 .bg{
  width: 100%;
  display: block;
}
.invite1 .hi{
  width: 100%;
  text-align: center;
  background: #fff;
  height: 1.7rem;
  font-size: 0.29rem;
  line-height: 1.2rem;
  font-weight: bold;
}
.choose .dh{
  font-size: 0.28rem;
  line-height: 0.76rem;
  display: inline-block;
  top: 0.1rem;
}
.choose .dh div{
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border-color:#1e94e0;
  border-width: 0 0 3px 3px;
  border-style: solid;
  transform:rotateZ(225deg);
  margin-left: 0.08rem;
}
.chop{
  line-height: 0.8rem;
}
.invite1 .box1{
  width: 80%;
  margin: 0 10% 0 10%;
  margin-top: 0;
  padding-top: 0.7rem;
  position: relative;
  display: block;
}
.invite1 .headimg{
  position: absolute;
  width: 20%;
  left: 40%;
  top: 1.82rem;
}
.invite1 .qr1{
  position: absolute;
  width: 30%;
  left: 35%;
  bottom: 16%;
}
.invite1 .box1 a{
  color: #82848a;
  font-size: 0.24rem;
  text-decoration: none;
  display: block;
  line-height: 1rem;
}
.in1{
  border-bottom: 1px solid #e9e9e9;
  clear: both;
  height: 1rem;
  line-height: 1.14rem;
}
.in1 p{
  position: absolute;
  left: 0.4rem;
  color: #8e8e8e;
  font-size: 0.29rem;
  display: block;
  top: 0.1rem;
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
  height: 0.3rem;
  line-height: 0.3rem;
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  font-size: 0.1rem
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
  right: 0.4rem;
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
  clear: both;
  overflow: hidden;
  background: #f9f9f9;
  padding-bottom: 0.3rem;
}
.attention li{
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
  height: 1.14rem;
}
.attention li:first-child{
  border-top: 1px solid #e9e9e9;
  margin-top: 0.3rem;
}
.left,.status{
  float: left;
}
.left{
  padding-left: 0.4rem;
  padding-top: 0rem;
  margin-top: 0.32rem;
}
.left .num{
  font-size: 0.28rem;
  line-height: 0.25rem;
  font-weight: bold;
}
.left .date{
  font-size: 0.23rem;
  color: #aeaeae;
  line-height: 0.12rem;
  margin-top: 0.15rem;
}
.status{
  position: absolute;
  right: 0.4rem;
  line-height: 0.41rem;
  height: 0.4rem;
  display: block;
}
.add{
  color: #0cc04c;
  font-size: 0.26rem;
  line-height: 1.14rem;
  font-weight: bold;
  position: absolute;
  right: 0.1rem
}
.cancel{
  color: #db4d4d;
  font-size: 0.12rem;
}
.hello{
  width: 100%;
}
.cancel1{
  width: 1.35rem;
  height:0.45rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.23rem;
  color: #fff;
  background: #ff5c5c;
  margin-top: 0.35rem;
  position: absolute;
  right: 0;
  border-radius: 5px;
}

.content{
  margin: 0.1rem 0.25rem 0 0.25rem;
  text-align: justify;
}
.content p{
  line-height: 0.6rem;
  font-size: 0.28rem;
}
.rules{
  width: 100%;
  text-align: left;
  height: 100%;
}
.intro{
  width: 100%;
  height: 1.0rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  line-height: 1.0rem;
  border-bottom: 1px solid #8e8e8e;
}
.intro img,.intro p{
  display: inline-block;
}
.intro .close{
  position: absolute;
  right: 0.25rem;
  width: 0.34rem;
  height: 0.34rem;
  top: 0.32rem;
  background: url(../assets/images/close.png);
  background-size: 100% 100%;
}
.intro .close a{
  text-decoration: none;
  font-size: 0.4rem;
  color: #8e8e8e;
}
.intro .rule{
  position: absolute;
  left: 1.0rem;
  font-size: 0.34rem;
  top: 0
}
.intro img{
  width: 0.50rem;
  height: 0.50rem;
  margin-top: 0.25rem;
  position: absolute;
  left: 0.20rem;
}
</style>
