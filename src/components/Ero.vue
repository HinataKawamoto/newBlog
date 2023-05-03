<template>
  <div>
    <Header>
      <router-view></router-view>
    </Header>
    <div>
      <img
        src="../assets/img/0GYGN7Z$KG10_HKE`PL9~1W.png"
        alt=""
        class="cs"
        v-if="isShow"
      />
      <img :src="img" alt="" class="setu" />
    </div>
    <input
      type="text"
      class="ero"
      id="r18"
      placeholder="0为非r18 1为r18  2为混合"
      v-model.trim="r18"
      oninput="value=value.replace(/[^0-9.]/g,'')"
    />
    <input
      type="text"
      class="er"
      id="tag"
      placeholder="请输入你想要的tag"
      v-model.trim="tag"
    />

    <button @click="Get" class="get">点击查看</button>
  </div>
</template>

<script>
// import Axios from "axios";
import { Ero, Ero2 } from "../api/user.js";
import Header from "./Header.vue";
export default {
  components: { Header },
  data() {
    return {
      r18: "",
      tag: "",
      img: "",
      isShow: "true",
    };
  },

  methods: {
    Get() {
      var myTag = this.tag.split("," && " ");
      this.isShow = false;
      Ero2({
        // r18: this.r18,
        // tag: myTag,
        // dateAfter: 0,
        // dateBefore: 0,
        // dsc: true,
        // keyword: "",
        // num: 1,
        // proxy: "i.pixiv.re",
        // size: ["regular"],
        // uid: [],
        num: 0,
        r18: this.r18,
        replace_url: "",
        tags: myTag,
      }).then((res) => {
        // console.log(res);
        // console.log(res.data.status);
        if (
          res.data.length === 0 ||
          res.data.code === 404 ||
          res.data.status === 500
        ) {
          this.$message({
            showClose: true,
            message: "未查到此tag,请更换",
            type: "warning",
          });
          return;
        } else {
          this.img = res.data[0].urls.large;
        }
      });
      //   const r18 = this.r18;
      //   const tags = this.tags;
      //   const token = localStorage.token;
      //   var thens = this;
      //   Axios({
      //     method: "POST",
      //     url: "http://47.100.215.126:8080/lolicon/searchPicByEzWay",
      //     //   data: {
      //     //     r18: r18,
      //     //     tags: tags,
      //     //   },
      //     headers: {
      //       token: token,
      //     },
      //   }).then(function (res) {
      //     console.log(res);
      //     console.log(res.data.data[0].urls.original);
      //     thens.img = res.data.data[0].urls.original;
      //   });
      // },
    },
  },
};
</script>

<style scoped>
.setu {
  position: absolute;
  margin: 0 auto;
  width: 30%;
  top: 90px;
  left: 550px;
  /* height: 1000px; */
}
.er {
  position: absolute;
  /* display: inline-block; */
  top: 770px;
  left: 1600px;
  height: 40px;
  margin-bottom: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 120px;

  /* 增加磨砂质感 */
  /* backdrop-filter: blur(10px); */
}
input::-webkit-input-placeholder {
  /*WebKit browsers*/
  color: rgba(255, 255, 255, 1);
}
.ero {
  position: absolute;
  /* display: inline-block; */
  top: 700px;
  left: 1600px;
  height: 40px;
  margin-bottom: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 120px;
  -moz-appearance: textfield;
  /* 增加磨砂质感 */
  backdrop-filter: blur(10px);
}
.get {
  position: absolute;
  top: 850px;
  left: 1630px;
  width: 100px;
  height: 30px;
  margin: 0 7px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #69b3f0;
  color: white;
  cursor: pointer;
}
.cs {
  position: absolute;
  top: 400px;
  left: 800px;
}
</style>