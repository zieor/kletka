// src/utils/auth.js
import { reactive } from 'vue'

const state = reactive({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    user: (() => {
        try {
            return JSON.parse(localStorage.getItem('user'))
        } catch (e) {
            return null
        }
    })()
})

export function useAuth() {
    const register = (email, password, username) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Пользователь с таким email уже существует' }
        }

        const newUser = { email, password, username, id: Date.now() }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        return login(email, password)
    }

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const user = users.find(u => u.email === email && u.password === password)

        if (user) {
            state.isLoggedIn = true
            state.user = { email: user.email, username: user.username, id: user.id }
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('user', JSON.stringify(state.user))
            return { success: true }
        }
        return { success: false, error: 'Неверный email или пароль' }
    }

    const logout = () => {
        state.isLoggedIn = false
        state.user = null
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
    }

    // === НОВЫЙ МЕТОД ===
    const updateProfile = (newData) => {
        if (!state.user) return { success: false }

        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const index = users.findIndex(u => u.id === state.user.id)

        if (index !== -1) {
            // Обновляем пользователя в массиве
            users[index] = { ...users[index], ...newData }
            localStorage.setItem('users', JSON.stringify(users))

            // Обновляем текущую сессию
            state.user = { ...state.user, ...newData }
            localStorage.setItem('user', JSON.stringify(state.user))

            return { success: true }
        }
        return { success: false }
    }

    return {
        isLoggedIn: () => state.isLoggedIn,
        username: () => state.user?.username,
        user: () => state.user,
        register,
        login,
        logout,
        updateProfile  // Экспортируем новый метод
    }
}