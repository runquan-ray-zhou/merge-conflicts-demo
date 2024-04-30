function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }

  function addPersonAsFriend(person, fiend) {
    person.friends.push(other);
    return person;

  }

  module.exports = {
    createPerson,
    addPersonAsFriend,
  };