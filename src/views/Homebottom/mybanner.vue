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
        },
        {
          id: 4,
          img:
            "http://hbimg.b0.upaiyun.com/0a47954095ef297f5438ceb0cc9777dae3567ae81ae2e-AT59cB_fw658"
        },
        {
          id: 5,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586712525297&di=d9f365255446a2906691745c52b6d159&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170820%2Fb335bc5b59b74589a92f45ee47cd3958.jpeg"
        },
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

  .el-carousel__button{
    width: 13px;
    height: 13px;
    border: 1px solid;
    border-radius: 50%;
    background-color: chartreuse;
  }
  .el-carousel__indicator.is-active button{
    background-color: red;
  }
}
</style>