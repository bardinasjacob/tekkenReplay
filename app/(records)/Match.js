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
},
{ collection: "matchReplays"})

const Match = mongoose.models.matchReplays || mongoose.model("matchReplays", matchSchema)
export default Match