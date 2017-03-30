<template>
  <div class="hello">
      <div class="header">
        <img  class="qr" src="../assets/images/qr.jpg" alt="">
        <p>邀请好友关扫描二维码获积分</p>
        <router-link tag="span" to="rules">
          <a>如何邀请好友获得积分？</a>
        </router-link>
      </div>
      <div class="invite">
        <div class="score">
          <p>积分记记录 . 45分</p>
          <router-link tag="div" to="/exchange">
            <a class="exchange">兑换奖励<span>&gt</span></a>
          </router-link>

        </div>
      </div>  
      <ul class="attention">
         <li>
           <div class="left">
             <p class="num">邀请<span>Cloud</span>关注</p>
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
             <p class="cancel">-1</p>
           </div>
         </li>
         <li>
           <div class="left">
             <p class="num">邀请<span>Cloud</span>关注</p>
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
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  background: red;
}
.header{
  width: 100%;
  background: #37393e;
  padding-bottom: 20px;
}
.header .qr{
  width: 50%;
  margin-top: 10%;
}
.header a{
  color: #82848a;
  padding-top: 10px;
  font-size: 0.9rem;
  display: block;
  text-decoration: none;
}
.header p{
  font-size: 1.1rem;
  margin-top: 15px;
  color: #fff;
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
