<template>
  <div>
    <Header>
      <router-view></router-view>
    </Header>
    <el-button
      @click="drawer = true"
      type="primary"
      style="margin-left: 16px"
      class="btn"
    >
      点我打开
    </el-button>
    <el-drawer :visible.sync="drawer">
      <div class="qb">
        <p class="font-word">前端:小蓝</p>
        <img src="../assets/img/qb.jpg" alt="" width="100%" class="qb-img" />
        <a href=""
          ><img
            src="../assets/img/icon_QQ.png"
            alt=""
            class="qb-qq"
            width="50%"
        /></a>
        <a href="https://space.bilibili.com/8350432?spm_id_from=333.999.0.0"
          ><img
            src="../assets/img/bilibili (1).png"
            alt=""
            width="45%"
            class="qb-bilibili"
        /></a>
        <a href="https://music.163.com/#/user/home?id=248524232"
          ><img src="../assets/img/网易云音乐 .png" alt="" class="qb-wyy"
        /></a>
      </div>
      <div class="aki">
        <p class="back-word">后端:Aki</p>
        <img src="../assets/img/aki.jpg" alt="" width="32%" class="aki-img" />
        <a href=""
          ><img src="../assets/img/icon_QQ.png" alt="" class="aki-qq"
        /></a>
        <a href="https://space.bilibili.com/8350432?spm_id_from=333.999.0.0"
          ><img
            src="../assets/img/bilibili (1).png"
            alt=""
            class="aki-bilibili"
          />
        </a>
        <a href="https://music.163.com/#/user/home?id=100870317"
          ><img src="../assets/img/网易云音乐 .png" alt="" class="aki-wyy"
        /></a>
      </div>
      <div>
        <el-button @click="innerDrawer = true" class="btn-inside">
          打开里面的!
        </el-button>
        <el-drawer
          :append-to-body="true"
          :before-close="handleClose"
          :visible.sync="innerDrawer"
        >
          <p class="huaci-word">_(:зゝ∠)_特别鸣谢花刺给予的大力支持</p>
          <img src="../assets/img/huaci.jpg" alt="" class="huaci" />
          <a href=""
            ><img src="../assets/img/icon_QQ.png" alt="" class="huaci-qq"
          /></a>
          <a
            href="https://space.bilibili.com/26279870/?spm_id_from=333.999.0.0"
          >
            <img
              src="../assets/img/bilibili (1).png"
              alt=""
              class="huaci-bilibli"
          /></a>
          <a href="">
            <img src="../assets/img/网易云音乐 .png" alt="" class="huaci-wyy"
          /></a>
          <a href="http://www.hcblog.shop/#/Home">
            <img
              src="../assets/img/博客_blogger3.png"
              alt=""
              class="huaci-blog"
          /></a>
        </el-drawer>
      </div>
    </el-drawer>
  </div>
</template>


<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  data() {
    return {
      drawer: false,
      innerDrawer: false,
    };
  },
};
</script>

<style scoped>
.btn {
  position: absolute;
  top: 50%;
  left: 45%;
}
.click {
  background-color: pink;
}
.btn-inside {
  position: absolute;
  top: 50%;
  left: 40%;
}
.qb {
  position: absolute;
  top: 100px;
  height: 150px;
  width: 150px;
  border-radius: 50px;
}
.qb-img {
  position: absolute;
  top: -30px;
}
.font-word {
  position: absolute;
  top: 80px;
  left: 45px;
  z-index: 2;
}
.back-word {
  position: absolute;
  top: 680px;
  left: 85px;
  z-index: 2;
}
.aki-img {
  position: relative;
  top: 600px;
  z-index: 1;
  border-radius: 50px;
}
.qb-qq {
  position: absolute;
  top: 50px;
  left: 150px;
}
.qb-bilibili {
  position: absolute;
  top: 55px;
  left: 255px;
}
.qb-wyy {
  position: absolute;
  top: 50px;
  left: 350px;
  width: 50%;
}
.aki-qq {
  position: absolute;
  width: 13%;
  top: 800px;
  /* left: -50px; */
  left: 200px;
}
.aki-bilibili {
  position: absolute;
  width: 11%;
  top: 810px;
  left: 300px;
}
.aki-wyy {
  position: absolute;
  width: 13%;
  top: 800px;
  left: 380px;
}
.huaci {
  position: absolute;
  border-radius: 50px;
  width: 50%;
  top: 12%;
  left: 25%;
}
.huaci-word {
  position: absolute;
  left: 25%;
}
.huaci-qq {
  position: absolute;
  width: 20%;
  left: 5%;
  top: 37px;
}
.huaci-bilibli {
  position: absolute;
  width: 15%;
  left: 75%;
  top: 50px;
}
.huaci-wyy {
  position: absolute;
  width: 22%;
  left: 5%;
  top: 40%;
}
.huaci-blog {
  position: absolute;
  width: 16%;
  left: 76%;
  top: 43%;
}
</style>