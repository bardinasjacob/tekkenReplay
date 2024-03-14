import { ObjectId } from "mongodb";
import mongoose, { Schema, mongo } from "mongoose";

mongoose.connect(process.env.SERVER_URI, {dbName: 'tekken8'});
mongoose.Promise = global.Promise;


const matchSchema = new Schema({
    _id: ObjectId,
    p1Name: String,
    p1Char: String,
    p2Name: String,
    p2Char: String,
    winner: String,
    youtubeLink: String,
})

const Match = mongoose.models.Match || mongoose.model("Match", matchSchema)
export default Match