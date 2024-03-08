// QUESTION ARRAY
const quizArray = [
    {
        question: "How it will be described, if a variable is defined outside of function?",
        answers: ["Local", "Static", "Global", "Dynamic"],
        correctAnswer: 3
    }, 
    {
        question: "What are variables used for in JavaScript Programs?",
        answers: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which method adds a new item to the end of an array and returns the new length?",
        answers: ["shift()", "return()", "push()", "pop()"],
        correctAnswer: 2
    }, 
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answers: ["Sending a form's contents by email", "Validating a form", "Storing the form's contents to a database file on the server", "None of the above"],
        correctAnswer: 2
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answers: ["Return a value", "Accept parameters", "Accept parameters and Return a value", "All of the above"],
        correctAnswer: 1
    }
   ];

const quizHeader = document.getElementById('question-title');
const questions = document.getElementById('questions');

function setQuestion(num) {
    quizHeader.textContent = quizArray[num].question;
    const answers = quizArray[num].answers;
    document.getElementById('choice1').innerHTML = "1. " + answers[0]
    document.getElementById('choice2').innerHTML = "2. " + answers[1]
    document.getElementById('choice3').innerHTML = "3. " + answers[2]
    document.getElementById('choice4').innerHTML = "4. " + answers[3]
}
