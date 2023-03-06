import LearnService from "../Services/LearnService.js";



const getAllLearner = async (req, res) => {
    try{
        const learners = await LearnService.getAllLearners();
        res.status(200).json({ data: learners});
    } catch(err){
        res.status(500).send({error: err.message});
    }
}; 

const getSingleLearner = async (req, res) => {
    try{
        const learner = await LearnService.getSingleLearner(req.params.id);
        res.status(201).json({data: learner});
    }catch(err){
        res.status(500).send({err});
    }
};

const AddLearner = async  (req, res) => {

    try {
        const learner = await LearnService.AddLearner(req.body);
        res.status(201).send('New learner added');
    }catch(err){
        res.status(500).send({error: message.err});
    }
};

const UpdateLearner = async (req,res)=>{
    try{
        const learner = await LearnService.UpdateLearner(req.params.id, req.body);
        res.status(201).json({data: learner});
    }catch(err){
        res.status(500).send({error: message.err});
    }
}

const DeleteLearner = async (req,res)=>{
    try{
        const learner = await LearnService.DeleteLearner(req.params.id);
        res.status(201).json({data: learner});
    }catch(err){
        res.status(500).send({error: message.err});
    }
}

export {
    getAllLearner,
    getSingleLearner,
    AddLearner,
    UpdateLearner,
    DeleteLearner,
};