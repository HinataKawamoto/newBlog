<template>
  <div>
    <Header>
      <router-view></router-view>
    </Header>
    <el-card class="el-card-d" shadow="always">
      <div class="infinite-list-wrapper" style="overflow: auto">
        <el-timeline infinite-scroll-disabled="disabled">
          <div v-if="allmessages.length > 0" class="time">
            <el-timeline-item
              v-for="(item, index) in allmessages"
              :key="index"
              :timestamp="item.time"
              placement="top"
            >
              <p>{{ item.createtime }}</p>
              <el-card class="el-card-m" style="height: 120px">
                <h4 class="h4">{{ item.nickname }}:</h4>
                <p class="p">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.boardcontent }}
                </p>
              </el-card>
              <!-- <button class="del" @click="del" :v-model="item.boardid">
                {{ item.boardid }}
              </button> -->
            </el-timeline-item>
          </div>
          <div v-else>
            <el-timeline-item placement="top">
              <el-card class="el-card-m" style="height: 120px">
                <h4>大黄子：</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 说点什么吧😁</p>
              </el-card>
            </el-timeline-item>
          </div>
        </el-timeline>
      </div>
      <div class="el-card-messages">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="输入吐槽"
          maxlength="200"
          v-model="boardcontent"
          style="resize: none"
          class="tc"
        ></el-input>
        <el-button
          type="info"
          round
          class="submit-message"
          @click="submitMessage"
          >留言</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { Board } from "../api/user.js";
import { findAllBoard } from "../api/user.js";
export default {
  components: {
    Header,
  },
  data() {
    return {
      boardcontent: "",
      allmessages: [],
    };
  },
  methods: {
    submitMessage() {
      if (this.message === "") {
        this.$message("写点啥提交也行呀😉");
        return;
      }

      // //  这里往下写调用后端的代码；
      const User = localStorage.getItem("userid");
      Board({
        boardcontent: this.boardcontent,
        userid: User,
      }).then((res) => {
        if (res.code === 200) {
          this.boardcontent = "";
          this.findAll();
        }
      });
    },
    findAll() {
      findAllBoard({
        pageNum: 0,
        pageSize: 0,
      }).then((res) => {
        console.log(res);
        this.allmessages = res.list;
      });
    },
  },
  mounted() {
    this.findAll();
  },
};
</script>

<style scoped>
.infinite-list-wrapper {
  width: 100%;
  height: 500px;
  /* background-color: black; */
}
.submit-message {
  width: 100%;
  letter-spacing: 20px;
  position: relative;
  top: 50px;
}
.time {
  background-color: rgb(10, 177, 255, 0.3);
  font-size: 15px;
  color: brown;
}
.el-card-m {
  background-color: rgb(235, 245, 247, 0.5);

  /* 小 */
}

.el-card-messages {
  float: left;
  /* position: absolute; */
  width: 100%;
}

.submit-message {
  background-color: rgb(10, 177, 255, 0.5);
}
@media screen and (max-width: 3000px) and (min-width: 767px) {
  .el-card-d {
    float: left;
    margin-top: 50px;
    margin-left: 10%;
    width: 80%;
    /* height: 120%; */
    height: 800px;
    background-color: rgb(235, 245, 247, 0.1);
  }
}
/*
  屏幕小于768px的
  */
/* @media screen and (max-width: 768px) and (min-width: 100px) {
  .el-card-d {
    width: 100%;
    height: 100%;
  }
} */
.tc {
  position: relative;
  top: 40px;
  resize: none;
}
.h4 {
  position: absolute;
  top: 30%;
}
.p {
  position: absolute;
  top: 50%;
}
.del {
  position: relative;
  left: 95%;
  top: -30px;
}
</style>