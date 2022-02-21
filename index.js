var InputScreen = document.querySelector('#input');
var AnswerScreen = document.querySelector('#answer');
var buttons = document.querySelector('button');
var deletebtn = document.querySelector('#delete');
var clearbtn = document.querySelector('#clear');
var equalbtn = document.querySelector('#EqualTo');

var ScreenValue = []

clearbtn.addEventListener("click", function(){
    ScreenValue = [''];
    AnswerScreen.innerHTML = 0;
    InputScreen.id = 'Input'
    AnswerScreen.id = 'Answer';
    AnswerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

buttons.forEach(function(btn){


    btn.addEventListener("click", function(){ 
        if (!btn.id.match('delete')) {
            ScreenValue.push(btn.value)
            InputScreen.innerHTML = ScreenValue.join('');

            if (btn.classList.contains('num_btn')) {

                AnswerScreen.innerHTML = eval(ScreenValue.join(''));
            }
        }
    });

 // When erase button is clicked
 if (btn.id.match('delete')) {
    ScreenValue.pop();
    InputScreen.innerHTML = ScreenValue.join('');
    AnswerScreen.innerHTML = eval(ScreenValue.join(''));
}

// When clicked button is evaluate button
if (btn.id.match('equalTo')) {
    InputScreen.id = 'AnswerScreen';
    AnswerScreen.id = 'InputScreen';
    AnswerScreen.style.color = "black";
}

// To prevent undefined error in screen
if (typeof eval(ScreenValue.join('')) == 'undefined') {
    AnswerScreen.innerHTML = 0
}

})
})
