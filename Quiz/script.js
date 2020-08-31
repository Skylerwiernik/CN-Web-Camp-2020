const numberOfQuestions = 5

function makeQuestion(question, answers, correctIndex) {
    const q = "<p>" + question + "</p>"
    function makeAnswer(a, isCorrect) {
        var ans = "<span>" + a + "</span>"
        ans += "<input type='radio' name='" + question + "' value='"
        if (isCorrect) {
          ans += "true"
        }
        else {
          ans += "false"
        }
        ans += "'>"
        ans += "<br>"
        return ans
    }
    var final = q
    for (var i = 0; i < answers.length; i++) {
      final += makeAnswer(answers[i], i == correctIndex)
    }
    return final
}

const questions = {
  "Question1" : [
    "0",
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4"
  ],
  "Question2" : [
    "0",
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4"
  ],
  "Question3" : [
    "0",
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4"
  ],
  "Question4" : [
    "0",
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4"
  ],
  "Question5" : [
    "0",
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4"
  ]
}
