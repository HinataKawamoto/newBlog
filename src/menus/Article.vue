<template>
  <div class="nav">
    <div class="nav-div">
      <div class="div-title">
        <router-link to="/admin/homepage"><strong>首页</strong></router-link>
        <p class="fb">>发布文章</p>
      </div>
      <p class="head">标题：</p>
      <input type="text" class="title" v-model="blogtitle" @blur="blogtitle" />
      <p class="p-article">内容：</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="article"
        v-model="blogcontent"
      ></textarea>
      <button class="btn" @click="report">发表</button>
    </div>
  </div>
</template>

<script>
import { Blog } from "../api/user.js";
export default {
  data() {
    return {
      blogtitle: "",
      blogcontent: "",
    };
  },
  methods: {
    report() {
      // console.log;
      Blog({
        blogid: 0,
        createtime: "",
        userid: 0,
        blogtitle: this.blogtitle,
        blogcontent: this.blogcontent,
      }).then((res) => {
        if (res.code === 200) {
          alert("发布成功");
          this.$router.push({ path: "/note" });
        }
      });
    },
    blogtitle() {
      if (this.blogtitle.length < 1) {
        this.$message({
          message: "标题至少要一个字",
          type: "warning",
        });
        return false;
      }
      return true;
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
.nav {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgb(233, 238, 243);
  z-index: -2;
}
.nav-div {
  position: absolute;
  width: 85%;
  height: 60%;
  left: 260px;
  top: 120px;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.div-title {
  width: 100%;
  height: 10%;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

a {
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 15;
  color: black;
}
.fb {
  position: absolute;
  top: 21px;
  left: 45px;
  font-size: 15px;
  color: rgb(92, 96, 108);
}
.head {
  position: absolute;
  left: 100px;
  top: 100px;
  color: rgb(92, 96, 108);
}
.title {
  position: absolute;
  top: 95px;
  left: 150px;
  width: 25%;
  height: 6%;
  z-index: 1;
}
.p-article {
  position: absolute;
  left: 100px;
  top: 150px;
  color: rgb(92, 96, 108);
}
.article {
  position: absolute;
  top: 150px;
  left: 150px;
  width: 80%;
  height: 50%;
  z-index: 1;
  padding-top: 20px;
  padding-right: -10px;
  resize: none;
  /* 禁止拖动 */
}
.btn {
  position: absolute;
  left: 81%;
  top: 80%;
  width: 8%;
  height: 7%;
  border: none;
  border-radius: 4px;
  background-color: #69b3f0;
  color: white;
  cursor: pointer;
  /* 变鼠标手势 */
}
</style>