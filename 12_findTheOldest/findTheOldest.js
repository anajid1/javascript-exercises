// const findTheOldest = function(people) {
//   // Check is people empty;
//   if (people.length === 0) return undefined;

//   // Pop off last person in people and pretend they are the oldest
//   var oldestPerson = people.pop();
//   var oldestAge = findAge(oldestPerson);

//   console.log("Default oldest: " + JSON.stringify(oldestPerson));
//   console.log("Default age: " + oldestAge + "\n\n");

//   // Loop through rest of people and find an older person
//   for (const person of people) {
//     console.log("Current person: " + JSON.stringify(person));
//     const age = findAge(person);
//     console.log("Current person's age: " + age + "\n\n");
//     if (age > oldestAge) {
//       oldestPerson = person;
//       oldestAge = age;
//     }
//   }

//   return oldestPerson;
// };


const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => 
    findAge(currentPerson) > findAge(oldestPerson) ? currentPerson : oldestPerson);
}

function findAge(person) {
  if (!person.yearOfDeath)  // Person hasn't died yet
    return new Date().getFullYear() - person.yearOfBirth;
  else
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
