<template>
    <div>
        <h1>管理用戶</h1>

        <!-- 列出所有用戶的列表 -->
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user.username }} - {{ user.email }} - 管理員: {{ user.isAdmin ? '是' : '否' }} - 封禁: {{ user.isActive ? '是' : '否' }}

                <!-- 編輯、刪除和封禁按鈕 -->
                <button @click="editUser(user)">編輯</button>
                <button @click="deleteUser(user)">刪除</button>
                <button @click="banUser(user)">封禁</button>
            </li>
        </ul>

        <!-- 創建新用戶的表單 -->
        <form @submit.prevent="createUser">
            <input type="text" v-model="newUser.username" placeholder="用戶名稱" required>
            <input type="email" v-model="newUser.email" placeholder="電子郵件" required>
            <input type="password" v-model="newUser.password" placeholder="密碼" required>
            <label>是否為管理員:</label>
            <input type="checkbox" v-model="newUser.isAdmin">
            <label>是否封禁:</label>
            <input type="checkbox" v-model="newUser.isActive">
            <button type="submit">創建新用戶</button>
        </form>

        <!-- 編輯用戶信息的表單 -->
        <form v-if="selectedUser" @submit.prevent="updateUser">
            <input type="text" v-model="selectedUser.username" required>
            <input type="email" v-model="selectedUser.email" required>
            <input type="password" v-model="selectedUser.password" required>
            <label>是否為管理員:</label>
            <input type="checkbox" v-model="selectedUser.isAdmin">
            <label>是否封禁:</label>
            <input type="checkbox" v-model="selectedUser.isActive">
            <button type="submit">保存更改</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [], // 保存所有用戶的數組
            newUser: { username: '', email: '', password: '', isAdmin: false, isBanned: false }, // 新用戶表單的數據
            selectedUser: null // 用於編輯用戶信息的用戶對象
        };
    },
    methods: {
        async fetchUsers() {
            // 從後端獲取所有用戶
            const response = await fetch('http://localhost:3000/admin/users');
            this.users = await response.json();
        },
        async createUser() {
            // 向後端發送創建新用戶的請求
            const response = await fetch('http://localhost:3000/admin/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.newUser)
            });

            if (response.ok) {
                // 創建成功，重新加載用戶列表
                this.fetchUsers();
                alert('成功創建用戶！')
            }
        },
        async editUser(user) {
            // 設置 selectedUser，顯示編輯表單
            this.selectedUser = { ...user };
        },
        async updateUser() {
            // 向後端發送更新用戶信息的請求
            const response = await fetch(`http://localhost:3000/admin/users/${this.selectedUser.email}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.selectedUser)
            });

            if (response.ok) {
                // 更新成功，重新加載用戶列表
                this.fetchUsers();
                this.selectedUser = null;
            }
        },
        async deleteUser(user) {
            // 向後端發送刪除用戶的請求
            const response = await fetch(`http://localhost:3000/admin/users/${user.email}/delete`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // 刪除成功，重新加載用戶列表
                this.fetchUsers();
                alert('成功刪除用戶！');
            }
        },
        async banUser(user) {
            // 向後端發送封禁用戶的請求
            const response = await fetch(`http://localhost:3000/admin/users/${user.email}/ban`, {
                method: 'POST'
            });

            if (response.ok) {
                // 封禁成功，重新加載用戶列表
                this.fetchUsers();
                alert('成功封禁用戶！')
            }
        }
    },
    mounted() {
        // 在組件加載時加載所有用戶
        this.fetchUsers();
    }
};
</script>
