const Practice = require('../../models/practiceplan')

module.exports = {
    practiceList,
    createPracticePlan,
    updatePractice,
    removePracticePlan
};

async function practiceList(req, res) {
    const practicePlans = await Practice.find({});
    res.json(practicePlans)
}

async function createPracticePlan(req, res) {
    req.body.user = req.user;
    try{
        const plan = await Practice.create(req.body);
        res.status(200).json(plan)
    }catch(error){
        res.status(400).json(error)
    }
    }
    


async function removePracticePlan(req, res) {
    const id = req.params.id
    await Practice.findByIdAndRemove(id)
    res.status(204).end()
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
        announcements: body.announcements,
    }
  
    const updatePractice= await Practice.findByIdAndUpdate({_id: id}, practicePlans
    )
  
    res.json(updatePractice)
  }