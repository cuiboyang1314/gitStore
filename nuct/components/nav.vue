<!-- 导航栏 -->
<template>
      <ul class="nav">
          <li><a href="/">网站首页</a></li>
          <li><a href="/about">关于我们</a></li>
          <li><a>服务介绍</a></li>
          <li><a>联系我们</a></li>
      </ul>
</template>

<script>
export default {
    name: 'navbar',
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
@import '~assets/less/main.less';
    a,
    p,
    span {
        color: #fff;
    }

    .nav {
        position: absolute;
        top: 83px;
        right: 185px;
        height: 40px;
        z-index: 9999;
        width: 600px;
        height: 40px;
    }

    .nav li {
        text-align: center;
        float: left;
        width: 100px;
        height: 35px;
        line-height: 35px;
        margin: 0 10px;
    }

    .nav li:hover {
        background: #ef8b3b;
        border-radius: 55px;
    }
</style>