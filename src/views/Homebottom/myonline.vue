<template>
  <!-- online 在线充值页面 -->
  <div class="online">
    <div>
      <span class="el-icon-user"></span>
      在线提问
    </div>
    <div>
      <span class="el-icon-user"></span>在线充值
    </div>
    <div>
      <span class="el-icon-house"></span>联众论坛
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
     .online {
    width: 680px;
    height: 20px;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    > div {
      width: 200px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #ccc;
      text-align: center;
      font-weight: 600;
      > span {
        color: red;
        padding-right: 2px;
        font-size: 15px;
      }
    }
  }
</style>