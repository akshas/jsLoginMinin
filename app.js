import "./styles.css";
import { isValid } from "./utils";
import { Question } from "./questions";

let form = document.querySelector("form");
let input = form.querySelector("input");
let submit = form.querySelector("#submit");
let ul = document.querySelector(".list");
const button = document.querySelector("#popup-btn");
submit.disabled = true;

button.addEventListener("click");
window.addEventListener("load", Question.renderList);
form.addEventListener("submit", check);
input.addEventListener("input", function() {
  submit.disabled = !isValid(input.value);
});
function check(e) {
  e.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    };
    // Async request to server to save server
    Question.create(question).then(() => {
      submit.disabled = false;
      input.value = "";
      input.className = "";
    });
  }
}
// function setUl() {
//   const questions = Question.renderList();
//   if (questions.length) {
//     questions.forEach(item => {
//       ul.innerHTML = `<li>${item.text}</li>`;
//     });
//   } else {
//     ul.innerHTML = "Здесь будет список Ваших вопросов.";
//   }
// // }
// setUl();
