import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser, logoutUser } from '../services/appwrite'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = (userData) => setUser(userData)
  const logout = async () => {
    await logoutUser()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
