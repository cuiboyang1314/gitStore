<!-- 导航栏 -->
<template>
      <ul class="nav">
          <li><a href="/">网站首页</a></li>
          <li><a href="/about">关于我们</a></li>
          <li>服务介绍</li>
          <li>联系我们</li>
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

    .nav {
        position: absolute;
        top: 50px;
        right: 450px;
        height: 40px;
        z-index: 1;
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
        background: #2dc6ff;
    }
</style>