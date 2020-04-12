<template>
  <!-- nav导航 -->
  <div class="nav">
    <ul>
      <li v-for="(item,index) in navData" :key="index">
        <span v-text="item.desc"></span>
        <span v-text="item.num"></span>
        <span>|</span>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "nav",
  data() {
    return {
      navData: [
        { id: 1, desc: "群众币:", num: 999 },
        { id: 2, desc: "会员:", num: 999 },
        { id: 3, desc: "尤乐豆:", num: 999 },
        { id: 4, desc: "公告" },
        { id: 5, desc: "帮助" }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less">
 .nav {
  height: 18px;
  background: #909399;
  ul {
    width: 450px;
    height: 18px;
    line-height: 18px;
    display: flex;
    position: absolute;
    top: 0px;
    left: 720px;
    li {
      height: 18px;
      color: #fff;
      span {
        padding-left: 5px;
      }
    }
  }
}
</style>