let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNum = Math.floor(Math.random() *3);
	return choices[randomNum];
}


function upperCase (letter) {
	if (letter === "rock") return "Rock";
	if (letter === "paper") return "Paper";
	return "Scissors"
}


function win (userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML =	compScore;
	result_p.innerHTML = `${upperCase(userChoice)} beats ${compChoice}. You won!`
	result_p.classList.add('green');
	setTimeout(function(){result_p.classList.remove('green')}, 1000)
}

function lose(userChoice, compChoice) {
	compScore++;
	compScore_span.innerHTML =	compScore;
	result_p.innerHTML = `${upperCase(compChoice)} beats ${userChoice}. You lost ...!`	
	result_p.classList.add('red');
	setTimeout(function(){result_p.classList.remove('red')}, 1000)
}

function draw(userChoice, compChoice) {
	result_p.innerHTML = ` Draw!`
	result_p.classList.add('amber');
	setTimeout(function(){result_p.classList.remove('amber')}, 1000)
}
	


function game(userChoice) {
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, compChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, compChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, compChoice);
			break;
	}

}

function main() {

	rock_div.addEventListener('click', function() {
		game("rock");
	})

	paper_div.addEventListener('click', function() {
		game("paper");
	})

	scissors_div.addEventListener('click', function() {
	game("scissors");
	})
}

main();