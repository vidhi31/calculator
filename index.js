document.addEventListener("DOMContentLoaded",function onreadyhandler(){
    var keyboardElement= document.getElementsByClassName("keyboard");
    for (var i = 0 ; i < keyboardElement.length; i++) {
        keyboardElement[i].addEventListener("click",function handler(event){
            var clickedevent=event.target.innerText;
            document.getElementById("screen").value = clickedevent;
            console.log(clickedevent);
            console.log("working");});
        }
});      