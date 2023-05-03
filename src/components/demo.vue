<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      a: this.c,
      c: this.b,
      b: 1,
    };
  },
  mounted() {
    this.a = this.b;
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  },
};
</script>

<style>
</style>