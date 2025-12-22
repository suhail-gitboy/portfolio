

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const MongoURL = process.env.MONGO_CONFIG


mongoose.connect(MongoURL).then((res) => console.log("connected mongoose")
).catch((err) => {
    console.log(err);

})