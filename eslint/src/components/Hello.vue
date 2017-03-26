<template>
  <div class="box">
  <header>
    <div class="sq">
      <span class="sq1">金牌技师社区</span>
      <span class="sq1 op">已解决234,245个问题</span>
      <router-link to="/Publish">
        <a ><img class="hd" src="../assets/images/dot.png" width="88" alt=""></a>
      </router-link> 
        
    </div>
  </header>
  <main>
    <ul id="app1">
      <li v-for="(time,index) in times" >
        <div class="lists">
          <img class="hd_image" src="../assets/images/dot1.png" alt="">
          <h2 class="name">{{time.id}}</h2>
          <h2 class="c_type">北京<span>宝骏510</span></h2>
          <img class="cai" src="../assets/images/cai.png"  alt="">
          <img class="ji" src="../assets/images/ji.png"   alt="">
          <img class="fix" src="../assets/images/fix.png"   alt="">
        </div>
        <div class="content">
          
          <p>
            {{time.content}}
          </p>
        </div>
        <div class="pictures">
          <img src="../assets/images/1.jpg" alt="">
          <img src="../assets/images/1.jpg" alt="">
          <img src="../assets/images/1.jpg" alt="">
        </div>
        <div class="pra">
          <span class="date sn">02-21</span>
          <span class="time">14:46</span>
          <img v-on:click="praise1(index)"  v-bind:src="time.z_src"  class="zan" alt="">
          <span class="zan1">{{time.pra}}</span>
          <router-link :to="{path:'/Apply',query:{id:index}}"> 
              <a v-on:click="getAnwser(index)" >
                <img src="../assets/images/pl.png" class="pl"  alt="">
                <span>查看<span>{{time.pl}}</span>条回答</span>
              </a>
          </router-link>
        </div>
      </li>
    </ul>
  </main>

  </div>
</template>

<script>
    export default {
      data () {
        return {
          times: [
            {
              'id': '吃饱了不饿',
              'pra': 17,
              'pl': 5,
              'click': true,
              'content': '新车跑了4000公里，总体感觉不错，就是感觉二挡不好挂，后边冷车有异响，车热了就不响了，大神，这正常吗？',
              'z_src': require('../assets/images/zan.png')
            },
            {
              'id': '吃饱了也饿',
              'pra': 12,
              'pl': 3,
              'click': true,
              'content': '新车跑了4000公里，总体感觉不错，就是感觉二挡不好挂，后边冷车有异响，车热了就不响了，大神，这正常吗？',
              'z_src': require('../assets/images/zan.png')
            }],
          temp: [],
          show: false
        }
      },
      methods: {
        praise1: function (index) {
          if (this.times[index]['click'] === true) {
            this.times[index]['pra']++
            this.times[index]['z_src'] = require('../assets/images/zan1.png')
            this.times[index]['click'] = false
          } else {
            return false
          }
        },
        getAnwser: function (index) {
          this.temp = this.times[index]
         // document.cookie = 'id=' + this.temp.id
        }
      }
    }
</script>

