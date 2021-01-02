function displayAnswer() {
    document.getElementById('submitButton').disabled = true;
    
    if (document.getElementById('option-1').checked) {
      document.getElementById('option-1-div').style.border = '2px solid red'
      showCorrectAnswer()
    }

    if (document.getElementById('option-2').checked) {
      document.getElementById('option-2-div').style.border = '2px solid green'
    }

    if (document.getElementById('option-3').checked) {
      document.getElementById('option-3-div').style.border = '2px solid red'
      showCorrectAnswer()
    }

    if (document.getElementById('option-4').checked) {
      document.getElementById('option-4-div').style.border = '2px solid red'
      showCorrectAnswer()
    }
}

function showCorrectAnswer() {
  let showAnswer = document.createElement('p')
  showAnswer.innerHTML = 'Show Corrent Answer'
  showAnswer.style.position = 'relative'
  document.getElementById('showanswer').appendChild(showAnswer)
  showAnswer.addEventListener('click', () => {
    document.getElementById('option-2-div').style.border = '3px solid green'
  })
}