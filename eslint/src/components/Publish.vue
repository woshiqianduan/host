<template>
  <div>
    <header id="app2">
      <div class="questions">
        <p>发布新问题</p>
      </div>
      <div class="type">
        <div>请选择咨询车型</div>
        <div><p id="type1" v-on:click="show1"  class="type1">{{car_type}}<span>&gt</span></p></div>
        <div id="type2"  v-show="showType">
          <ol>
            <li v-for="(type,index) in types"  v-on:click="click(index)">{{type.name}}</li>
            
          </ol>
        </div>
      </div>
      <div class="menu">
        <div>选择问题分类</div>
        <div><p v-on:click="show2" id="menu1" class="menu1">{{car_menu}}<span>&gt</span></p></div>
        <div id="menu2"  v-show="showMenu">
          <ol>
            <li v-for="(menu,index) in menus" v-on:click="click1(index)">{{menu.name}}</li>
          </ol>
        </div>
      </div>
    </header>
    <main>
    <form action="index.html">
      <textarea name="" class="txt1" placeholder="请描述你的问题"></textarea>
      <div class="uploads">
        <img src="../assets/images/1.jpg" alt="">
        <img src="../assets/images/1.jpg" alt="">
        <img src="../assets/images/1.jpg" alt="">
        <img src="../assets/images/add.jpg" alt="">
      </div>
      <div class="money" id="app3" >
        <p>设置悬赏金币</p>
        <ol>
          <li v-for="(coin,index) in coins" v-on:click="toggleClass(index)" v-bind:class="{active: coin.isClass}" >{{coin.money}}金币</li>
        </ol>
      </div>
      <input type="submit" id="btn" value="发布问题">
    </form>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      types: [ {name: '宝马'}, {name: '劳斯莱斯'}, {name: '奔驰'}, {name: '奥迪'} ],
      menus: [ {name: '机器故障'}, {name: '电器故障'}, {name: '暖风故障'}, {name: '爱车保养'}, {name: '买车须知'} ],
      coins: [ {money: 0, isClass: false}, {money: 10, isClass: false}, {money: 30, isClass: false}, {money: 60, isClass: false} ],
      active: true,
      car_type: '请选择分类',
      car_menu: '选择车辆类型',
      showType: false,
      showMenu: false
    }
  },
  methods: {
    click: function (index) {
      this.car_type = this.types[index]['name']
      this.showType = !this.showType
    },

    click1: function (index) {
      this.car_menu = this.menus[index]['name']
      this.showMenu = !this.showMenu
    },
    show1: function () {
      this.showType = true
    },
    show2: function () {
      this.showMenu = !this.showMenu
    },
    toggleClass: function (index) {
      for (let i = 0; i < this.coins.length; i++) {
        this.coins[i]['isClass'] = false
      }
      this.coins[index]['isClass'] = !this.coins[index]['isClass']
    },
    active1: function (index) {
      const oApp3 = document.getElementById('app3')
      const oLi = oApp3.getElementsByTagName('li')

      for (let i = 0; i < oLi.length; i++) {
        oLi[i].className = ''
      }
      oLi[index].className = 'active'
    }
  }
}
</script>
<style>
    header{width: 100%;background: #f5f9fc;position: relative;}
    main{background: #f5f9fc}
    .questions{border-bottom:2px solid  #ecf2f7;height: 70px;background: #fff;width: 100%;font-size: 2rem;line-height: 70px;padding-left: 25px;color: #525860}
    .type,.menu{width: 100%;clear: both;overflow: hidden;}
    .type{margin-top: 20px;}
    .type div,.menu div{float: left;height: 76px;font-size: 2rem;line-height: 70px;background: #fff;width: 50%;border-top:2px solid  #ecf2f7;text-align: left;}
    .type div:first-child,.menu div:first-child{text-indent: 25px;color: #525860}
    .menu{border-bottom:2px solid  #ecf2f7}
    .type div:nth-child(2),.menu div:nth-child(2) {text-align: right;color: #c8c8c8}
    .type .type1{margin-right: 20px;}
    .menu .menu1{margin-right: 20px;}
    .type .type1 span,.menu .menu1 span{margin-left:10px;}
    .txt1{width:100%;border: 0;outline: 0;min-height: 300px;font-size: 2rem;text-indent: 20px;line-height: 2.5rem}
    .uploads{clear: both;overflow: hidden;background: #fff;border-bottom:2px solid  #ecf2f7;padding-bottom: 20px;}
    .uploads img{width: 20%;margin-left: 3.5%}
    .money{margin-top: 30px;background: #fff;border-top:2px solid  #ecf2f7;border-bottom:2px solid  #ecf2f7;padding-bottom: 13px;}
    .money ol{clear: both;overflow: hidden;}
    .money ol li{float: left;width:20%;height: 50px;margin-left: 3.5%;background:url(../assets/images/bg1.png);background-size: 100% 100%;text-align: center;line-height: 50px;font-size: 25px;color: #575757}
    .money ol .active{background:url(../assets/images/bg2.png);background-size: 100% 100%;color: #666}
    .money p{font-size: 22px;color: #575757;line-height: 60px;margin-left: 3.5%;padding-top: 20px;}
    #btn{margin-bottom: 35px;border-radius: 5px;margin-top: 35px;width: 80%;margin-left: 10%;background: #32afff;border: 0;outline: 0;height: 70px;font-size: 25px;color: #fff;text-align: center;}
    #type2{width: 100%;height: 300px;position: absolute;left: 0;background: #fff;z-index: 1000}
    #type2 ol li{line-height: 40px;border-bottom: 1px solid #ddd;text-align: center;font-size: 22px;cursor: pointer;}
    #type2 ol li:hover{background: #ddd}
    #menu2{width: 100%;height: 300px;position: absolute;left: 0;background: #fff;}
    #menu2 ol li{line-height: 40px;border-bottom: 2px solid #ddd;text-align: center;font-size: 22px;}
    #menu2 ol li:hover{background: #ddd}
</style>
