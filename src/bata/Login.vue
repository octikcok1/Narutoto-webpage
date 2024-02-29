<template>
    <div>
        <h2>登入</h2>
        <form @submit.prevent="login">
            <div>
                <label for="usernameOrEmail">使用者名稱或電子郵件:</label>
                <input type="text" id="usernameOrEmail" v-model="usernameOrEmail">
            </div>
            <div>
                <label for="password">密碼:</label>
                <input type="password" id="password" v-model="password">
            </div>
            <button type="submit">登入</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            usernameOrEmail: '',
            password: ''
        };
    },
    methods: {
        async login() {
            // 在這裡向後端發送登入請求，使用 this.usernameOrEmail 和 this.password
            try {
                const response = await fetch('http://localhost:3000/login', {
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
                alert(data.message);
            } catch (error) {
                console.error('登入失敗:', error);
            }
        }
    }
};
</script>