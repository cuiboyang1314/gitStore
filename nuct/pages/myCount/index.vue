<!-- 我的计算 -->
<template>
<div class="container">
    <div class="searchBanner">
        <navbar style="top: 0;"></navbar>
        <login></login>
    </div>
    <img src="../../static/img/791571927556_.pic.jpg" alt="">
    <search></search>
        <el-tabs type="border-card"  :tab-position="tabPosition" style="height: 580px; width: 750px; margin: 20px auto;border-radius: 55px;">
            <el-tab-pane label="个人资料">
                <h1 class="selfInfTitle">个人资料</h1>
                <hr>
                <div id="selfInf">
                    <div class="selfInfFlex1">
                        <img src="../../static/img/selfInfText.jpg" class="selfInfImg">
                        <a>修改头像</a>
                    </div>
                    <div class="selfInfFlex2">
                        <p>ID：</p>
                        <p style="margin-bottom: 50px">关注：<span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;积分：<span>222</span></p>
                        <a>充值</a>
                        <p>昵称：<span></span></p>
                        <p>实名：<span></span></p>
                        <p>性别：<span></span></p>
                        <p>生日：<span></span></p>
                        <p>地区：<span></span></p>
                        <p>行业：<span></span></p>
                        <p>职业：<span></span></p>
                        <p>简介：<span></span></p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的计算">我的计算</el-tab-pane>
            <el-tab-pane label="我的查询">我的查询</el-tab-pane>
            <el-tab-pane label="我的积分">我的积分</el-tab-pane>
            <el-tab-pane label="我的资源">我的资源</el-tab-pane>
        </el-tabs>
    <footerBar  style="width: 1080px;position: absolute; bottom: 0;"></footerBar>
</div>
</template>

<script>
import login from '~/components/login';
import footerBar from '~/components/footer';
import navbar from '~/components/nav';
import search from '~/components/searchInput';
import axios from 'axios';
import Cookies from '~/plugins/cookie';

export default {
  data () {
    return {
        tabPosition: 'left'
    };
  },
  components: {
      login,
      footerBar,
      navbar,
      search,
  },

  methods: {

  }
}

</script>
<style lang='less'>
@import '~assets/less/main.less';

.searchBanner {
    background: @mainColor;
    height: 35px;
}

.login {
    bottom: 30px !important;
}

.container {
    min-height: 1000px;
}

.selfInfTitle {
    font-size: 20px;
    color: @mainColor;
    margin-bottom: 10px;
}

#selfInf {
    display: flex;
    height: 100%;
    width: 100%;
}

.selfInfFlex1,
.selfInfFlex2 {
    //border: 1px solid #000;
    height: 400px;
    position: relative;
}

.selfInfFlex1 {
    width: 200px;
}

.selfInfFlex1 a,
.selfInfFlex2 a {
    color: #e98441;
    position: absolute;
}

.selfInfFlex1 a {
    top: 145px;
    left:50%;
    transform: translateX(-50%);
}

.selfInfFlex2 a {
    top: 50px;
    left: 165px;
}

.selfInfFlex2 {
    flex: 1;
    padding-top: 30px;
}

.selfInfImg {
    height: 100px;
    width: 100px; 
    display: block; 
    border-radius: 100%; 
    border: 1px solid #666;
    position: absolute;
    top: 30px;
    left: 50px;
}
</style>