<template>
 <div>	
 	<main id="app1">
		<ul>
			<li>
				<div class="lists">
					<img class="hd_image" src="../assets/images/dot1.png" alt="">
					<h2 id="name" class="name">吃饱了不饿</h2>
					<h2 class="c_type">来自<span>北京</span></h2>
					<img class="cai" src="../assets/images/ji.png"  alt="">
					<img class="ji" src="../assets/images/cai.png"   alt="">
				</div>
				<div class="car_info">
					<img class="car" src="../assets/images/car.png" alt="">
					<span>车型：宝骏510</span>
					<img src="../assets/images/fix.png" class="fix" alt="">
				</div>
				<div class="content">
					<p>
						新车跑了4000公里，总体感觉不错，就是感觉二挡不好挂，后边冷车有异响，车热了就不响了，大神，这正常吗？
					</p>
				</div>
				<div class="pictures">
					<img src="../assets/images/1.jpg" alt="">
					<img src="../assets/images/1.jpg" alt="">
					<img src="../assets/images/1.jpg" alt="">
				</div>
				<div class="pra sn1">
					<span class="date">02-21</span>
					<span class="time">14:46</span>
					<p class="dl" v-on:click="onDelete" >删除</p>
					<img src="../assets/images/zan.png" class="zan" alt="">
					<span class="num">17</span>
				
				</div>
			</li>
		</ul>
		<div class="anwsers">
			<p class="total">共有7条回答</p>
		</div>
		<ol>
			<li v-for="(apply,index) in applies">
				<div class="lists anw_lists">
					<img class="hd_image" src="../assets/images/dot1.png" alt="">
					<h2 class="name">{{apply.id}}</h2>
					<h2 class="c_type">北京<span style="margin-left: 15px;">{{apply.type}}</span></h2>
					
					<img class="fix" v-if="apply.cn" src="../assets/images/ycn.png" v-on:click="change(index)"   alt="">
					<img class="fix" v-else  src="../assets/images/cn.png"   v-on:click="change(index)"   alt="">
				</div>
				<div id="content" class="content">
					
					<p>
						{{apply.content}}
					</p>
					<div class="as">						
						<div v-for="a in apply.apply" class="anwser"><span>吃饱了不饿</span>回复<span>审时度势的人</span>：{{a.applys}}</div>
					</div>
				</div>
				
				<div id="pra" class="pra">
					<div style="width: 100%">
						<span class="date date1">02-21</span>
						<span class="time time1">14:46</span>
						<a href="javascript:;" v-on:click="toggle(index)"><img class="pl" src="../assets/images/pl.png" alt="">
						<span class="pl1">回复</span></a>
						<img class="zan" v-on:click="praise2(index)" v-bind:src="apply.z_src"  alt="">
						<span class="num num1">{{apply.zan}}</span>
					</div>
				</div>
			</li>
		</ol>
		<div class="dialog" v-show="show">
			<p>回复 XXX</p><p  v-on:click="close" >X</p>
			<textarea id="anwser" placeholder="做多输入1000字"></textarea>
			<input type="submit"  value="发布回复"  v-on:click="doSubmit" >
		</div>
	</main></div>
