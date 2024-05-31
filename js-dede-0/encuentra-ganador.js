const competitions = [
    ["Java", "Python"],
    ["javascript", "Java"],
    ["Python", "javascript"]
];
const results = [1, 0, 1];



function chooseTheWinner(competitions, results) {

    const copyOfCompetitions = [...competitions];

    const java = {
        team: "Java",
        points: 0,
    };
    const python = {
        team: "Python",
        points: 0,
    };
    const javascript = {
        team: "javascript",
        points: 0,
    };
    copyOfCompetitions[0].push(results[0]);
    copyOfCompetitions[1].push(results[1]);
    copyOfCompetitions[2].push(results[2]);

    for (let i = 0; i < copyOfCompetitions.length; i++) {

        if (copyOfCompetitions[i].includes(1) && copyOfCompetitions[i][0] === java.team) {
            java.points += 3;
        } else if (copyOfCompetitions[i].includes(1) && copyOfCompetitions[i][0] === python.team) {
            python.points += 3;
        } else if (copyOfCompetitions[i].includes(1) && copyOfCompetitions[i][0] === javascript.team) {
            javascript.points += 3;
        } 

        if (copyOfCompetitions[i].includes(0) && copyOfCompetitions[i][1] === java.team) {
            java.points += 3;
        } else if (copyOfCompetitions[i].includes(0) && copyOfCompetitions[i][1] === python.team) {
            python.points += 3;
        } else if (copyOfCompetitions[i].includes(0) && copyOfCompetitions[i][1] === javascript.team) {
            javascript.points += 3;
        } 

        for(let j = 0; j < copyOfCompetitions[i].length; j++) {
            if(competitions[i][j] === "Java") {
                competitions[i][j] = java;
            }
            if(competitions[i][j] === "Python") {
                competitions[i][j] = python;
            }
            if(competitions[i][j] === "javascript") {
                competitions[i][j] = javascript;
            }
        }
        
    }

    const finalPoints = [java, python, javascript];
    console.log("The results of all the teams are: ", finalPoints)

    const winnerOfTheCompetition = finalPoints.reduce((accumulator, currentValue) => {
        return accumulator.points > currentValue.points ? accumulator : currentValue;
    }, finalPoints[0]);
    console.log("The winner of the competition is: ", winnerOfTheCompetition);

};

chooseTheWinner(competitions, results);
// EN CONSOLA VEMOS
// The results of all the teams are:  [
//   { team: 'Java', points: 6 },
//   { team: 'Python', points: 3 },
//   { team: 'javascript', points: 0 }
// ]
// The winner of the competition is:  { team: 'Java', points: 6 }