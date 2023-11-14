<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "Home",
});
</script>

<template>
  <div class="">
    <div class="h-[80vh] bg-slate-50 p-2">
      <TheHeader />
    </div>
  </div>
</template>

<style scoped>
.red {
  background-color: red;
  width: 10px;
  height: 10px;
}

.green {
  background-color: green;
  width: 10px;
  height: 10px;
}

.blue {
  background-color: blue;
  height: 10px;
  width: 10px;
}
</style>
