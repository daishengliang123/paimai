<template>
  <div class="banner">
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in bannerData" :key="item.id">
        <img :src="item.img" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      bannerData: [
        {
          id: 1,
          img:
            "//hbimg.huabanimg.com/fec13d4b811769c76b0a818a6d6b171625224e6494598-cw3F4a_fw658"
        },
        {
          id: 2,
          img:
            "//hbimg.huabanimg.com/089991409124ea1937eb7369f46c9b9cb617084359824-gMExQT_fw658"
        },
        {
          id: 3,
          img:
            "//hbimg.huabanimg.com/f3f0d8b3ab4db6e86fc80608f83b82f1eb7418ad107d73-ytUMvR_fw658"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less">
.banner {
  height: 200px;
  // background: chartreuse;
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
}
</style>