const Practice = require('../../models/practiceplan')

module.exports = {
    getAllPractices,
    getCoachPractices,
    createPractice,
    updatePractice,
    removePractice
};

async function getAllPractices(req, res){
    Practice.find().populate('coach').populate('team').populate('date').populate('drill').populate('announcement').exec(function(error, practices){
        res.json(practices);
    })}

async function getCoachPractices(req, res){
    const practices = await Practice.find({coach: req.user._id});
    res.json(practices);
}
async function createPractice(req, res) {
    req.body.practice.coach = req.user._id;
    const practice= new Practice(req.body.practice);
    await practice.save();
    res.json(practice);
    }
    


async function removePractice(req, res) {
    Practice.deleteOne(
        {_id: req.params.id}, 
        async function(error){
            const practice = await Practice.find({coach: req.user._id})
            res.json(practice)
        })
    }

async function updatePractice(req, res) {
    const id = req.params.id
    const body = req.body
    const practicePlans = {
        date: body.date,
        equipment: body.equipment,
        startTime: body.startTime,
        endTime: body.endTime,
        drill: body.drill,
        announcement: body.announcement,
    }
    const updatePractice= await Practice.findByIdAndUpdate({_id: id}, practicePlans)
    res.json(updatePractice)
    }