import axios from 'axios'
const API_URL = 'http://localhost:3031/admin/'

//Register admin

const register = async (adminData) => {
    const response = await axios.post(API_URL, adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
}

export default authService