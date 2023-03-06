import LearnModel from "../Models/LearnModel.js";

const getAllLearners = async ()=> {
    return await LearnModel.find();
};

const getSingleLearner = async (id) => {
    return await LearnModel.findById(id);
};

const AddLearner = async (learner) => {
    return await LearnModel.create(learner);
};

const UpdateLearner = async (id, learner) => {
    return await LearnModel.findByIdAndUpdate(id, learner)
};

const DeleteLearner = async (id) => {
    return await LearnModel.findByIdAndDelete(id)
};

export default {
    getAllLearners,
    getSingleLearner,
    AddLearner,
    UpdateLearner,
    DeleteLearner,
};

