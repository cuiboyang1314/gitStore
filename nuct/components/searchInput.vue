<!--  -->
<template>
  <div>
        <el-input class="inputStyle input-with-select" placeholder="请输入内容" v-model="input5">
              <el-select v-model="select" slot="prepend" style="width: 100px;">
                <el-option label="品牌" value="品牌"></el-option>
                <el-option label="资料" value="资料"></el-option>
                <el-option label="话题" value="话题"></el-option>
              </el-select>
            <el-button slot="append" icon="el-icon-search" style="width: 60px" @click="getBrandList"></el-button>
        </el-input>
  </div>
</template>

<script>
export default {
    name: 'search',
  data () {
    return {
        input5: '',
        select: '品牌',
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
        ]
    };
  },

  methods: {
    getBrandList() {
      this.$store.commit('setList', {
        list: this.$data.list
      });
      for(const i in this.$store.getters.getList){
      console.log(this.$store.getters.getList[i].name);
      }
    this.$router.push({
        path: '../onlySearch',
            // name: 'mallList',
        /*query: {
            mallCode: 
        }*/
    })
      //console.log(this.select);
      //console.log(this.input5);
    },
  },
}

</script>
<style lang='less' scoped>
@import '~assets/less/main.less';
@mainColor: #3399ff;
.inputStyle {
    //border: 1px solid @mainColor;
    width: 500px;
    margin-left: 300px;
    margin-top: 20px;
}

.el-input-group__append {
    background: @mainColor;
}

.el-icon-search:before {
    color: #fff;
}
</style>