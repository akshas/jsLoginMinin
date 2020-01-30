import "./styles.css";
import { isValid, createModal } from "./utils";
import { Question } from "./questions";
import { getAuthForm, loginWithEmailAndPassword } from "./getAuthForm";

let form = document.querySelector("#question-form");
let input = form.querySelector("input");
let submit = form.querySelector("#submit");
let ul = document.querySelector(".list");
const button = document.querySelector("#popup-btn");
submit.disabled = true;

button.addEventListener("click", openModal);
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
function authFromHandler(e) {
  e.preventDefault();
  let email = e.target.querySelector("#email").value;
  let password = e.target.querySelector("#password").value;
  loginWithEmailAndPassword(email, password)
    .then(Question.fetch)
    .then(renderModalAfterAuth);
}
function openModal() {
  createModal("Авторизация", getAuthForm());
  document
    .querySelector("#auth")
    .addEventListener("submit", authFromHandler, { once: true });
}

function renderModalAfterAuth(cont) {
  console.log("content", cont);
}
