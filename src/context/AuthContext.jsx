import { useMemo, useState } from 'react'
import { AuthContext } from './auth-context'

const STORAGE_KEY = 'camera-jovi-session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY)
    return savedUser ? JSON.parse(savedUser) : null
  })

  const value = useMemo(
    () => ({
      user,
      login(email, password) {
        if (email !== 'aluno@camerajovi.com' || password !== 'sprint4') {
          return { success: false, message: 'E-mail ou senha inválidos.' }
        }
        const authenticatedUser = { name: 'Equipe Da Facul', email }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(authenticatedUser))
        setUser(authenticatedUser)
        return { success: true }
      },
      logout() {
        localStorage.removeItem(STORAGE_KEY)
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
