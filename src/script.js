let URL = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
var playerName;
var difficulty;
var category;
let score = 0;
let queIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const queIndexx = document.getElementById('qindex');
const startRest = document.getElementById("start-reset");
const quizbox = document.getElementById("quizbox");
const customizeForm = document.getElementById("form");

customizeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  playerName = document.getElementById("playername").value;
  let nameDisplay = document.getElementById("name-display");
  nameDisplay.textContent = playerName;

  const diffCat = document.getElementById("catalogue");
  difficulty = diffCat.options[diffCat.selectedIndex].value;

  const cateCat = document.getElementById("Category");
  category = cateCat.options[cateCat.selectedIndex].value;

  fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
  )
    .then((response) => response.json())
    .then((data) => {
      let qcount = 0;

      const genQuestion = () => {
        const questionData = data.results[qcount];
        const answers = shuffleArray([
          ...questionData.incorrect_answers,
          questionData.correct_answer,
        ]);

        document.getElementById("question").innerHTML = questionData.question;

        const options = [
          document.getElementById("option1"),
          document.getElementById("option2"),
          document.getElementById("option3"),
          document.getElementById("option4"),
        ];

        options.forEach((option, index) => {
          option.innerHTML = answers[index];
          option.style.backgroundColor = "#FAFFC5";
          option.onclick = () => {
            if (option.innerHTML === questionData.correct_answer) {
              option.style.backgroundColor = "green";
              score++;
              document.getElementById("score").innerText = `Score: ${score}`;
            } else {
              option.style.backgroundColor = "red";
            }
            queIndex++;
            queIndexx.innerText = queIndex;

            setTimeout(() => {
              if (qcount < data.results.length - 1) {
                qcount++;
                genQuestion();
              } else {
                showGameOver();
              }
            }, 1000);
          };
        });
      };

      const showGameOver = () => {
        quizbox.classList.add("hidden");
        document.getElementById("game-over").innerHTML = `
          <div id="main-box" class="w-full mt-20 flex flex-col gap-10 justify-center items-center font-poppins text-2xl">
            <p>Congratulations, ${playerName}!</p>
            <p>Your final score is ${score} out of ${data.results.length}.</p>
            <button onclick="location.reload()" class="px-4 py-3 bg-green-600 hover:shadow-xl rounded-md hover:bg-green-500 duration-200 active:bg-green-500">
              Play Again!
            </button>
          </div>`;
        document.getElementById("game-over").classList.remove("hidden");
      };

      genQuestion();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to load quiz. Please try again later.");
    });

  startRest.classList.add("hidden");
  quizbox.classList.remove("hidden");
});
