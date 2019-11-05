<!-- 上传资料 -->
<template>
  <div class="container">
    <div class="searchBanner">
        <navbar style="top: 0;"></navbar>
        <login></login>
    </div>
    <img src="../../static/img/791571927556_.pic.jpg" alt="">
    <search></search>
      <div class="upload">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/brandDoc' }">品牌资料</el-breadcrumb-item>
            <el-breadcrumb-item>上传资源</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="uploadForm">
            <el-form ref="form" :model="form" label-width="40px" style="width: 500px;margin: 0 auto;" :label-position="labelPosition">
                <el-form-item label="标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <div class="quill-editor"
                    v-quill:myQuillEditor="editorOption"
                    @focus="onEditorFocus($event)"
                    @blur="onEditorBlur($event)"
                    @change="onEditorChange($event)"
                    style="height: 300px; margin-bottom: 10px;">
                </div>
                <div>
                    <p>我的积分：<span style="color: #ef8b3b">50</span></p>
                    悬赏积分：
                    <el-input-number v-model="num" size="mini" controls-position="right" :min="1" :max="max"></el-input-number>
                </div>
                <el-form-item>
                    <el-button type="primary">立即提交</el-button>
                </el-form-item>
            </el-form>
        </div>
      </div>
      <footerBar></footerBar>
  </div>
</template>

<script>
import login from '~/components/login';
import navbar from '~/components/nav';
import footerBar from '~/components/footer';
import search from '~/components/searchInput';
import axios from 'axios';
import Cookies from '~/plugins/cookie';
export default {
  data () {
    return {
        max: 50,
        num: 1,
        labelPosition: 'left',
        form: {
            name: '',
        },
        editorOption: {
          // 富文本中的一些属性
          modules: {
            toolbar: [
                [{'size': ['small', false, 'large']}],
                [{ 'font': [] }],     //字体
                [{ 'color': [] }, { 'background': [] }],
                ['bold', 'italic'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link', 'image'],
                ['blockquote'],
                [{ 'align': [] }],    //对齐方式

            ]
          }
        }
    };
  },
  components: {
      login,
      navbar,
      footerBar,
      search,
  },

  methods: {
  }
}

</script>
<style lang='less'>
@import '~assets/less/main.less';
.upload {
    min-height: 500px;
    //margin-top: 100px;
    //background: #f5f5f5;
    padding-top: 20px;
    overflow: hidden;
    box-shadow: 0px 2px 10px 4px #ccc;
}

.Breadcrumb {
    margin-left: 10px;
    //margin-bottom: 50px;
}

.uploadForm {
    background: #fff;
    width: 1000px;
    min-height: 200px;
    margin: 20px auto;
}

.el-form-item {
    margin-top: 20px;
}


.el-textarea .el-textarea__inner{ // 然后找到对应的类名，在这里将拉伸去掉即可
    height: 150px;
    resize: none;
}

.searchBanner {
    background: #6b2049;
    height: 35px;
}

.login {
    bottom: 30px !important;
}
</style>