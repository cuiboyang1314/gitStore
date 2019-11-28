<!-- 单一搜索 -->
<template>
<div class="container">
    <div class="searchBanner">
        <navbar style="top: 0;"></navbar>
        <login></login>
    </div>
    <img src="../../static/img/791571927556_.pic.jpg" alt="">
    <search></search>
    <div class="showBrand">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>品牌查询</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="brand">

        </div>
    </div>
    <footerBar></footerBar>
</div>
</template>

<script>
import login from '~/components/login';
import footerBar from '~/components/footer';
import navbar from '~/components/nav';
import search from '~/components/searchInput';
import axios from 'axios';

axios.defaults.baseURL = "http://47.104.148.196:8081/dbblog";

export default {
      middleware: 'auth',
  data () {
    return {
        input: '',
    };
  },
  components: {
      login,
      footerBar,
      navbar,
      search,
  },
  mounted() {
      axios.get('/brands/search',{
          params: {
              keywords: 'http',
          }
      }).then(res => {
          console.log(res.data);
      }).catch(error => {
        console.log(error);
    });
  }
}

</script>
<style lang='less'>
@import '~assets/less/main.less';
.showBrand {
    position: relative;
    //background: #f5f5f5;
    //margin-top: 50px;
    height: 1000px;
    padding-top: 10px;
}

.Breadcrumb {
    margin-left: 20px;
    margin-bottom: 50px;
}

.condition {
    background: #fff;
    height: 100px;
    width: 980px;
    margin: 0 auto;
}

.brand {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

.brand div {
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    width: 300px;
    height: 200px;
    background: #fff;
    overflow: hidden;
}

.el-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
}

.brandTitle {
    font-weight: 600;
    margin-left: 10px;
    margin-top: 10px;
}

.brandIntroduction {
    margin-left: 10px;
    margin-top: 5px;
}

.searchBanner {
    background: #6b2049;
    height: 35px;
}

.login {
    bottom: 30px !important;
}
</style>