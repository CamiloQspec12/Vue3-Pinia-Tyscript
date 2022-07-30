<template>
  <section class="container-selft">
    <div class="row mx-0">
      <p class="col-12 text-center" style="font-size: 25px; color: #000000">
        {{ count }}
      </p>
      <p class="col-12 date text-center">Date js example</p>
      <p class="col-12 date text-center">
        {{ getTime }}
      </p>
      <div class="col-6 text-center">
        <el-button type="primary" @click="count += 1">Sumar</el-button>
      </div>
      <div class="col-6 text-center">
        <el-button type="danger" @click="count -= 1">Restar</el-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import dayjs from "dayjs";

export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    getTime(): string {
      return dayjs().format("HH:mm:ss");
    },
  },
};
</script>
<style lang="scss" scoped>
.container-selft {
  width: 100%;
  overflow: auto;
  height: calc(100vh - 450px);
  .el-button:hover {
    box-shadow: 0px 3px 6px #000000;
  }
}
</style>
