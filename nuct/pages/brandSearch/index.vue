<!--  -->
<template>
<div class="container">
    <login></login>
    <!--<navbar></navbar>-->
    <el-button type="primary" @click="turnOnlySearch" style="position: fixed;right: 300px;z-index: 100;">品牌搜索</el-button>
    <div class="showBrand">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>品牌列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="condition">
            <p style="margin-left: 15px; margin-bottom: 20px;">筛选条件：</p>
            <div v-for = "(item, i) in factor" :key="i">
                <a href="" class="conditionP">{{ item }}</a>
            </div>
        </div>
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

axios.defaults.baseURL = "http://47.104.148.196:8081/dbblog";

export default {
  data () {
    return {
        input: '',
        list: [
            {
                "id": 1,
                "name": "歌莉娅",
                "nameAbbr": "歌莉娅",
                "nameEn": "GELIYA",
                "categoryId": "19",
                "introduction": "歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌莉娅歌",
                "cover": "http://pvt7whda9.bkt.clouddn.com/brand/20190806/bd374017900b46cb8e7d6ef9ea9cdabc.png",
                "founder": "歌德",
                "establishDate": 649868400000,
                "area": "上海",
                "createUserId": "7",
                "createTime": 1566267385000,
                "categoryListStr": null,
                "baseSummaryList": null,
                "tagList": [
                    {
                    "id": 13,
                    "name": "百年传承",
                    "type": 5
                    }
                ],
                "brdMean": null,
                "brdQualityRatio": null,
                "brdStability": null
            },
            {
                "id": 2,
                "name": "耐克",
                "nameAbbr": "耐克",
                "nameEn": "NIKE",
                "categoryId": "19",
                "introduction": "耐克耐克耐克耐克",
                "cover": "http://pvt7whda9.bkt.clouddn.com/brand/20190806/bd374017900b46cb8e7d6ef9ea9cdabc.png",
                "founder": "艾克",
                "establishDate": 649868400000,
                "area": "上海",
                "createUserId": "7",
                "createTime": 1566267385000,
                "categoryListStr": null,
                "baseSummaryList": null,
                "tagList": [],
                "brdMean": null,
                "brdQualityRatio": null,
                "brdStability": null
            }
        ],

        factor: ['服装','手机','电脑'],
        
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
  },

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
    background: #f5f5f5;
    //margin-top: 50px;
    height: 1000px;
    padding-top: 30px;
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

.conditionP {
    float: left;
    margin-left: 35px;
}
</style>