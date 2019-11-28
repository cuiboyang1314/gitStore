<!-- 品牌回答 -->
<template>
    <div class="container">
    <div class="searchBanner">
        <navbar style="top: 0;"></navbar>
        <login></login>
    </div>
    <img src="../../static/img/791571927556_.pic.jpg" alt="">
    <search></search>
    <div class="brandConnect">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="padding-left: 30px;">
            <el-menu-item index="1" @click="tabs('questionList')">问题首页</el-menu-item>
            <el-menu-item index="2">悬赏问题</el-menu-item>
            <el-menu-item index="3">已解决</el-menu-item>
            <el-menu-item index="4">未解决</el-menu-item>
        </el-menu>
        <!-- <el-input class="questionSearch" v-model="input" placeholder="问题搜索"></!-->
        <div class="questionList" :style="{ visibility: tabsVisibility.questionList }">
            <div>
                <div class="question">
                    <h1>{{ list.title }}</h1>
                    <div class="questionContent">{{ list.content }}</div>
                    <br>
                    <p class="time">编辑于：<span>{{ list.createTime }}</span></p>
                    <br>
                    <p>浏览<span style="margin-right: 10px">{{ list.readNum }}</span>评论<span>{{ topicPoint }}</span></p>
                    <div  style="overflow: hidden;position: relative;">
                        <div class="questionNav">
                            <el-link :underline="false">分享</el-link>
                            <el-link :underline="false">收藏</el-link>
                        </div>
                        <div style="float: right">
                            <div class="head"></div>
                            <div class="name">崔博洋cuiboyang</div>
                        </div>
                    </div>
                </div>
                <hr style="border: 0;border-bottom: 2px solid #ccc;">
                <div>
                    <p style="font-size: 17px;"><span>{{ topicPoint }}</span>个回答</p>
                    <hr style="border: 0;border-bottom: 1px solid #ccc;">
                    <!--循环此部分-->
                    <div class="question" v-for = "(item, i) in list.brdCommentList" :key = "i">
                        <div class="questionContent">{{ item.content }}</div>
                        <br>
                        <div  style="overflow: hidden;position: relative;">
                            <div class="questionNav">
                                <p class="time">编辑于：<span>{{ item.createTime }}</span></p>
                                <el-link :underline="false" icon="el-icon-s-comment" @click="response(i)">回复<span>（{{ list.brdCommentList[i].brdReplyList.length }}）</span></el-link>
                            </div>
                            <div style="float: right">
                                <div class="head"></div>
                                <div class="name">崔博洋cuiboyang</div>
                            </div>
                        </div>
                        <div  :name="i" ref="card" style="display: none"> 
                            <el-card class="box-card">
                                <div v-for="(items, o) in list.brdCommentList[i].brdReplyList" :key="o" class="text item" style="margin-top:10px">
                                    {{ items.content }}
                                </div>
                            </el-card>
                        </div>
                        <hr style="border: 0;border-bottom: 1px solid #ccc;">
                    </div>
                    

                </div>
                <div class="quill-editor"
                    v-quill:myQuillEditor="editorOption"
                    @focus="onEditorFocus($event)"
                    @blur="onEditorBlur($event)"
                    @change="onEditorChange($event)"
                    style="height: 300px;">
                </div>
                <el-button type="primary">提交</el-button>
                <!--<Eidtor></Eidtor>-->
            </div>
        </div>
        <div class="questionRightBar">
            <el-button type="primary"  @click="turnUrl('/askQuestion')" style="width: 100%; border-radius: 0px; background: #6b2049; border: 1px solid #6b2049;">我要提问</el-button>
            <div class="myAnswer">
                <p class="questionRightTitle">我的回答</p>
                <hr>
                <div class="userPic">
                    <div class="selfPic"></div>
                    <div>
                        <p style="color: #3399ff;font-size: 18px;">用户</p>
                        <p style="color: #666;font-size:18px;">积分：<span style="color: red">10</span></p>
                    </div>
                </div>
                <p>提了<span>0</span>个问题，<span>0</span>人进行了回答</p>
                <p>回答了<span>0</span>个问题</p>
                <p>有<span>0</span>个同问</p>
            </div>
            <div class="newResponse">
                <p class="newResponseTitle">相似问题</p>
                <hr>
                <div class="responseList">

                </div>
            </div>
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
//import Editor from '~/components/wangeidtor';
export default {
      middleware: 'auth',
    components: {
        login,
        navbar,
        footerBar,
        search,
        //Editor,
    },

  data () {
    return {
        activeIndex: '1',
        input: '',
        tabsVisibility: {
            questionList: '',
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
        },
        topicId: 1,
        list: '',
        topicPoint: '',
        activeName: '',
    };
  },

  mounted() {
      axios({
          url: 'dbblog/portal/topic/topic/' + this.topicId,
          method: 'get',
          params: {
              token: Cookies.get('token')
          }
      }).then(res => {
          console.log(res.data.brdTopic.brdCommentList[0].brdReplyList);
          this.list = res.data.brdTopic;
          this.topicPoint = res.data.brdTopic.brdCommentList.length
      })
  },

  methods: {
      tabs(xx) {
          for ( let vib in this.$data.tabsVisibility) {
              this.$data.tabsVisibility[vib] = 'hidden';
          }
          this.$data.tabsVisibility[xx] = '';
      },
        onEditorReady (editor) {},
        // 富文本编辑器 失去焦点事件
        onEditorBlur (editor) {},
        // 富文本编辑器 获得焦点事件
        onEditorFocus (editor) {},
        // 富文本编辑器 内容改变事件
        onEditorChange (editor) {},
        turnUrl(url) {
          location.href = url;
      },
      response(i) {
          //console.log(this.$refs.card[i]);
          if(this.$refs.card[i].style.display == 'none'){
              this.$refs.card[i].style.display = 'block';
          }else{
              this.$refs.card[i].style.display = 'none';
          }
          
      }
  }
}

