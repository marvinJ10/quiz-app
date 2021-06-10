import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:1337/api'

export const saveRequest = async (username: string, score: number,  difficulty: string) => {
  try {
    const payload = {username, score, difficulty}
    const savePayload: AxiosResponse = await axios.post(
      baseUrl,
      payload
      )
    console.log('recieved payload from backend: ', savePayload)
    return savePayload
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserScores = async () => {
  try {
    const payload: AxiosResponse = await axios.get(baseUrl)

    console.log('recieved payload in services api: ', payload.data)
    return await payload.data

  } catch (error) {
    throw new Error(error)
  }
}