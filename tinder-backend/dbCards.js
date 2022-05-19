import Mongoose from "mongoose";

const cardSchema = new Mongoose.Schema({
    name:String,
    imgUrl:String,
})

export default Mongoose.model("Cards",cardSchema)