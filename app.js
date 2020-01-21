import "./styles.css";
import { isValid } from "./utils";
import { Question } from "./questions";

let form = document.querySelector("form");
let input = form.querySelector("input");
let submit = form.querySelector("#submit");
submit.disabled = true;

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
