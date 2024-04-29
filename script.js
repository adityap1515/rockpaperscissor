let rs = prompt("How many rounds: ");

function input() {
    let pinput = prompt("Enter your choice: '0-Stone' '1-Paper' '2-Scissors'");
    pinput = parseInt(pinput);
    if (pinput === 0) {
        return 0;
    } else if (pinput === 1) {
        return 1;
    } else if (pinput === 2) {
        return 2;
    } else {
        alert("Invalid choice");
        return -1; // Returning -1 for an invalid choice
    }
}

let pchoice = null;
let c2 = null;
let m2 = null;

function compchoice() {
    let c1 = Math.random();
    m2 = Math.round(c1 * 100 / 30);

    if (m2 === 0) {
        c2 = 0;
    } else if (m2 === 1) {
        c2 = 1;
    } else {
        c2 = 2;
    }
}

let w = null;

function round() {
    if (c2 === pchoice) {
        console.log("That's a tie");
    } else {
        if ((c2 === 0 && pchoice === 2) || (c2 === 1 && pchoice === 0) || (c2 === 2 && pchoice === 1)) {
            w = "comp";
            console.log("Computer won");
        } else {
            w = "p";
            console.log("Player won");
        }
    }
}

let playerscore = 0;
let computer = 0;

function score() {
    if (w === "p") {
        playerscore++;
    } else if (w === "comp") {
        computer++;
    }
}

function displayscore() {
    console.log("Player score = " + playerscore);
    console.log("Computer score = " + computer);
}

function play() {
    for (let i = 0; i < rs; i++) {
        pchoice = input();
        if (pchoice !== -1) {
            compchoice();
            round();
            score();
            displayscore();
        }
    }
}

play();
