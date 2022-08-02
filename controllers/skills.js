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
module.exports = {
    index,
    show
}