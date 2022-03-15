// @ts-check
import { Question } from "./Question.js";
export class Quiz {
  indexQuestion = 0;
  score = 0;
  /**
   *
   * @param {Question[]} questions Arreglo de parametros de la clase Question
   */
  constructor(questions) {
    this.questions = questions;
  }
  /**
   *
   * @returns {Question} Retorna la pregunta actual
   */
  getIndexQuestion() {
    return this.questions[this.indexQuestion];
  }

  /**
   *
   * @returns {boolean} Retorna true si el usuario a respondido todas las preguntas
   */
  isFinish() {
    return this.questions.length === this.indexQuestion;
  }

  /**
   *
   * @param {string} answer Retorna la respuesta seleccionada por el usuario
   */
  guessAnswer(answer) {
    if (this.getIndexQuestion().correctAnswer(answer)) {
      this.score++;
    }
    this.indexQuestion++;
  }
}