</template>
<script>
	function getUrl () {
	  const src = window.location.href
	  const oLength = src.substr(src.indexOf('?id=') + 4).length
	  const oString = src.indexOf('?id=')

	  if (oString >= 0) return ''
	  if (oLength === src.length) return -1
	}
	getUrl()
	export default {
	  data () {
	    return {
	      times: [
	        {'id': '吃饱了不饿',
	          'praise': 17,
	          'comment': 5,
	          'click': true,
	          'content': '新车跑了4000公里，总体感觉不错，就是感觉二挡不好挂，后边冷车有异响，车热了就不响了，大神，这正常吗？',
	          'z_src': 'images/zan.png'
	        },
	        {'id': '吃饱了也饿',
          'praise': 12,
          'comment': 3,
	          'click': true,
	          'content': '新车跑了4000公里，总体感觉不错，就是感觉二挡不好挂，后边冷车有异响，车热了就不响了，大神，这正常吗？',
	          'z_src': 'images/zan.png'}
	      ],
	      applies: [
	        { 'id': '审时度势的人',
	          'address': '北京',
	          'type': '宝骏560',
	          'content': '没啥事，那能有啥事',
	          'apply': [{'applys': '多谢大神'}, {'applys': '多谢大神啊'}],
	          'zan': 1,
	          'click': true,
	          'z_src': require('../assets/images/zan.png'),
	          'cn': false
	        },
	        { 'id': '北京青年',
	          'address': '北京',
	          'type': '宝马X6',
	          'content': '没事',
	          'apply': [{'applys': '多谢大神'}, {'applys': '放心'}],
	          'zan': 6,
	          'click': true,
	          'z_src': require('../assets/images/zan.png'),
	          'cn': false
	        }],
	      temp: [],
	      show: false,
	      pl: 100
	    }
	  },
	  methods: {
	    praise1: function (index) {
	      if (this.times[index]['click'] === true) {
	        this.times[index]['pra'] ++
	        this.times[index]['z_src'] = require('../assets/images/zan1.png')
	        this.times[index]['click'] = false
	      } else {
	        return false
	      }
	    },
	    praise2: function (index) {
	      if (this.applies[index]['click'] === true) {
	        this.applies[index]['zan'] ++
	        this.applies[index]['z_src'] = require('../assets/images/zan1.png')
	        this.applies[index]['click'] = false
	      } else {
	        return false
	      }
	    },
	    change: function (index) {
	      this.applies[index]['cn'] = !this.applies[index]['cn']
	    },
	    getAnwser: function (index) {
	      this.temp = this.times[index]
	      document.cookie = 'id=' + this.temp.id
	    },
	    toggle: function (index) {
	      this.show = !this.show
	      this.pl = index
	    },
	    close: function () {
	      this.show = false
	    },
	    doSubmit: function () {
	      const oAnwser = document.getElementById('anwser')
	      const oValue = oAnwser.value
	      this.applies[this.pl]['apply'].push({'applys': oValue})
	      this.show = false
	      oAnwser.value = ''
	    },
	    onDelete: function () {
	      const src = window.location.href
	      const oString = src.substr(src.indexOf('') + 4).length
	      const oLength = src.indexOf('?id=')
	      if (oString <= 0) return ''
	      if (oLength === src.length) return -1
	      const url = src.substr(src.indexOf('?id=') + 4)
	      if (confirm('你确定删除？')) {
	        delete this.times[url]
	        window.location = '../index.html'
	      } else {
	        return false
	      }
	    }
	  }
	}

