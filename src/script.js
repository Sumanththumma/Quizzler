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
    })
    .catch((Error)=>{
        console.log(Error);
    });
    startRest.classList.toggle("hidden");
    quizbox.classList.toggle("hidden");

});

const generateCustomQuiz = () =>{

};
