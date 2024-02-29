<template>
    <div>
        <h2>註冊</h2>
        <form @submit.prevent="register">
            <div>
                <label for="username">使用者名稱:</label>
                <input type="text" id="username" v-model="username">
            </div>
            <div>
                <label for="email">電子郵件:</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div>
                <label for="password">密碼:</label>
                <input type="password" id="password" v-model="password">
            </div>
            <button type="submit">註冊</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            isAdmin: false,
            isBanned: false
        };
    },
    methods: {
        async register() {
            // 在這裡向後端發送註冊請求，使用 this.username、this.email 和 this.password
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                });
                const data = await response.json();
                alert(data.message);
            } catch (error) {
                console.error('註冊失敗:', error);
            }
        }
    }
};
</script>