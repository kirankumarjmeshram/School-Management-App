
import axios from 'axios'
const API_URL2='/api/admins/all'

export const getAdmins = async () => {
  

  const response = await axios.get(API_URL2)
  console.log(response,'inside function')

  return response?.data
}