// Code your solution here
function findMatching(names, target){
    let matchedNames = names.filter(function (name){
        return name.toLowerCase() === target.toLowerCase();
    })
    console.log(matchedNames);
    return matchedNames;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

findMatching(drivers, "Bobby");

function fuzzyMatch(names, target){
    let matchedLetters = names.filter(function (name){
        return name[0].toLowerCase() === target[0].toLowerCase();
    })
    console.log(matchedLetters);
    return matchedLetters;
}

fuzzyMatch(drivers, "s");

function matchName(names, target){
    let matchedNames = names.filter(function (person){
        return person.name.toLowerCase() === target.toLowerCase();
    })
    console.log(matchedNames);
    return matchedNames;
}

matchName(drivers, "Bobby")