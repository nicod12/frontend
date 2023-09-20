import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api-deploy-g0f3-dev.fl0.io',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})
