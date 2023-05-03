<template>
  <div>
    <img src="../assets/img/FipJS1vaEAIXstN.jpg" alt="" class="bg" />
    <nav class="login">
      <div class="login-left">
        <div class="header">
          <div class="bt">
            <h1>欢迎回来,狗修金</h1>
          </div>
          <router-link to="home"
            ><img src="../assets/img/bochi.png" alt="" class="any"
          /></router-link>
        </div>
      </div>
      <div class="login-right">
        <div class="lg">
          <h1>登陆</h1>
        </div>
        <div class="input-box">
          <input
            type="text"
            placeholder="账号"
            autocomplete="off"
            id="username"
            v-model.trim="username"
            class="input"
          />
          <input
            type="password"
            placeholder="密码"
            id="password"
            v-model.trim="password"
            class="input"
          />
          <router-link class="register" to="register"
            >没有账户注册一个</router-link
          >
          <button class="log" @click="login">登陆</button>
          <button class="res" @click="reset">重置</button>
          <!-- <el-button :plain="true" @click="login">成功</el-button> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Login } from "@/api/user";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      Login({
        userName: this.username,
        password: this.password,
      }).then((res) => {
        console.log(res.data);
        localStorage.setItem("userid", res.data.userid);
        localStorage.setItem("token", res.data.token);
        this.$message({
          message: "恭喜你，登陆成功",
          type: "success",
        });
        this.$router.push({ path: "/home" });
      });
      // catch异常捕获
      // .catch(function (res) {
      //   this.$message({
      //     message: "登陆失败喵~请检查输入的用户或者密码是否输入正确",
      //     type: "warning",
      //   });
      // });
      // 异步问题
      // var index = this;
      // const name = this.username;
      // const pass = this.password;
      // Axios({
      //   method: "POST",
      //   url: "http://47.100.215.126:8080/login/userLogin",
      //   data: {
      //     userName: name,
      //     password: pass,
      //   },
      // })
      //   .then(function (res) {
      //     const token = res.data.data.token;
      //     console.log(token);
      //     if (res.data.code === 200) {
      //       localStorage.setItem("token", res.data.data.token);
      //       index.$message({
      //         message: "恭喜你，登陆成功",
      //         type: "success",
      //       });
      //       index.$router.push({ path: "/home" });
      //     }
      //   })
      //   // catch异常捕获
      //   .catch(function (res) {
      //     index.$message({
      //       message: "登陆失败喵~请检查输入的用户或者密码是否输入正确",
      //       type: "warning",
      //     });
      //     console.log(res.response.data.status);
      //   });
    },
    reset() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.bg {
  position: fixed;
  /* width: 100%; */
  width: 1920px;
  z-index: -1;
  top: -150px;
  left: 0px;
}
.login-left {
  position: absolute;
  width: 500px;
  height: 600px;
  top: 200px;
  left: 450px;
  box-shadow: 1px 1px 1px 1px rgb(10, 177, 255);
  background-color: rgba(255, 255, 255, 0.5);
}
.login-right {
  position: absolute;
  width: 500px;
  height: 600px;
  top: 200px;
  left: 950px;
  background-color: rgba(255, 255, 255, 0.5);
}
.login-left .header .bt {
  position: absolute;
  left: 120px;
  top: 200px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 22px;
  color: rgb(236, 175, 190);
  line-height: 25px;
  letter-spacing: 1px;
}
.login-left .header .any {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  top: 300px;
  left: 150px;
}
.login-right .lg {
  position: absolute;
  left: 225px;
  top: 130px;
  font-size: 25px;
  color: rgb(230, 210, 133);
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
.login-right input-box {
  display: flex;
  /* 纵向布局 */
  flex-direction: column;
  /* 水平居中 */
  align-items: center;
}
.input {
  position: relative;
  top: 250px;
  left: 120px;
  width: 60%;
  height: 40px;
  margin-bottom: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 120px;
  /* 增加磨砂质感 */
  backdrop-filter: blur(10px);
}

input:focus {
  /* 光标颜色 */
  color: #b0cfe9;
}
input:focus::placeholder {
  opacity: 0;
}
.log {
  position: absolute;
  top: 430px;
  left: 180px;
  width: 100px;
  height: 30px;
  margin: 0 7px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #69b3f0;
  color: white;
}
.res {
  position: absolute;
  top: 430px;
  left: 300px;
  width: 50px;
  height: 30px;
  margin: 0 7px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #69b3f0;
  color: white;
}
.register {
  position: absolute;
  top: 480px;
  left: 220px;
  color: black;
}
</style>