<template>
  <div class="header">
    <nav id="top">
      <div class="logo">
        <router-link to="home">
          <img src="../assets/img/bilibili.png" alt=""
        /></router-link>
      </div>
      <div class="nav-text">
        <ul>
          <li class="nav-title"><router-link to="/home">首页</router-link></li>

          <li class="nav-title"><router-link to="/note">便签</router-link></li>
          <li class="nav-title">
            <router-link to="/msg">留言板</router-link>
          </li>
          <li class="nav-title">
            <router-link to="/ero">エロ</router-link>
          </li>
          <li class="nav-title">
            <router-link to="./admin">个人中心</router-link>
          </li>
          <li class="nav-title">
            <router-link to="/friend">开发</router-link>
          </li>
          <li class="nav-login">
            <router-link v-if="isShow" to="/login">登陆</router-link>
            <p @click="out" v-else class="out">退出登陆</p>
          </li>
        </ul>
        <img src="../assets/img/ACG.GY_36.jpg" alt="" class="bcg" />
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    clear() {
      localStorage.removeItem("token");
    },
    out() {
      localStorage.removeItem("token");
      this.$message({
        message: "退出成功喵",
        type: "success",
      });
      this.$router.push("/login");
    },
  },
  mounted() {
    this.isShow = localStorage.token == undefined;
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
/* .header {
  background-image: url(../assets/img/104093447_p0_master1200.jpg) class= "bcg";
} */
#top {
  /* position: absolute; */
  /* display: inline-block; */
  border-radius: 100px;
  height: 60px;
  width: 1850px;
  margin-left: 20px;
  margin-top: 5px;
  z-index: 1;
  border-style: solid 10px;
}
.bcg {
  position: absolute;
  position: fixed;
  z-index: -1;
  top: -120px;
  left: -50px;
  min-width: 1800px;
}
#top:hover {
  box-shadow: 1px 1px 1px 1px rgb(10, 177, 255);
}
.logo img {
  width: 3%;
}
.logo {
  position: relative;
  margin-top: -5px;
  top: 3px;
  left: 31px;
  opacity: 0.5;
  z-index: 2;
}
a {
  color: rgb(44, 188, 255);
}
.nav-text {
  width: fit-content;
  margin-left: 100px;
  background-repeat: repeat;
}
.nav-title {
  position: relative;
  display: inline-block;
  height: auto;
  line-height: 100px;
  color: rgb(44, 188, 255);
  vertical-align: top;
  font-size: 15px;
  margin-top: -80px;
  margin-left: 60px;
  padding: 0;
  z-index: 2;
  /* padding: 0 8px; */
}
.nav-login {
  position: absolute;
  /* position: fixed; */
  /* display: inline-block;
  height: auto;
  line-height: 100px; */
  color: rgb(44, 188, 255);
  /* vertical-align: top; */
  top: 23px;
  left: 90%;
  font-size: 15px;
  /* margin-left: 1200px;
  margin-top: -80px; */
  cursor: pointer;
  /* padding: 0 8px; */
  z-index: 2;
}

.login-text {
  text-align: left;
}
.nav-substitle {
  background-color: #fdeeee;
  border-radius: 5px;
  line-height: 50px;
  width: 100px;
  position: absolute;
  display: none;
  opacity: 0.8;
  /* z-index: 3; */
}
.nav-substitle a {
  display: block;
  border: 3px solid transparent;
}
.nav-substitle a :hover {
  border: 3px solid white;
  transition-duration: 0.3s;
  border-radius: 5px;
  opacity: 1;
}
.nav-title:hover {
  /* cursor: pointer;鼠标显示  */
  cursor: pointer;
  /* border-bottom: 3px solid white;
  transition-duration: 10s; */
}
.nav-login:hover {
  cursor: pointer;
  /* border-bottom: 3px solid white;
  transition-duration: 10s; */
}
.nav-link:hover ~ .nav-substitle {
  display: block;
}
</style>