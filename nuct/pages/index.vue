<!--  -->
<template>
    <div class="container">
        <login></login>
        <swiper></swiper>
        <navbar></navbar>
        <div>
            <p class="brandName">品牌定位</p>
            <p class="brandSmallName">BRAND POSITION</p>
            <p class="arrow">︾</p>
        </div>
        <div class="brandBanner">
            <div>品牌计算</div>
            <div @click="jumpUrl('/brandSearch')">品牌查询</div>
            <div>品牌资料</div>
            <div @click="jumpUrl('/brandConnect')">品牌交流</div>
        </div>
        <div class="wx">
            <div>关注微信公众号</div>
            <div>关注微信小程序</div>
        </div>
        <div class="friend">
            <h1>合作伙伴
                <small>合作互通以提供更优质的服务</small>
            </h1>
            <hr>
            <div class="cooperation">
                <div>北方工业大学</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <footerBar></footerBar>
        </div>
    </div>

</template>

<script>
import login from '~/components/login';
import swiper from '~/components/carousel';
import navbar from '~/components/nav';
import footerBar from '~/components/footer';
export default {
    components: {
        login,
        swiper,
        navbar,
        footerBar,
    },
    methods: {
        jumpUrl (url) {
            location.href = url;
        }
    }
}

</script>
<style lang='less' scoped>
@import '~assets/less/main.less';
@EnglishTitle: 14px;
@ChineseTitle: 18px;
.brandName {
    font-weight: 600;
    font-size: @ChineseTitle;
    margin-top: 20px;
    text-align: center;
}

.brandSmallName {
    font-size: @EnglishTitle;
    text-align: center;
}

.arrow {
    text-align: center;
}

.brandBanner,
.wx {
    position: relative;
    top: 50px;
    display: flex;
    justify-content: space-around;
}

.wx {
    top: 150px;
}

.brandBanner div {
    height: 120px;
    width: 200px;
    border: 1px solid black;
}

.wx div {
    height: 200px;
    width: 400px;
    border: 1px solid black;
}

.friend {
    position: relative;
    top: 250px;
}

.friend h1 {
    font-size: 23px;
    font-weight: 300;
}

.friend h1 small {
    color: #ccc;
}

.cooperation {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

.cooperation div {
    height: 70px;
    width: 150px;
    border: 1px solid black;
}
</style>