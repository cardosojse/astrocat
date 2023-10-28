const replys = [];
const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const askBtn = document.querySelector(".ask-btn");
const answerBox = document.querySelector(".answer-box");


askBtn.addEventListener("click", () => {
    let r1 = inputOne.value.trim();
    let r2 = inputTwo.value.trim();
    if(r1 && r2 != ''){
        replys.push(r1, r2);
        let answer = replys[Math.floor(Math.random() * replys.length)];
        inputOne.value = '';
        inputTwo.value = '';
        answerBox.innerText = `Aroldo escolheu ${answer}.`;
    }else{
        alert('Você não digitou nada! Miau >:(')
    }
});

if(navigator.userAgent.indexOf('iPhone') > -1 ){
    document.querySelector("[name=viewport]")
     .setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");
}