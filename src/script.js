let URL = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
var playerName;
var difficulty;
var category;
var playerScore = 0;
const startRest = document.getElementById('start-reset')
const quizbox = document.getElementById('quizbox');
const customizeForm = document.getElementById('form');
customizeForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    playerName = document.getElementById('playername').value;
    const diffCat = document.getElementById('catalogue');
    difficulty = diffCat.options[diffCat.selectedIndex].value;
    const cateCat = document.getElementById('Category');
    category = cateCat.options[cateCat.selectedIndex].value;
    console.log(playerName,difficulty,category);
    const quiz = fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then((response)=> response.json()).then((data)=>{
        console.log(data);
        quizbox.innerHTML = `
            <div id="score-container">
                <div id="score" class="flex justify-between items-center bg-[#A9BFA8] mb-5 px-3 py-2 text-black text-lg font-semibold rounded-xl">
                <h1>${playerName}</h1>
                <p class="flex items-center">Score<span class="w-2"></span><span class="text-2xl"> ${playerScore}</span></p>
                </div>
            </div>
            <div id="maincontainer">
                <div id="heading" class="flex gap-2 justify-between px-4 py-2 text-black items-center bg-[#A9BFA8] font-montserrat rounded-t-sm">
                <h1 class="text-lg font-semibold">${data.results[0].question}</h1>
                <p class="flex"><img class="invert" src="./assets/timericon.svg" alt="timer-icon">15s</p>
                </div>
                <div id="choices" class=" grid grid-cols-2 px-5 py-5 items-center gap-5 bg-[#5E686D]">
                <button class="bg-[#FAFFC5] text-black px-1 py-0 text-lg rounded-md">${data.results[0].incorrect_answers[Math.floor(Math.random()*4)+1]}</button>
                <button class="bg-[#FAFFC5] text-black px-1 py-0 text-lg rounded-md">long address note</button>
                <button class="bg-[#FAFFC5] text-black px-1 py-0 text-lg rounded-md">liquid ammonia nitrate</button>
                <button class="bg-[#FAFFC5] text-black px-1 py-0 text-lg rounded-md">local agent network</button>
                </div>
                <div id="navending" class="flex justify-between px-4 py-2 text-black items-center bg-[#A9BFA8] font-montserrat rounded-b-sm">
                <p><span class="text-xl font-semibold">2 </span>/ 10</p>
                <button class="flex">Next<img class="invert" src="./assets/next.svg" alt="next icon"></button>
                </div>
            </div>
        `
    })
    .catch((Error)=>{
        console.log(Error);
    });
    startRest.classList.toggle("hidden");
    quizbox.classList.toggle("hidden");

});

const generateCustomQuiz = () =>{

};