</script>
<style lang='less'>
@import '~assets/less/main.less';
.container {
    position: relative;
}

.brandConnect {
    overflow: hidden;
    //background: #f5f5f5;
    min-height: 500px;
    //margin-top: 100px;
    box-shadow: 0px 2px 10px 4px #ccc;
}

.brandNav {
    background: #e4e9ec;
    height: 40px;
}

.questionSearch {
    position: absolute;
    width: 400px;
    right: 30px;
    top: 142px;
    z-index: 1000;
}

.questionList {
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-left: 20px;
    min-height: 300px;
    width: 700px;
    float: left;
    background: #fff;
}

.questionRightBar {
    margin-top: 20px;
    margin-right: 40px;
    min-height: 300px;
    width: 300px;
    float: right;
    //background: #f5f5f5;
}

.questionTime {
    color: #6a6f6f;
    margin-bottom: 10px;
}

.questionTitle {
    color: #333333;
    font-size: 20px;
    
}

.questionInf {
    width: 500px;
    color: #6a6f6f;
    margin-top: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 20px;
}

.answerNamber {
    position: absolute;
    right: 80px;
    width: 80px;
    height: 80px;
    background: #a0d56d;
    padding-top: 20px;
}

.answerNamber p {
    text-align: center;
    color: #fff;
    font-weight: 700;
}

.myAnswer, .hotNote, .newResponse {
    width: 100%;
    height: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #fff;
    padding-top: 5px;
}

.newResponse {
    min-height: 500px;
}

.questionRightTitle, .hotNoteTitle, .newResponseTitle {
    color: #333333;
    font-size: 20px;
    margin: 5px;
}

.hotNoteTitle {
    display: inline-block;
}

.hotNoteMore {
    display: inline-block;
    margin-left: 165px;
    color: #3399ff;
}

.userPic {
    display: flex;
}

.userPic div {
    //border: 1px solid #000;
    height: 70px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}

.userPic div:nth-child(2) {
    flex: 1;
}

.userPic div:nth-child(2) p {
    line-height: 35px;
}

.selfPic {
    width: 70px;
    height: 70px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-left: 10px;
}

.myAnswer p {
    color: #333;
}

.myAnswer p:nth-last-child(1),
.myAnswer p:nth-last-child(2),
.myAnswer p:nth-last-child(3) {
    line-height: 35px;
    margin-left: 10px;
}

.myAnswer p:nth-last-child(1) span,
.myAnswer p:nth-last-child(2) span,
.myAnswer p:nth-last-child(3) span {
    color: #3399ff;
}

.showData {
    position: relative;
    left: 500px;
}


.showData p {
    display: inline-block;
    margin-bottom: 5px;
}

.responseList {
    display: flex;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.responseList div:nth-child(1) {
    flex: 1;
}

.responseList div:nth-child(1) img {
    border: 1px solid #ccc;
    display: block;
    width: 50px;
    height: 100%;
    border-radius: 100%;
    margin: 0 auto;
}

.responseList div:nth-child(2) {
    padding-top: 6px;
    padding-right: 20px;
    flex: 2;
    overflow: hidden;
}

.responseList div:nth-child(2) p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.responseList div:nth-child(2) span {
    color: #3399ff;
}

hr {
    margin-bottom: 20px;
}

.question h1 {
    text-align: center;
    font-size: 20px;
}

.time {
    color: #ccc;
    margin-bottom: 10px;
}

.head {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
}

.name {
    margin-bottom: 10px;
}

.questionNav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.searchBanner {
    background: #6b2049;
    height: 35px;
}

.login {
    bottom: 30px !important;
}
</style>