<template>
    <div class="footer">
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
            <div class="footer-copyright-C">EEEEEEE</div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>