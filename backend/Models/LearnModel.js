import mongoose from "mongoose";

const LearnerSchema = mongoose.Schema({
    name: String,
    DateStarted: String,
    DateEnded: String,
    Skills: String,
    Gender: String,
    Image: String,
    StreamCohort: {
        type: String,
        enum : ['PWD','FS', 'DS', 'SF'],
        default: 'PWD'
    },
});

export default mongoose.model('LearnersDB', LearnerSchema)