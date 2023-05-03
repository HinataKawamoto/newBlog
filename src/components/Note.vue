<template>
  <div>
    <Header> </Header>
    <router-view></router-view>
    <div class="note">
      <router-link to="./admin">
        <button class="punish">发帖</button></router-link
      >
      <div class="article" v-for="(str, index) in allBlog" :key="index">
        <li class="a-word" @click="getID(str)">
          <!-- <router-link to="/note/blog"> -->
          <img src="../assets/img/文章1.png" alt="" class="img" />
          {{ str.blogtitle }}
          <!-- </router-link> -->
          <p class="time">{{ str.createtime }}</p>
        </li>
        <p></p>
      </div>
      <div class="bloc">
        <div class="block">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            class="block"
            :current-page.sync="Page"
            @current-change="getList"
            @size-change="getList"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { findBlog } from "@/api/user";
import Header from "./Header.vue";

export default {
  components: { Header },
  data() {
    return {
      allBlog: [],
      total: 12,
      Page: 0,
    };
  },

  methods: {
    getList() {
      findBlog({
        pageNum: this.Page,
        pageSize: 12,
      }).then((res) => {
        console.log(res);
        this.allBlog = res.list;
        this.total = res.total;
      });
    },
    getID(str) {
      // console.log(str);
      // console.log(str.blogid);
      // localStorage.setItem("blogid", str.blogid);
      this.$router.push({ path: "/note/blog?aid=" + str.blogid });
      // 路径拼接
    },
  },

  mounted() {
    this.getList();
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
.note {
  position: absolute;
  top: 8%;
  left: 20%;
  width: 60%;
  height: 90%;
  background-color: rgb(252, 241, 219, 0.5);
  border-top-left-radius: 2em 5em;
  border-top-right-radius: 1em 5em;
  border-bottom-right-radius: 1em 5em;
  border-bottom-left-radius: 1em 5em;
  z-index: 1;
}
.a {
  position: relative;
}
.punish {
  position: absolute;
  top: 30px;
  left: 50px;
  height: 50px;
  width: 90px;
  border-radius: 35px;
  cursor: pointer;
  border: none;
  /* border-radius: 4px; */
  background-color: rgb(131, 131, 131);
  z-index: 0;
  color: white;
}
.article {
  position: relative;
  top: 100px;
  height: 30px;
  width: 100%;
  border-bottom: 1px rgb(255, 255, 255, 0.4) solid;
  margin-top: 20px;
}
a {
  color: rgb(43, 101, 183);
}
a:hover {
  color: rgb(255, 255, 255, 0.5);
}
.a-word {
  position: relative;
  left: 60px;
  top: 0px;
  font-size: 17px;
  cursor: pointer;
}
.img {
  position: absolute;
  width: 2.5%;
  left: -40px;
  top: -3px;
  cursor: pointer;
}
.bloc {
  position: absolute;
  width: 100%;
  height: 5%;
  top: 90%;
}
.block {
  position: relative;
  margin: 0 30%;
}
.time {
  position: absolute;
  font-size: 5px;
  left: 79%;
  top: 10px;
  color: rgb(43, 101, 183);
}
</style>