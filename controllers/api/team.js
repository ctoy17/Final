const Team = require('../../models/team');

module.exports = {
    teamList,
    createTeam,
    // removeTeam,
    // updateTeam
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
}