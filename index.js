var button = document.querySelectorAll('button');
var screen = document.querySelector('#inputScreen');
var screenValue = [];
button.forEach(function(element){
    element.addEventListener("click", function(){
     if(!element.className.match('fun_btn')) {
        screenValue.push(element.value);
        screen.innerText = screenValue.join('');
        console.log(screenValue);
    }

    if (element.id.match('clear')){
        screenValue = [];
        screen.innerText = screenValue;
        console.log(screenValue);
    }

    if (element.id.match('delete')){
        screenValue.pop();
        screen.innerText = screenValue.join('');
        console.log(screenValue);
    }

    if (element.id.match('equalTo')){
        var result = eval(screenValue.join(''));
        screen.innerText = result;
        screenValue = [];
        console.log(eval(screenValue.join('')));
    }
})
});
