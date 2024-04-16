import { ObjectId } from "mongodb";
import mongoose, { Schema, mongo } from "mongoose";

interface Env {
    DATABASE_STRING: string;
}

const environment: Env = {
    DATABASE_STRING: process.env.SERVER_URI || ''
}

mongoose.connect(environment.DATABASE_STRING, {dbName: 'tekken8'});
mongoose.Promise = global.Promise;


const matchSchema = new Schema({
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