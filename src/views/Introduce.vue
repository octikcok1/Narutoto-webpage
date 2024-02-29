<template>
    <div class="introduce-title">
        <h1>Narutoto Mod - 踏入火影忍者的世界</h1>
        <div class="introduce-main">
            <div class="introduce-body">
                <div class="card">
                    <h2>歡迎來到Narutoto Mod</h2>
                    <p>Narutoto Mod - 一個讓你身臨其境火影忍者世界的Minecraft模組。
                        <br>無論是想成為一名忍者、探索忍者世界的奇蹟，還是與好友共同展開驚險刺激的冒險，這個模組都將滿足你成為火影忍者的願望。
                    </p>
                </div>
                <div style="margin-top: 5svw;" class="card">
                    <h3>主要特點：</h3>
                    <p>
                        選擇忍者：進入遊戲後選擇忍者即可成為火影！
                        <br>忍術技能系統：學習和掌握各種火影忍者的經典忍術，從影分身術到天照，從豪火球到仙人模式，發揮你的忍者技能！
                    </p>
                </div>
                <div style="margin-top: 5svw;" class="card">
                    <h3>可能的BUG：</h3>
                    <p>
                        目前我們的模組開發者Miso還正在開發此模組，僅一人編寫及測試如果有BUG歡迎進入我們的
                        <a href="https://discord.gg/ChyaDYPwmj">Discord</a>
                            或是我們網站開發大大寫的
                            <color style="color: rgb(0, 195, 255);">論壇 </color>
                        <color style="color: brown;">(尚未開放)</color> 提供BUG反饋喔
                    </p>
                </div>
                <div style="margin-top: 5svw;" class="card">
                    <h3>安裝說明：</h3>
                    <p>
                        要安裝Narutoto Mod，只需將模組文件放入Minecraft的mod文件夾，然後啟動遊戲即可。
                        <br>如果需要教學歡迎至<RouterLink to="/">教學</RouterLink>觀看我們的 <color style="color: rgb(255, 83, 83);">"紙片模型"</color> 大大的影片教學你們喔
                        <br>如果照著做仍然有問題也歡迎致我們的Discord中詢問，會有善心人士回答。
                        <br>也有專門的模組專員可以救援你不過他還是個學生，不可能24h在現喔。也有可能會有善心人士出現請耐心等待喔
                    </p>
                </div>
                <div class="introduce-character">
                    <h1>開發團隊</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduce-title {
    position: absolute;
    top: 12svh;
    height: 20.5svh;
    width: 100svw;
    display: block;
    background-color: rgb(82, 82, 82);
    animation: fade-in-up-animation 0.5s;
}

.introduce-main {
    position: absolute;
    top: 20svh;
    margin-top: 0;
    height: 300svh;
    width: 100svw;
    background-color: rgb(30, 30, 30);
    animation: fade-in-up-animation 0.5s;
}

.introduce-body {
    position: relative;
    margin-top: 3svw;
    max-width: 100svw;
    display: grid;
    justify-content: center;
    align-items: center;
    place-items: center;
    animation: fade-in-up-animation 0.5s;
}

.introduce-character {
    margin-top: 5svw;
    background-color: rgb(75, 75, 75);
    width: 100svw;
    height: 100svh;
    justify-content: center;
    align-items: center;
    place-items: center;
    animation: fade-in-up-animation 0.5s;
}

.introduce-character h1 {
    margin-top: 5svw;
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            items: [] // 区块数据
        };
    },
    mounted() {
        // 在页面加载后给每个区块添加动画效果
        this.items = this.items.map(item => {
            return { ...item, fadeIn: true };
        });
    },
    components: { RouterLink }
};
</script>