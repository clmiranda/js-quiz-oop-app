//@ts-check
import { questions } from "./data/question.js";
import { Quiz } from "./models/Quiz.js";
import { UserInterface } from "./models/UserInterface.js";

/**
 *
 * @param {Quiz} quiz Representa el objeto Quiz
 * @param {UserInterface} userInterface Representa el objeto UserInterface
 */
const renderView = (quiz, userInterface) => {
  if (!quiz.isFinish()) {
    userInterface.showActualQuestion(quiz.getIndexQuestion().title);
    userInterface.showProgressQuiz(
      quiz.indexQuestion + 1,
      quiz.questions.length
    );
    userInterface.showOptionsQuestion(
      quiz.getIndexQuestion().options,
      (optionSelected) => {
        quiz.guessAnswer(optionSelected);
        renderView(quiz, userInterface);
      }
    );
  } else {
    userInterface.showScore(quiz.score);
  }
};
function main() {
  const quiz = new Quiz(questions);
  const userInterface = new UserInterface();
  renderView(quiz, userInterface);
}
main();
