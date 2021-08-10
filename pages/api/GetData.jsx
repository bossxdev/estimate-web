import axios from 'axios'

const api = 'http://localhost:4200/process'

export const API_GET_PROCESS = async () => {
  try {
    const result = await axios.get(api)
    return result.data
  } catch (error) {
    console.log(
      '🚀 ~ file: GetAPI.jsx ~ line 8 ~ constAPI_GET_PROCESS= ~ error',
      error
    )
  }
}

export const GET_PAPER_LIST = async () => {
  const result = await axios.get('https://web2pack.co/papers?_sort=id:ASC')
  return result.data
}

export const GET_ENAMEL_LIST = async () => {
  const result = await axios.get(`https://web2pack.co/enamel-prices`)
  return result.data
}
