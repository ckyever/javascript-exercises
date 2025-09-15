const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;

    people.forEach((person) =>{
        const currentYear = new Date().getFullYear();
        const endDate = person.yearOfDeath ? person.yearOfDeath : currentYear
        const age = endDate - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
