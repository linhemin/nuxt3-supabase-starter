<script setup lang="ts">
const route = useRoute()

function clickButton() {
  // eslint-disable-next-line no-console
  console.log('click')
}

const items = ref(['😏', '😐', '😑', '😒', '😕'])
function removeItem(toRemove: string) {
  items.value = items.value.filter(item => item !== toRemove)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="i-uil-github text-3xl" />
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <h1>
      测试
    </h1>
    <h1 class="text-3xl font-bold underline">
      点他们可以动画消除
    </h1>
    <ul v-auto-animate class="flex">
      <li
        v-for="item in items"
        :key="item"
        class="text-4xl cursor-pointer border border-gray-300 rounded-2xl p-2 m-2"
        @click="removeItem(item)"
      >
        {{ item }}
      </li>
    </ul>
    <el-button type="primary" @click="clickButton">
      点他
    </el-button>
  </div>
</template>
