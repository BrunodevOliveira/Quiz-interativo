const form = document.querySelector('.quiz-form')
const inputs = document.querySelectorAll('input')
const buttonContainer = form.querySelector('.text-center')

const paragraphScore = document.createElement('p')

const correctAnswers = ['B', 'B', 'B', 'B']

const getScoreMessage = score => ({
  25: `😐 Sua pontuação foi de: ${score}! Vamos tentar novamente!`,
  50: `🙂 Sua pontuação foi de: ${score}! Tente novamente, pode melhorar!`,
  75: `😉 Sua pontuação foi de: ${score}! Parabéns!`,
  100: `😁 Sua pontuação foi de: ${score}! Excelente! Está cada vez mais próximo da fluência em JavaScript!`   
})[score] || `🤨 Sua pontuação foi de: ${score}! Refaça o ATER e tente novamente!`

const showScore = score => {
    paragraphScore.textContent = getScoreMessage(score)
    paragraphScore.classList.add('text-white', 'bg-success','badge')
    buttonContainer.insertAdjacentElement('beforebegin', paragraphScore)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {

        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    }) 
    
    showScore(score)
})