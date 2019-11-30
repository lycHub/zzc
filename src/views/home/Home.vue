<template>
  <div class="home">
<!--    <i class="iconfont icon-tipssuccess"></i>-->
    <header class="top-bar new_header bgef header">
      <div class="logo"><img src="../../assets/images/logo.png" alt="租租车"></div>
    </header>
    <div class="swiper-container">
      <div class="swiper-item">
        <img src="//imgcdn5.zuzuche.com/static/95/94/cc75097a52db982585089fca16c7c734.jpg!/quality/70/format/jpg" alt="">
      </div>
    </div>
    <div class="zc-box">
      <h1>国际租车</h1>
      <div class="form-box">
        <div class="addrs">
          <div class="addr addr-get">
            <span>取车城市</span>
            <p class="content">
              <b>洛杉矶</b>
            </p>
          </div>
          <div class="addr addr-get">
            <span>还车城市</span>
            <p class="content">
              <b>洛杉矶</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    console.log('aa');
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variable.less";
  @import "../../assets/styles/mixins.less";
  
  
  .home {
    .top-bar{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      background-color: #fbfbfb;
      text-align: center;
      border-bottom: 1px solid #dadada;
      padding: .05rem;
      .logo {
        width: 50%;
      }
    }
    .zc-box {
      position: relative;
      width: 95%;
      margin: -.3rem auto 0;
      border-radius: 5px;
      background-color: #fff;
      h1 {
        font-size: @font-size-lgx;
        text-align: center;
        padding: .1rem 0;
        color: @font-color-primary;
      }
      .form-box {
        .addrs {
          display: flex;
          .addr {
            span {
              font-size: @font-size-normal;
            }
            .content {
              font-size: @font-size-lgx;
              color: @font-color-black;
              padding: .15rem 0;
            }
          }
        }
      }
    }
  }
</style>
