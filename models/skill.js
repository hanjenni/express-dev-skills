const skills = [
    {id: 125223, skill: 'painting', done: true},
    {id: 127904, skill: 'drawing', done: true},
    {id: 139608, skill: 'sculpture', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }
 