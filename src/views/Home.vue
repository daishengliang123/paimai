<template>
  <div class="home">
   <!-- nav -->
      <my-nav></my-nav>
    <!-- user -->
      <my-user></my-user>

    <!-- 在线 on-line -->
       <my-online></my-online>

    <!-- footer -->
       <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import mynav from '@/views/Homebottom/mynav.vue'
import myuser from '@/views/Homebottom/myuser.vue'
import myonline from '@/views/Homebottom/myonline.vue'
import myfooter from '@/views/Homebottom/myfooter.vue'

export default {
  name: "Home",
  data() {
    return {
    };
  },
  methods: {
   
  },
  components: {
    'my-nav':mynav,
    "my-user":myuser,
    "my-online":myonline,
    "my-footer":myfooter,
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
