import { Commonapi } from "./CommonApi"
import { ServerURL } from "./ServerlUrl"


export const AinputPost = async (data) => {


    const Response = await Commonapi(`${ServerURL}/chat/save`, "POST", { message: data })


    return Response

}


export const MessageUpload = async (data) => {
    const Response = await Commonapi(`${ServerURL}/message/about`, "POST", data)
}


