import mongoose, { Schema, mongo } from "mongoose";

mongoose.connect(process.env.SERVER_URI);
mongoose.Promise = global.Promise;

const matchSchema = new Schema({
    p1Name: String,
    p1Char: String,
    p2Name: String,
    p2Char: String,
    winner: String,
    youtubeLink: String,
})

const Match = mongoose.models.Match || mongoose.model("Match", matchSchema)
export default Match