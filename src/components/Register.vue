<template>
  <div>
    <img src="../assets/img/FipJS1vaEAIXstN.jpg" alt="" class="bg" />
    <nav class="login">
      <div class="login-left">
        <div class="header">
          <div class="bt">
            <h1>注册一个吧,狗修金</h1>
          </div>
          <router-link to="home"
            ><img src="../assets/img/bochi.png" alt="" class="any"
          /></router-link>
        </div>
      </div>
      <div class="login-right">
        <div class="lg">
          <h1 class="re">注册</h1>
        </div>
        <div class="input-box">
          <input
            type="text"
            placeholder="用户名"
            autocomplete="off"
            id="username"
            v-model.trim="nickname"
            class="input"
            @blur="user"
          />
          <input
            type="text"
            placeholder="账号"
            autocomplete="off"
            id="nikename"
            v-model.trim="username"
            class="input"
            @blur="nike"
          />
          <input
            type="password"
            placeholder="密码"
            id="password"
            v-model.trim="password"
            class="input"
            @blur="pwd"
          />
          <input
            type="password"
            placeholder="确认密码"
            id="repassword"
            v-model.trim="repassword"
            @blur="checkpwd"
            class="input"
          />
          <router-link to="/login" class="skip">已有账户点击登陆</router-link>
          >
          <button class="log" @click="register">注册</button>
          <button class="res" @click="reset">重置</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Register } from "@/api/user";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      repassword: "",
    };
  },
  methods: {
    register() {
      if (!this.checkpwd()) {
        {
          this.$message.error("狗修金，请检查输入的数据是否正确喵~");
        }
        return;
      }

      Register({
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        address: "",
        email: "",
        passwordNonExpired: true,
        phonenum: "",
        registertime: "",
        roles: [
          {
            description: "",
            id: 0,
            name: "",
          },
        ],
        status: true,
        useravatar: "",
        userid: 0,
        useronline: "",
        userrole: 0,
      }).then((res) => {
        this.$message({
          message: "恭喜你，注册成功",
          type: "success",
        });
        // console.log(res);
        this.$router.push({ path: "/login" });
      });
    },

    checkpwd() {
      if (this.password != this.repassword) {
        this.$message({
          message: "狗修金，两次输入的密码不一致喵~",
          type: "warning",
        });
        return false;
      }
      return true;
    },
    pwd() {
      if (this.password.length < 6) {
        this.$message({
          message: "狗修金，密码要大于6位数喵",
          type: "warning",
        });
        return false;
      }
      return true;
    },
    user() {
      if (this.username.length < 1) {
        this.$message({
          message: "狗修金，球球你打个字吧喵~",
          type: "warning",
        });
        return false;
      }
      return true;
    },
    nike() {
      if (this.nickname.length < 3) {
        this.$message({
          message: "狗修金，账号要大于3个字以上喵~",
          type: "warning",
        });
        return false;
      }
      return true;
    },
    reset() {
      this.username = "";
      this.password = "";
      this.nickname = "";
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
.re {
  position: relative;
  top: -80px;
}
.login-right {
  position: absolute;
  width: 500px;
  height: 600px;
  top: 200px;
  left: 450px;
  box-shadow: 1px 1px 1px 1px rgb(10, 177, 255);
  background-color: rgba(255, 255, 255, 0.5);
}
.login-left {
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
  color: rgb(229, 84, 96);
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
  color: rgb(111, 165, 255);
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
  top: 160px;
  left: 120px;
  width: 60%;
  height: 40px;
  margin-bottom: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 120px;
  /* 增加磨砂质感 */
  /* color: black; */
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
  top: 470px;
  left: 170px;
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
  top: 470px;
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
input::-webkit-input-placeholder {
  /*WebKit browsers*/
  color: rgb(0, 0, 0);
}
.skip {
  position: absolute;
  top: 510px;
  right: 170px;
  color: black;
}
</style>