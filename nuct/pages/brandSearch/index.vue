<!--  -->
<template>
<div class="container" v-loading="loading">
    <div class="searchBanner">
        <navbar style="top: 0;"></navbar>
        <login></login>
    </div>
    <img src="../../static/img/791571927556_.pic.jpg" alt="">
    <search></search>
    <!-- <div class="navFixed">
        <login></login>
        <search></search>
    </div> -->
    <!--<navbar></navbar>-->
    <!--<el-button type="primary" @click="turnOnlySearch" style="position: fixed;right: 300px;z-index: 100;">品牌搜索</el-button>-->
    <div class="showBrand">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>品牌列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="condition">
            <p style="margin-left: 15px; margin-bottom: 20px;"><span style="display: inline-block; width: 9px; height: 15px; background: #6b2049; margin-right: 5px;margin-top: -6px;vertical-align: middle;"></span>筛选条件：</p>
            <div v-for = "(item, i) in factor" :key="i">
                <a href="" class="conditionP">{{ item }}</a>
            </div>
        </div>
        <hr>
        <div class="brand">
            <div v-for = "(item, i) in list" :key="i" v-if = "i < 9" @click="turnDetails(item.name)"> 
                <p class="brandTitle">{{ item.name }}</p>
                <p class="brandIntroduction">{{ item.introduction }}</p>
            </div>
        </div>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
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
import Cookies from '~/plugins/cookie';

//axios.defaults.baseURL = "http://47.104.148.196:8081/dbblog";

export default {
    middleware: 'auth',
  data () {
    return {
        input: '',
        list: [],
        factor: ['服装','手机','电脑'],
        loading: true,
    };
  },
  components: {
      login,
      footerBar,
      navbar,
      search,
  },


    mounted() {
    axios({
        url: 'dbblog/portal/brand/brands',
        method: 'get',
        params: {
            'token': Cookies.get('token')
        }
    }).then(res => {
        this.loading = false;
        this.list = res.data.page.list
    }).catch(error => {

    });
   },

    
//     async asyncData() {
//         //axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8;';
//     await axios({
//         url: 'http://47.104.148.196:8081/dbblog/portal/brand/brands',
//         method: 'get',
//         params: {
//             'token': 'f7de26bf1b125a5bc2877b76d364bae9'
//         }
//     }).then(res => {
//         console.log(res.data);
//         return{
//             loading: false,
//             list: res.data.page.list
//         }
//     }).catch(error => {
//         console.log(error)
//     });
//    },

    // mounted() {
    //     //console.log(JSON.parse(localStorage.getItem(token)));
    //     console.log(this.$store.getters.getToken);
    //     console.log(Cookies.get('token'));
    // },

  methods: {
      turnDetails (url) {
            this.$router.push({
            path: '../brandInformation',
            // name: 'mallList',
            query: {
                mallCode: url
            }
        })
      },
      turnOnlySearch () {
          location.href = "../onlySearch";
      }
  }
}

</script>
<style lang='less'>
@import '~assets/less/main.less';
.showBrand {
    position: relative;
    //margin-top: 30px;
    height: 1000px;
    padding-top: 30px;
}

.Breadcrumb {
    margin-left: 20px;
    margin-bottom: 50px;
}

.condition {
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
    box-shadow: 4px 4px 10px #ccc;
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

.conditionP {
    float: left;
    margin-left: 35px;
    color: #000;
}

.navFixed {
    width: 1080px;
    height: 100px;
    background: #fff;
    position: fixed;
    z-index: 3;
    top: 0;
}

.container {
    //padding-top: 100px;
}

.searchBanner {
    background: #6b2049;
    height: 35px;
}

.login {
    bottom: 30px !important;
}
</style>