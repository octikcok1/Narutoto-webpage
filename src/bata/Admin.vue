<template>
    <div>
        <div v-if="logged">
            <h1>管理員登入</h1>
            <form @submit.prevent="login">
                <div>
                    <label for="usernameOrEmail">用戶名稱或電子郵件：</label>
                    <input type="text" id="usernameOrEmail" v-model="usernameOrEmail" required>
                </div>
                <div>
                    <label for="password">密碼：</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <button type="submit">登入</button>
                <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
            </form>
        </div>
        <div v-if="loggedIn">
            <!-- 管理員界面的內容 -->
            <h2>管理員界面</h2>
            <Users />
        </div>
    </div>
</template>

<script setup>
import Users from './admin-user.vue'
</script>

<script>
export default {
    data() {
        return {
            usernameOrEmail: '',
            password: '',
            errorMessage: '',
            loggedIn: false,
            logged: true
        };
    },
    methods: {
        async login() {
            try {
                // 向後端發送管理員登入請求
                const response = await fetch('http://localhost:3000/admin/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        usernameOrEmail: this.usernameOrEmail,
                        password: this.password
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // 登入成功，顯示管理員界面
                    this.loggedIn = true
                    this.logged = false
                } else {
                    // 登入失敗，顯示錯誤訊息
                    this.errorMessage = data.message;
                }
            } catch (error) {
                console.error('登入失敗:', error);
                this.errorMessage = '登入失敗，請重試';
            }
        }

    }
};
</script>

<style />