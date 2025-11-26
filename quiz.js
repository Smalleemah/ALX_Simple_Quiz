function checkAnswer() {
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption) {
    document.getElementById('feedback').textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
    document.getElementById('feedback').textContent = "Incorrect. Try again!";
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);


