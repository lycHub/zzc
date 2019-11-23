<template>
  <div class="home">
    <!--<i class="iconfont icon-tipssuccess"></i>-->
    <header class="top-bar new_header bgef header">
      <div class="logo"><img src="../../assets/images/logo.png" alt="租租车"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
<style lang="less" scoped>
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
  }
</style>
