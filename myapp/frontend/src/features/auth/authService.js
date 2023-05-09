import axios from 'axios'

const API_URL = '/api/admins/'

const register = async (adminData) => {
  const response = await axios.post(API_URL, adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }

  return response.data
}

const login = async (adminData) => {
  const response = await axios.post(API_URL + 'login', adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => {
  localStorage.removeItem('admin')
}

const authService = {
  register,
  logout,
  login,
  
}

export default authService
