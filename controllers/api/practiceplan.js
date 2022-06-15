const Practice = require('../../models/practiceplan')

module.exports = {
    practiceScheduleList,
    createPracticePlan,
    updatePractice,
    removePracticePlan
};

async function practiceScheduleList(req, res) {
    const practicePlans = await Practice.find({})
    res.json(practicePlans)
}

async function createPracticePlan(req, res) {
    const body = req.body
    const practicePlans = new Practice({
      date: body.date,
      equipment: body.equipment,
      startTime: body.startTime,
      endTime: body.endTime,
      drill: body.drill,
      announcements: body.announcements,
    })
  
    const addPlan = await practicePlans.save()
    res.json(addPlan)
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
  
    const updatePractice= await Practice.findByIdAndUpdate(id, practicePlans
    )
  
    res.json(updatePractice)
  }