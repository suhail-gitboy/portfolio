import { Commonapi } from "./CommonApi"
import { ServerURL } from "./ServerlUrl"


export const AinputPost = async (data) => {


    const Response = await Commonapi(`${ServerURL}/chat/save`, "POST", { message: data })


    return Response

}


