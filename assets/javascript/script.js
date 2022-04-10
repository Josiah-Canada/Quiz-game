//get element by id --> target the question, option1, option2, option3, option4
// var option1 = getelementbyid("option1")
// -------------- the inner choice , using this inner choice  you can compare it with the answer
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-buttons')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currntQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
           button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClassbutton(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.add('wrong')
}

const questions = [
    {
        question: 'Which of these is NOT a programming language?',
        answers: [
            { text: 'html', correct: true },
            { text: 'javascript', correct: false},
            { text: 'python', correct: false},
            { text: 'java', correct: false}
        ]
    },
    {
        question: 'Which of these tags do you use to connect your javascript file to the html?',
        answers: [
            { text: '<h1>', correct: false },
            { text: '<p>', correct: false },
            { text: '<link>', correct: false },
            { text: '<script>', correct: true }
        ]
    },
    {
        question: 'What is the structure of a javascript function?',
        answers: [
            { text: 'var example =', correct: false },
            { text: 'console.log()', correct: false },
            { text: 'function Example()', correct: true },
            { text: 'if () {}', correct: false }
        ]
    },
    {
        question: 'where do you place the tag linking your javascript and html?',
        answers: [
            { text: 'top of the body', correct: false },
            { text: 'bottom of the body', correct: true },
            { text: 'in the head', correct: false },
            { text: 'at the very bottom', correct: false }
        ]
    },
    {
        question: 'what do you call the special caps rule for javascript?',
        answers: [
            { text: 'camping caps', correct: false },
            { text: 'karma caps', correct: false },
            { text: 'camel caps', correct: true },
            { text: 'caramel caps', correct: false }
        ]
    },
    {
        question: 'What do you always name your variable in a function?',
        answers: [
            { text: 'a', correct: false },
            { text: 'q', correct: false },
            { text: 'c', correct: false },
            { text: 'i', correct: true }
        ]
    },
    {
        question: 'Who invented javascript?',
        answers: [
            { text: 'Harriet Tubman', correct: false },
            { text: 'Brenden Eich', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'Tim Berners-Lee', correct: false }
        ]
    },
    {
        question: 'Which of these can javascript efect?',
        answers: [
            { text: 'html', correct: false },
            { text: 'css', correct: false },
            { text: 'neither', correct: false },
            { text: 'both', correct: true }
        ]
    },
    {
        question: 'What is javascripts main function?',
        answers: [
            { text: 'to make things look flashy and cool', correct: false },
            { text: 'to create a well structured website', correct: false },
            { text: 'to make your website perform tasks', correct: true },
            { text: 'to make your coffee have words on in', correct: false }
        ]
    },
    {
        question: 'Is programming fun?',
        answers: [
            { text: 'yes!', correct: true },
            { text: 'no!', correct: false },
            { text: 'maybe', correct: false },
            { text: 'I dont know?', correct: false }
        ]
    }

]