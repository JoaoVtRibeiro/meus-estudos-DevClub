let questionButton = document.getElementById("question-button")
let answerDiv = document.getElementById("answer-div")
let questionImg = document.getElementById("question-img")

function buttonClicked(){
    if(answerDiv.style.display === "none"){
        answerDiv.style.display = "block"
        questionImg.style.transform = "rotate(0deg)"
    } else {
        answerDiv.style.display = "none"
        questionImg.style.transform = "rotate(45deg)"
    }

    
}

questionButton.addEventListener("click", buttonClicked)