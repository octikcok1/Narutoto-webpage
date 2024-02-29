<template>
  <div>
    <div id="announcement" class="announcement">
      <p>警告！！！<br>本網頁目前只僅提供電腦版本解析度優化，如有不便敬請見諒！</p>
    </div>
    <div class="title-photo">
      <h1 style="font-size: 10svw;font-family: title;color: #646cff;">Narutoto Mod</h1>
      <h2 style="width: 80svw;" class="blinking" v-html="tooltipText"></h2>
    </div>
    <div class="main">
      <div id="miso" class="introduce">
        <img class="introduce-photo" src="../assets/EE.gif">
        <h1>味噌miso (miso)</h1>
        <div class="card">
          <p>哈囉！大家好我是miso，我是 Narutoto Mod 的開發者
            <br>起因是因為我看到了其他人玩自己開發的模組所以也想自己開發看看
            <br><strong>目前是單人開發，所以更新進度緩慢，希望大家體諒</strong>
            <br>阿，然後我討厭香菇<br>🥣影片內容：多以Minecraft為主，偶爾會有其他遊戲
            <h3>最後，希望大家會喜歡這個模組<br>也可以到我的頻道支持我喔</h3>
          </p>
        </div>
      </div>
    </div>
    <div class="foooter footer">
        <div>
            <h3 class="footer-title">味噌miso (miso)</h3>
            <img class="footer-img" src="../assets/misoooo.png" alt="logo">
        </div>
        <div>
            <div class="footer-subtitle">
                <h4 class="margin underline">Follow us</h4>
                <h4 class="margin underline">About us</h4>
                <h4 class="margin underline">Helper</h4>
                <h4 class="margin underline">Terms of Service</h4>
            </div>
            <div class="footer-manu">
                <h5 class="footer-manu-border"><a href="https://www.youtube.com/@miso9012" target="_blank"><i class="fa-brands fa-youtube fa-lg" style="color: #ff0000;"></i>&nbsp; Youtube</a></h5>
                <h5 class="footer-manu-border"><a href="https://discord.gg/ChyaDYPwmj" target="_blank"><i class="fa-brands fa-discord fa-lg" style="color: #6600ff;"></i>&nbsp; Discord</a></h5>
                <h5 class="footer-manu-border"><a href="https://www.twitch.tv/mm28299620" target="_blank"><i class="fa-brands fa-twitch fa-lg" style="color: #B197FC;"></i>&nbsp; <strong>Twitch</strong></a></h5>
            </div>
            <div class=" footer-manu-1">
                <h5 class="footer-manu-border"><i class="fa-regular fa-circle-user fa-lg" style="color: #ff6600;"></i>&nbsp; Miso</h5>
                <h5 class="footer-manu-border"><i class="fa-solid fa-code fa-lg" style="color: #0041b3;"></i>網站開發者</h5>
            </div>
            <div class=" footer-manu-2">
                <h5 class="footer-manu-border"><RouterLink to="/"><i class="fa-solid fa-headset fa-lg"></i>&nbsp; 幫助</RouterLink></h5>
            </div>
            <div class=" footer-manu-3">
                <h5 class="footer-manu-border"><i class="fa-solid fa-file-pen fa-lg" style="color: #005eff;"></i>&nbsp; 服務條款</h5>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="footer-copyright-C">Copyright © 2024-2024 octikcok. All rights reserved.</div>
        </div>
    </div>
  </div>
</template>


<style scoped>
.introduce {
  max-width: 100svw;
  display: grid;
  margin-top: 10svw;
  justify-content: center;
  align-items: center;
  place-items: center;
}

.introduce-photo {
  height: 30svh;
  width: 30svh;
  padding: 5px;
  border: 5px solid rgb(255, 102, 0, 0.5);
  border-radius: 50%;
}

.title-photo {
  position: absolute;
  filter: brightness(0.8);
  top: 12svh;
  height: 88svh;
  width: 100svw;
  background-image: url("../assets/E.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blinking {
  animation: blink 0.8s ease-in-out 2;
}
</style>

<script>
export default {
  data() {
    return {
      tooltips: [
        "<br>網頁能夠往下滑喔",
        "<br>味噌miso其實有<a style='color: #64cff;' target='_blank' href='https://discord.gg/ChyaDYPwmj'><i class='fa-brands fa-discord'></i> Discord</a>喔 <br>歡迎大家加入",
        "<br><a style='color: aqua;' target='_blank' href='https://youtu.be/PuNcS7JtyP8?si=E5UG3Pc4Md40II_w'>點我你會被rick roll喔</a><br><a style='color: aqua;' target='_blank' href='https://youtu.be/LhmifSc9hnE?si=LQOZtcegSUzwyg1w'>那你更不該點我</a>"
      ],
      currentIndex: 0
    };
  },
  computed: {
    tooltipText() {
      return "小提示" + this.tooltips[this.currentIndex];
    }
  },
  mounted() {
    // 每隔一段时间更新当前提示的索引
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.tooltips.length;
    }, 5000);
  }
}
</script>