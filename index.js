var InputScreen = document.querySelector('#input');
var AnswerScreen = document.querySelector('#answer');
var buttons = document.querySelector('button');
var erasebtn = document.querySelector('#erase');
var clearbtn = document.querySelector('#clear');
var equalbtn = document.querySelector('#EqualTo');

var ScreenValue = []

clearbtn.addEventListener("click", function(){
    ScreenValue = [''];
    AnswerScreen.innerHTML = 0;
    InputScreen.className = 'Input'
    AnswerScreen.className = 'Answer';
    AnswerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach(function(btn){


    btn.addEventListener("click", function(){
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            ScreenValue.push(btn.value)
            InputScreen.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(ScreenValue.join(''));

            }

        }
