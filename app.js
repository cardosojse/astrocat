const replys = [];
const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const askBtn = document.querySelector(".ask-btn");
const answerBox = document.querySelector(".answer-box");


askBtn.addEventListener("click", () => {
    let r1 = inputOne.value;
    let r2 = inputTwo.value;
    replys.push(r1, r2);
    let answer = replys[Math.floor(Math.random() * replys.length)];
    answerBox.innerText = answer;
});