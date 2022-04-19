const form = document.querySelector('.quiz-form')
const inputs = document.querySelectorAll('input')

const correctAnswers = ['B', 'B', 'B', 'B']
const paragraphScore = document.createElement('p')


const respScore = (score) => {
    if(score === 0) {
        paragraphScore.textContent = `🤨 Sua pontuação foi de: ${score}! Refaça o ATER e tente novamente!`
    } else if (score === 25) {
        paragraphScore.textContent = `😐 Sua pontuação foi de: ${score}! Vamos tentar novamente!`
    } else if(score === 50) {
        paragraphScore.textContent = `🙂 Sua pontuação foi de: ${score}! Tente novamente, pode melhorar!`
    } else if (score === 75) {
        paragraphScore.textContent = `😉 Sua pontuação foi de: ${score}! Parabéns!`
    } else {
        paragraphScore.textContent = `😁 Sua pontuação foi de: ${score}! Excelente! Está cada vez mais próximo da fluência em JavaScript!`
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
    
    respScore(score)
})

inputs.forEach(input => { 
    input.addEventListener('click', event => {
        const clickElement = event.target
        clickElement.nextElementSibling.classList.add('test')
        clickElement.nextElementSibling.classList.add('option-checked')
        console.log(clickElement.value)
    })
})