</script>
<style>
	.sn1{position: relative;}
	.sn1 .date{position: absolute;left: 0}
	.sn1 .time{left: 80px;position: absolute;}
	.hd{position: absolute;right: 43px;top: 46px;}
	.sq{width: 100%;min-height: 134px;}
	.sq1{padding-top: 52px;display: block;margin-left: 47px;font-size: 2.2rem;color: #fff;}
	.op{padding-top: 23px;}
	.hd_image{width: 70px;height: 70px;margin-left: 23px;}
	.lists .c_type{margin-top: -5px;color: #adb0b3;margin-left: 0;position: absolute;left: 118px;top: 47px;font-size: 22px;}
	.pra{position: relative;}
	.zan{right: 80px;position: absolute;}
	.num{position: absolute;right: 52px;top:3px;}
	.dl{display: inline-block;color: #32afff}
	.dl:hover{color: #197dbe}
	main{position: relative;}
	main ul li{width: 100%;margin-top: 17px;background: #fff;padding-top: 20px;}
	main ul li:first-child{margin-top: 17px;}
	main ul{width: 100%;border-top: 1px solid #f5f9fc}
	main{width: 100%;background: #f5f9fc}
	.lists{width: 100%;clear: both;overflow: hidden;position: relative;border-bottom: 2px solid #ddd;padding-bottom: 10px;}
	.lists .hd_image,.lists h2{float: left;}
	.lists h2{font-size: 1.8rem;margin-top: 8px;margin-left: 25px;font-weight: normal;color: #525860}
	.cai{width: 40px;height: 40px;margin-top: 5px;position: absolute;right: 60px;}
	.ji{width: 40px;height: 40px;margin-top: 5px;position: absolute;right: 10px;margin-top: 5px;}
	.fix{width: 147px;position: absolute;width:147px;top: 2px;right: 20px;}
	.pictures{width: 100%;height: 136px;margin-top: 15px;}
	.pictures img{width: 136px;height: 136px;background: blue;float: left;margin-left: 10px;}
	.pictures img:first-child{margin-left: 122px;}
	.pra{margin-left: 122px;font-size: 20px;margin-top: 24px;padding-bottom: 50px;}
	.pra span{color: #adb0b3;display: inline-block;}
	.pra .zan{margin-left:30%;}
	.pra .pl{margin-left: 2%}
	.content{width: 100%;}
	.content p{width: 80%;margin-left: 122px;font-size: 20px;line-height: 30px;text-justify: inter-ideograph;text-align: justify;padding-right: 5px;}
	.car_info{width: 100;height:50px;position: relative;padding-bottom: 15px;padding-top: 15px;}
	.car{margin-left: 35px;margin-top: 12px;float: left;}
	.car_info span{color: #adb0b3;font-size:1.8rem;float: left;margin-top: 14px;margin-left: 15px;}
	.fix{position: absolute;right: 50px;clear: both;overflow: hidden;top: 15px;}
	.anwsers{width: 100%;margin-top: 20px;background: #fff;}
	.anwsers .total{font-size: 2rem;color: #adb0b3;padding-left: 33px;line-height: 5rem;border-bottom: 1px solid #ddd}
	.main ol li{background: #fff;}
	.anw_lists{padding-top: 20px;background: #fff;border: 0}
	.anw_lists .c_type{top: 67px;}
	.dialog{width: 90%;background: #fff;position: absolute;left: 5%;border: 1px solid #ddd;bottom: 0}
	.dialog textarea{width: 90%;margin-left: 5%;height: 300px;outline: 0;background: #f6f6f6;text-indent: 12px;font-size: 2rem}
	.dialog p{font-size: 2rem;line-height: 4rem;margin-left: 5%;color: #868686}
	.dialog input{width: 50%;margin-left:0%;height: 40px;font-size: 22px;text-align: center;border: 0;outline: 0;background: #32afff;color: #fff;margin-top: 20px;margin-bottom: 20px;}
	.dialog p{display: inline-block;}
	.dialog p:nth-child(2){position: absolute;right: 20px;}
	main ol li .content{background: #fff;}
	main ol li .pictures{background: #fff;margin-top: 0;padding-top: 20px;}
	main ol li .pra{background: #fff;margin-top: 0;padding-top: 20px;padding-left: 122px;margin-left: 0}
	main ol li .anwser{width: 80%;height: 3rem;background: #eff4f9;margin-left: 10%;font-size: 22px;line-height: 3rem;padding-left: 20px;text-align: left;}
	main ol li .anwser span{color: #32afff}
	main ol li .pra .num1{margin-top: 20px;}
	main ol li .pl{position: absolute;right: 182px;top:23px;}
	main ol li .pl1{position: absolute;right: 132px;top:23px;}
	.pra .date1{position: absolute;left: 50px;}
	.pra .time1{position: absolute;left:120px;}
	@media (max-width: 960px){
		.fix{right: 10px;}
		.content p{margin-left: 60px;}
		.pictures img{width: 110px;height:110px;}
		.pictures img:first-child{margin-left: 70px;}
		.pra{margin-left: 60px;position: relative;}
		.fix{width: 100px;right: 13px;}
		.pra .date{position: absolute;left: 0px;}
		.pra .time{position: absolute;left:60px;}
		
		.pra .date1{position: absolute;left: 50px;}
		.pra .time1{position: absolute;left:120px;}
	}
	@media (max-width: 768px){
		.fix{right: 10px;}
		.content p{margin-left: 60px;}
		.pictures img{width: 110px;height:110px;}
		.pictures img:first-child{margin-left: 70px;}
		.pra{margin-left: 60px;position: relative;}
		.fix{width: 100px;right: 13px;}
		.pra .date1{position: absolute;left: 50px;}
		.pra .time1{position: absolute;left:120px;}
	}
	@media (max-width: 640px){
		.fix{right: 10px;}
		.content p{margin-left: 60px;}
		.pictures img{width: 110px;height:110px;}
		.pictures img:first-child{margin-left: 70px;}
		.pra{margin-left: 60px;position: relative;}
		.fix{width: 100px;right: 13px;}
		.pra .date1{position: absolute;left: 50px;}
		.pra .time1{position: absolute;left:120px;}
	}
	@media (max-width: 480px){
		header{min-height: 134px;}
		.sq1{padding-top: 32px;display: block;margin-left: 27px;font-size: 1.6rem;color: #fff;}
		.op{padding-top: 23px;}
		.hd{width: 60px;top: 32px;right: 36px;}
		.box .lists{position: relative;}
		.box .lists .hd_image{width: 50px;height: 50px;margin-left: 13px;}
		.box .lists h2{font-size: 1.5rem}
		.box .lists .name{margin-left: 10px;}
		.cai{width: 30px;height: 30px;position: absolute;right: 20px;}
		.ji{width: 30px;height: 30px;position: absolute;right: 60px;margin-top: 5px;}
		.fix{width:80px;margin-top: 8px;}
		.box .lists .c_type{color: #adb0b3;position: absolute;left: 70px;top: 35px;}
		.hd_image{width: 60px;height: 60px;margin-left: 10px;}
		.content p{width: 80%;margin-left: 50px;padding-right: 5px;font-size: 1.5rem;line-height: 30px;text-justify: inter-ideograph;text-align: justify;padding-right: 5px;padding-top: 15px;}
		.pictures img:first-child{margin-left: 70px;}
		.pictures img{width: 70px;height: 70px;}
		.pictures{height: 100px;}
		.pra{margin-top: 0;margin-left: 50px;font-size: 1.2rem;position: relative;}
		.pra .zan,.pra .pl{width: 18px;}
		#content .anwser{font-size: 16px;text-align: left;}
		.pra .date1{margin-left: 0px;}
		.pra .date{position: absolute;left: 60px;}
		.pra .time{position: absolute;left:110px;}
	}

</style>
