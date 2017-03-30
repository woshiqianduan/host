<template>
  <div class="rules">
    <div class="intro">
      <img src="../assets/images/icon.png" alt="">
      <p class="rule">规则说明</p>
      <router-link tag="p" class="close" to="/">
          <a>X</a>
        </router-link>
    </div>
    <div class="content">
      <p>1、Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。</p>
            <br/>
            <p>2、Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
      对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。</p>
    </div>
  </div>
</template>
<script>
</script>
<style>
.content{
  margin: 0 20px 0 20px;
}
.content p{
  line-height: 1.8rem;
  font-size: 1rem;
}
.rules{
  width: 100%;
  text-align: left;
}
.intro{
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  line-height: 3rem;
}
.intro img,.intro p{
  display: inline-block;
}
.intro .close{
  position: absolute;
  right: 20px;
}
.intro .close a{
  text-decoration: none;
  font-size: 1.1rem;
  color: #666
}
.intro .rule{
  position: absolute;
  left: 50px;
}
.intro img{
  width: 1.4rem;
  height: 1.4rem;
  margin-top: 0.8rem;
  position: absolute;
  left: 20px;
}
</style>