<style scoped>
    header{background: url('../assets/images/head.jpg') no-repeat;background-size: 100% 100%;min-height: 174px;position: relative;}
    .hd{position: absolute;right: 43px;top: 46px;}
    .box .sq{width: 100%;min-height: 134px;}
    .box .sq1{padding-top: 52px;display: block;position: absolute;font-size: 32px;color: #fff;left: 50px;}
    .box .op{padding-top: 103px;}
    .hd_image{width: 70px;height: 70px;margin-left: 23px;}
    .box main ul li{width: 100%;margin-top: 17px;background: #fff;padding-top: 20px;padding-bottom: 20px;}
    .box main ul li:first-child{margin-top: 17px;}
    .box main ul{width: 100%;border-top: 1px solid #f5f9fc}
    .box main{width: 100%;background: #f5f9fc}
    .box .lists{width: 100%;clear: both;overflow: hidden;position: relative;}
    .box .lists .hd_image,.lists h2{float: left;}
    .box .lists h2{font-size: 1.8rem;margin-top: 8px;margin-left: 25px;font-weight: normal;color: #525860}
    .cai{width: 40px;height:  40px;margin-left: 25%;margin-top: 5px;position: absolute;right: 220px;}
    .ji{width: 40px;height: 40px;margin-left: 10px;margin-top: 5px;position: absolute;right: 175px;margin-top: 5px;}
    .fix{width: 147px;position: absolute;width:147px;top: 2px;right: 20px;}
    .pictures{width: 100%;height: 136px;margin-top: 15px;}
    .pictures img{width: 136px;height: 136px;background: blue;float: left;margin-left: 10px;}
    .pictures img:first-child{margin-left: 122px;}
    .pra{margin-left: 0px;font-size: 20px;margin-top: 24px;padding-bottom: 26px;width: 100%;}
    .pra span{color: #adb0b3;display: inline-block;}
    .pra .zan{margin-left:30%;}
    .pra a{text-decoration: none;}
    .pra .pl{margin-left: 50%}
    .pra .date{position: absolute;left: 122px;}
    .pra .time{position: absolute;left: 180px;}
    .content{width: 100%;}
    .content p{width: 80%;margin-left: 122px;font-size: 20px;line-height: 30px;text-justify: inter-ideograph;text-align: justify;padding-right: 5px;margin-top: 30px;}
    .box .lists .c_type{margin-top: 15px;color: #adb0b3;margin-left: 0;position: absolute;left: 118px;top: 27px;}
    .pra .zan1{right: 50px;position: absolute;top: 5px;}
    @media (max-width: 960px){
      .cai{width: 40px;height: 40px;margin-left: 25%;margin-top: 5px;position: absolute;right: 220px;}
      .ji{width: 40px;height: 40px;margin-left: 10px;margin-top: 5px;position: absolute;right: 175px;margin-top: 5px;}
      .fix{width: 147px;position: absolute;width:147px;top: 2px;right: 20px;}
      .box .lists .c_type{margin-top: 15px;color: #adb0b3;margin-left: 0;position: absolute;left: 118px;top: 27px;}
      .pra .date{position: absolute;left: 122px;}
      .pra .time{position: absolute;left: 180px;}
    }
    @media (max-width: 768px){
      .box .content p{font-size: 25px;}

      .cai{width: 40px;height: 40px;margin-left: 25%;margin-top: 5px;}
      .ji{width: 40px;height: 40px;margin-left: 10px;margin-top: 5px;}
      .fix{margin-left: 10px;width: 147px;margin-top: 5px;}
      .box .lists .c_type{color: #adb0b3;position: absolute;left: 100px;top: 27px;}
      .pra .date{position: absolute;left: 122px;}
      .pra .time{position: absolute;left: 180px;}
    }
    @media (max-width: 640px){
      .cai{width: 40px;height: 40px;margin-left: 12%;margin-top: 5px;}
      .ji{width: 40px;height: 40px;margin-left: 8px;margin-top: 5px;}
      .fix{margin-left: 10px;width: 130px;margin-top: 5px;}
      .box .lists .c_type{color: #adb0b3;position: absolute;left: 96px;top: 27px;}
      .hd_image{width: 60px;height: 60px;margin-left: 10px;}
      .content p{width: 80%;margin-left: 96px;font-size: 20px;line-height: 30px;text-justify: inter-ideograph;text-align: justify;padding-right: 5px;padding-top: 15px;}
      .pictures img:first-child{margin-left: 100px;}
      .pictures img{width: 115px;height: 115px;}
      .pra{margin-left: -30px;font-size: 20px;margin-top: 24px;padding-bottom: 26px;}
      .pra span{color: #adb0b3;display: inline-block;}
      .pra .zan{position: absolute;right: 30px;top:0px;}
      .pra .zan1{position: absolute;right: 5px;top:5px;}
      .pra .pl{margin-left: 30%}
      .pra .date{position: absolute;left: 122px;}
      .pra .time{position: absolute;left: 180px;}
    }
    @media (max-width: 480px){
      header{min-height: 134px;}
      .box .sq1{padding-top: 32px;display: block;margin-left: -30px;font-size: 18px;color: #fff;}
      .box .op{padding-top: 70px;}
      .hd{width: 60px;top: 32px;right: 36px;}
      .lists{position: relative;}
      .lists .hd_image{width: 50px;height: 50px;margin-left: 13px;}
      .lists h2{font-size: 1.5rem}
      .box .lists .name{margin-left: 10px;font-size: 15px;}
      .box .cai{width: 30px;height: 30px;position: absolute;right: 100px;}
      .ji{width: 30px;height: 30px;position: absolute;right: 135px;margin-top: 5px;}
      .fix{position: absolute;width:80px;top: 2px;right: 10px;}
      .box .lists .c_type{margin-top: -5px;color: #adb0b3;margin-left: 0;position: absolute;left: 70px;top: 37px;font-size: 15px;}
      .box .hd_image{width: 50px;height: 50px;margin-left: 10px;}
      .box .content p{width: 80%;margin-left: 70px;padding-right: 5px;font-size: 1.2rem;line-height: 30px;text-justify: inter-ideograph;text-align: justify;padding-right: 5px;padding-top: 15px;}
      .pictures img:first-child{margin-left: 70px;}
      .pictures img{width: 70px;height: 70px;}
      .pictures{height: 100px;}
      .pra{margin-top: 0;font-size: 1.2rem;width: 100%;}
      .pra .zan,.pra .pl{width: 18px;}
      .pra .date{position: absolute;left: 100px;}
      .pra .time{position: absolute;left: 150px;}
      .pra .zan{position: absolute;right: 30px;top:-3px;}
      .pra .zan1{position: absolute;right: 5px;top:2px;}
    }

    .box{width: 100%;margin-top: 0;font-size: 100%}
</style>
