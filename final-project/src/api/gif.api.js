import { basePath } from "./config"

export const postGifApi = async (gif) => {
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gif),
    }
    const response = await fetch(`${basePath}/gif`, params)
    const data = await response.json()
    return data
}

export const getGifsApi = async () => {
    const response = await fetch(`http://127.0.0.1:3100/api/gif`)
    const data = await response.json()
    return data
}
