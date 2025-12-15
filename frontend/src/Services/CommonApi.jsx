import axios from "axios"

export const Commonapi = async (serverURL, Method, Data) => {


    const config = {
        url: serverURL,
        method: Method,
        data: Data
    }
    try {


        const Response = await axios(config).then(res => res)

        return Response


    } catch (error) {
        throw error

    }
}