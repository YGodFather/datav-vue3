<template>
  <div class="ys-project-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'ProjectLayout'
});
</script>
<style scoped lang="scss">
.ys-project-layout {
  height: 100%;
  background: green;
}
</style>
