const skills = [
    {id: 125223, skill: 'painting', done: true},
    {id: 127904, skill: 'drawing', done: true},
    {id: 139608, skill: 'sculpture', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }
 