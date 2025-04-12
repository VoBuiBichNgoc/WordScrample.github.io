import { words } from "./word-list.js"

const wordText = document.querySelector(".word")
const inputField = document.querySelector("input")
const hintText = document.querySelector(".hint span")
const timeText = document.querySelector(".time b")
const refreshBtn = document.querySelector(".refresh-word")
const checkBtn = document.querySelector(".check-word")

let correctWord;


const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split("")
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("")
    hintText.innerText = randomObj.hint
    correctWord = randomObj.word.toLowerCase();
    inputField.value = ""
    inputField.setAttribute("maxlength", correctWord.length) 
    console.log(correctWord)
}
initGame()

const checkWord= ()=>{
    let userWord = inputField.value.toLocaleLowerCase()
    if(!userWord){
        return alert ("please enter a word")
    }
    if (userWord!==correctWord){
        return alert(`${userWord} is not the correct word!`)
    }
    alert(`${userWord.toUpperCase()} is the correct word!`)
    initGame()
}

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", checkWord)