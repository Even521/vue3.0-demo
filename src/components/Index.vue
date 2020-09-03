<template>
  <el-container>
    <div>
      <!-- 菜单 -->
      <ul>
        <li v-for="item in menus">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import Menu from '../utils/menu.js'
export default {
  name: 'Index',
  setup(){
    const  menus=Menu();
    return {menus};
  }
}
</script>

<style scoped>

</style>