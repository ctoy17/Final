const Team = require('../../models/team');

module.exports = {
    teamList,
    createTeam,
    removeTeam,
    updateTeam
};

async function teamList(req, res){
    const teams = await Team.find({});
    res.json(teams)
};

async function createTeam(req, res){
    const teamData = req.body
    try{
        const team = await Team.create(teamData);
        res.status(200).json(team)
    }catch(error){
        res.status(400).json(error)
    }
};
async function removeTeam(req, res){
    const id = req.params.id;
    await Team.findByIdAndDelete(id)
    res.status(204).end()
}

async function updateTeam(req, res){
    const id = req.params.id;
    const team = req.body;
    const teamData = {
        name: team.name,
        sport: team.sport
    }
    const updateTeam = await Team.findByIdAndUpdate({_id: id}, teamData)
    res.json(updateTeam)
};