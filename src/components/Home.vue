<template>
  <div class="extra">
    <Header></Header>
    <nav>
      <div class="scene">
        <div><span id="luke"></span></div>
      </div>
    </nav>
    <nav>
      <div class="qq">
        <a href="#"
          ><img src="../assets/img/icon_QQ.png" alt="" class="qqimg"
        /></a>
      </div>
      <div class="weChat">
        <a href=""
          ><img src="../assets/img/微信 (1).png" alt="" class="wechat"
        /></a>
      </div>
      <div class="Git">
        <a href="https://github.com/3Asterism/akiBlog"
          ><img src="../assets/img/github (1).png" alt="" class="git"
        /></a>
      </div>
      <div class="WYY">
        <a href="https://music.163.com/#/user/home?id=100870317"
          ><img src="../assets/img/网易云音乐 .png" alt="" class="wyy"
        /></a>
      </div>
      <div class="CR">
        <a href="https://space.bilibili.com/8350432?spm_id_from=333.337.0.0"
          ><img src="../assets/img/bilibili-fill.png" alt="" class="cr"
        /></a>
      </div>
    </nav>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { Typeit } from "../utils/plug.js";
import Sakura from "../sakura/sakura.js";
import aixin from "../shot/aixin";

export default {
  components: {
    Header,
    Sakura,
    aixin,
  },
  mounted() {
    //页面元素加载完成
    var timer = setTimeout(function () {
      Typeit(1, "#luke"); //打字机效果
      clearTimeout(timer);
    }, 500);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 测试token */
.clear {
  position: absolute;
  top: 200px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.scene {
  position: absolute;
  color: rgb(255, 255, 255);
  font-style: italic;
  font-size: 25px;
  height: 250px;
  width: 600px;
  top: 300px;
  left: 700px;
}
.extra {
  min-width: 1800px;
  min-height: 800px;
}
nav .qq {
  position: absolute;
  top: 750px;
  left: 350px;
}
nav .qq .qqimg {
  width: 30%;
}
nav .weChat {
  position: absolute;
  top: 755px;
  left: 600px;
}
nav .weChat .wechat {
  width: 26%;
}
nav .Git {
  position: absolute;
  top: 750px;
  left: 850px;
}
nav .Git .git {
  width: 30%;
}
nav .WYY {
  position: absolute;
  top: 750px;
  left: 1100px;
}
nav .WYY .wyy {
  width: 35%;
}
nav .CR {
  position: absolute;
  top: 760px;
  left: 1380px;
}
nav .CR .cr {
  width: 28%;
}
.tab {
  position: absolute;
  top: 1000px;
  left: 1550px;
  width: 300px;
  height: 400px;
  border-radius: 50px;
  /* background-color: pink; */
  background-image: url(C:\Users\Stya\Desktop\blog\src\assets\img\233.png);
  z-index: -1;
}
.tab-pic {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 40px;
  left: 90px;
  border-radius: 80px;
  background-color: pink;
}
.tab-2 {
  position: absolute;
  top: 1000px;
  left: 50px;
  width: 300px;
  height: 400px;
  border-radius: 50px;
  /* background-color: pink; */
  background-image: url(C:\Users\Stya\Desktop\blog\src\assets\img\233.png);
  z-index: -1;
}
.tab-h4 {
  position: absolute;
  color: white;
  top: 180px;
  left: 130px;
  font-size: 20px;
  font-family: Times New Roman;
}
.tab-h5 {
  position: absolute;
  color: white;
  top: 210px;
  left: 110px;
  font-size: 20px;
  font-family: Times New Roman;
}
.tab-pic2 {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 40px;
  left: 90px;
  border-radius: 80px;
  /* background-image: url(C:\Users\Stya\Desktop\blog\src\assets\img\aki.jpg;); */
}
.tab2 {
  position: absolute;
  top: 1800px;
  left: 1350px;
  width: 300px;
  height: 400px;
  /* background-color: pink; */
}
.akiqq {
  position: absolute;
  width: 13%;
  top: 330px;
  left: 20px;
}
.akiwc {
  position: absolute;
  width: 11%;
  top: 333px;
  left: 90px;
}
.akigit {
  position: absolute;
  width: 11%;
  top: 333px;
  left: 160px;
}
.akibili {
  position: absolute;
  width: 15%;
  top: 330px;
  left: 230px;
}
.button {
  position: absolute;
  height: 100px;
  width: 100px;
  top: 1200px;
  z-index: 2;
}
</style>