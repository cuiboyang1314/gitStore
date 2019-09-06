<!-- 我的计算 -->
<template>
  <div class="container">
      <login></login>
      <navbar></navbar>
      <search></search>
      <div class="showMyCount">
          <el-tabs type="border-card"  :tab-position="tabPosition" style="height: 1200px; width: 100%; margin: 0 auto;">
            <el-tab-pane label="我的计算">我的计算</el-tab-pane>
            <el-tab-pane label="我的查询">我的查询</el-tab-pane>
            <el-tab-pane label="我的积分">我的积分</el-tab-pane>
            <el-tab-pane label="我的资源">我的资源</el-tab-pane>
          </el-tabs>
      </div>
      <footerBar></footerBar>
  </div>
</template>

<script>
import login from '~/components/login';
import navbar from '~/components/nav';
import footerBar from '~/components/footer';
import search from '~/components/searchInput';
export default {
  data () {
    return {
      tabPosition: 'left',
    };
  },
  components: {
      login,
      navbar,
      footerBar,
      search,
  }
}

</script>
<style lang='less' scoped>
@import '~assets/less/main.less';
.showMyCount {
    position: relative;
    background: #f5f5f5;
    margin-top: 50px;
    min-height: 500px;
    //padding-top: 30px;
}
</style>