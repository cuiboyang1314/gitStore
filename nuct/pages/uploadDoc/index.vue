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
            <el-form ref="form" :model="form" label-width="80px" style="width: 500px;margin: 0 auto;">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-form-item label="资源名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="资源类型">
                    <el-input v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item label="资源分类">
                    <el-input v-model="form.sort"></el-input>
                </el-form-item>
                <el-form-item label="资源描述">
                    <el-input type="textarea" style="width: 100%;resize: none;" v-model="form.describe"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="checked">同意&nbsp;&nbsp;&nbsp;品牌研究资源共享规则</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :disabled="isAbled">立即提交</el-button>
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
      middleware: 'auth',
  data () {
    return {
        checked: false,
        isAbled: true,
        form: {
            name: '',
            type: '',
            sort: '',
            describe: '',
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
      handleRemove(file) {
        console.log(file);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length} 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
        /*beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }*/
  },

  updated: function () {
      if (this.checked == false) {
          this.isAbled = true;
      }else{
          this.isAbled = false;
      }
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
    padding: 20px 0;
    box-shadow: 4px 4px 10px 4px #ccc;
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