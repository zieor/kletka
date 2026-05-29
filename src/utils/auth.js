// src/utils/auth.js
import { reactive } from 'vue'

// Создаем ЕДИНЫЙ реактивный объект (синглтон)
const state = reactive({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    username: localStorage.getItem('username') || 'Здоровяк'
})

export function useAuth() {
    const login = () => {
        state.isLoggedIn = true
        state.username = 'Здоровяк'
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('username', 'Здоровяк')
    }

    const logout = () => {
        state.isLoggedIn = false
        state.username = ''
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('username')
    }

    return {
        isLoggedIn: () => state.isLoggedIn,
        username: () => state.username,
        login,
        logout
    }
}