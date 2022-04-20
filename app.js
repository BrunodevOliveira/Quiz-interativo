const form = document.querySelector('.quiz-form')
const inputs = document.querySelectorAll('input')

const correctAnswers = ['B', 'B', 'B', 'B']
const paragraphScore = document.createElement('p')
paragraphScore.classList.add('my-5', 'text-white', 'bg-success','badge')

const answerScore = (score) => {

    const feedbackPhrases = {
        score0: `🤨 Sua pontuação foi de: ${score}! Refaça o ATER e tente novamente!`,
        score25: `😐 Sua pontuação foi de: ${score}! Vamos tentar novamente!`,
        score50: `🙂 Sua pontuação foi de: ${score}! Tente novamente, pode melhorar!`,
        socre75: `😉 Sua pontuação foi de: ${score}! Parabéns!`,
        socre100: `😁 Sua pontuação foi de: ${score}! Excelente! Está cada vez mais próximo da fluência em JavaScript!`
    }

    switch (score) {
        case 0:
            paragraphScore.textContent = feedbackPhrases.score0
            break

        case 25:
            paragraphScore.textContent = feedbackPhrases.score25
            break

        case 50:
            paragraphScore.textContent = feedbackPhrases.score50
            break

        case 75:
            paragraphScore.textContent = feedbackPhrases.socre75
            break

        case 100: 
        paragraphScore.textContent = feedbackPhrases.socre100
            break
        
    }

    form.insertAdjacentElement('afterend', paragraphScore)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0

    const answers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    answers.forEach((answer, index) => {

        if(answer === correctAnswers[index]){
            score += 25
        }
    }) 
    
    answerScore(score)
})