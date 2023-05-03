<template>
  <div class="note">
    <div class="title">
      <strong>{{ blog.blogtitle }}</strong>
    </div>
    <div>
      <p class="time">发布时间:{{ blog.createtime }}</p>
    </div>
    <div class="content">{{ blog.blogcontent }}</div>
    <img src="../assets/img/返回.png" alt="" class="back" @click="back" />
  </div>
</template>

<script>
import { searchBlogById } from "@/api/user";
export default {
  data() {
    return {
      blog: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    BlogById() {
      // console.log(this.$route.query);
      const blogid = this.$route.query.aid;
      // 路径跳转
      // const blogid = localStorage.getItem("blogid");
      // console.log(blogid);
      searchBlogById({
        blogid: blogid,
      }).then((res) => {
        // console.log(res);
        // console.log(res[0].blogcontent);
        this.blog = res[0];
        // console.log(this.blog);
        // console.log(this.blog.blogcontent);
      });
    },
  },
  mounted() {
    this.BlogById();
  },
};
</script>

<style scoped>
.note {
  position: absolute;
  top: 8%;
  left: 20%;
  width: 60%;
  height: 90%;
  background-color: rgb(252, 241, 219, 1);
  border-top-left-radius: 2em 5em;
  border-top-right-radius: 1em 5em;
  border-bottom-right-radius: 1em 5em;
  border-bottom-left-radius: 1em 5em;
  z-index: 2;
}
.title {
  position: absolute;

  top: 3%;

  width: 100%;
  text-align: center;
  font-size: 20px;
}
.time {
  position: absolute;
  left: 85%;
  top: 7%;
  font-size: 10px;
}
.content {
  position: absolute;
  width: 100%;
  height: 70%;
  /* background-color: white; */
  top: 130px;
  word-wrap: break-word;
  font-size: 15px;
  text-indent: 2em;
}
.back {
  position: absolute;
  width: 4%;
  top: 92%;
  left: 94%;
}
</style>