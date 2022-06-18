const Coach = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    index,
    profile,
    create,
    login,
 
};

async function index(req, res){
    try{
        const coaches = await Coach.findAll();
        res.json(coaches)
    }catch(err){
        res.status(400).json(err);
    }
}
async function profile(req, res){
    req.body.email = Coach._id
    try{
        const coach = await Coach.find({email: req.body.email});
        res.json(coach)
    }catch(err){
        res.status(400).json(err);
    }
}
async function create(req, res) {
    try {
        const user = await Coach.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await Coach.findOne({email: req.body.email});
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch {
        res.status(400).json('Bad Credentials');
    }
}



function createJWT(user) {
    return jwt.sign(
        // data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}