const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index.ejs', {
      skills: Skill.getAll()
    });
  }
  
function show(req, res){
    res.render('skills/show.ejs', {
        skill: Skill.getOne(req.params.id)
    })
} 
function newSkill(req, res){
    res.render('skills/new.ejs');
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create
}