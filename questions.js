export class Question {
  static create(question) {
    return fetch("https://podcast-a290f.firebaseio.com/question.json", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json)
      .then(response => console.log(response));
  }
}
