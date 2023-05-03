<template>
  <div class="title">
    <img src="../assets/img/unordered-list-outlined.png" alt="" class="img" />
    <p class="word"><strong>博客后台管理</strong></p>
  </div>
</template>

<script>
export default {};
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
.title {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 70px;
  width: 100%;
  background-color: white;
  z-index: -1;
}
.word {
  position: absolute;
  color: rgb(51, 51, 51);
  line-height: 70px;
  left: 280px;
  font-size: 20px;
}
.img {
  position: absolute;
  left: 240px;
  top: 23px;
  width: 1.5%;
}
</style>