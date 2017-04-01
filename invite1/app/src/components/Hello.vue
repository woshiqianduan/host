<template>
  <div class="hello">
      <div class="header">
        <img  class="qr" src="../assets/images/qr1.jpg" alt="">
        <p>邀请好友关注公众号后发送 1 2 0 6</p>
        <p href="javascript:;" class="how" v-on:click="show = true" >如何邀请好友获得积分？</p>
      </div>
      <div class="invite">
        <div class="score">
          <div class="choose in1">
             <p class="chop">选择奖励兑换<span>·</span>45分</p>
             <router-link tag="span" to="/exchange">
                <a class="dh">兑换奖励<div></div></a> 
             </router-link>
          </div>
        </div>
      </div>  
      <ul class="attention">
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
             <p class="num">邀请1个好友关注</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  height: 100%;
  background: #fff;
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
}
.header{
  width: 100%;
  background: #37393e;
  padding-bottom: 0.7rem;
}
.header .qr{
  width: 50%;
  margin-top: 10%;
}
.header .how{
  color: #82848a;
  padding-top: 0.2rem;
  font-size: 0.3rem;
  display: block;
  text-decoration: none;
}
.header p{
  font-size: 0.35rem;
  margin-top: 15px;
  color: #fff;
}
.invite{
  text-align: left;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  font-size: 1rem;
}
.invite p,.invite a{
  display: inline-block;
  position: absolute;
}
.invite p{
  left: 0.4rem;
  line-height: 0;
  top: 0.49rem;
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
}
.left .num{
  font-size: 0.28rem;
  line-height: 0.25rem;
  font-weight: bold;
  margin-top: 0.28rem;
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
  position: fixed;
  top: 0;
  background: #fff;
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
</style>
