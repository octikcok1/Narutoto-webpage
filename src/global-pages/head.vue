<template>
  <div class="image-container">
    <img class="logo" src="../assets/EE.gif" alt="個人頭貼" />
    <div class="title-text"><a href="#">Narutoto Mod</a></div>
    <button class="menu" @click="showMenu">
      <i class="fa-solid fa-bars fa-lg" style="color: #ffffff"></i>
    </button>
    <div v-if="isMenuVisible" class="list">
      <RouterLink to="/"><i class="fa-solid fa-house fa-lg" style="color: #74C0FC;"></i> 首頁</RouterLink>
      <RouterLink to="/Introduce"><i class="fa-solid fa-circle-info fa-lg" style="color: #2356af;"></i> 介紹</RouterLink>
      <RouterLink to="/"><i class="fa-regular fa-circle-question fa-lg" style="color: #8000ff;"></i> 基本Ｑ＆Ａ</RouterLink>
      <RouterLink to="/"><i class="fa-solid fa-compass fa-rotate-by fa-lg" style="color: #63e6be; --fa-rotate-angle: 315deg;"></i> 教學</RouterLink>
      <RouterLink to="/"><i class="fa-solid fa-download" style="color: #63E6BE;"></i> 模組下載</RouterLink>
      <RouterLink to="/"><i class="fa-solid fa-scale-balanced" style="color: #006eff;"></i> 相關條款</RouterLink>
    </div>
  </div>
</template>



<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isMenuVisible: false,
        };
    },
    methods: {
        showMenu() {
            this.isMenuVisible = !this.isMenuVisible;
            if (this.isMenuVisible) {
                // 添加全局点击事件监听
                document.addEventListener("click", this.handleGlobalClick);
            }
            else {
                // 在菜单关闭时移除全局点击事件监听
                document.removeEventListener("click", this.handleGlobalClick);
            }
        },
        handleGlobalClick(event) {
            // 如果点击事件发生在菜单之外，则关闭菜单
            if (!this.$el.contains(event.target)) {
                this.isMenuVisible = false;
            }
        },
    },
    beforeDestroy() {
        // 在组件销毁前移除全局点击事件监听
        document.removeEventListener("click", this.handleGlobalClick);
    },
    components: { RouterLink }
};
</script>
