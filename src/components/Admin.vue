<template>
  <div>
    <Title></Title>
    <Person></Person>
    <router-view></router-view>
    <div></div>
  </div>
</template>

<script>
import Person from "./Person.vue";
import Title from "../menus/Title.vue";
export default {
  components: {
    Person,
    Title,
  },
};
</script>

<style>
</style>