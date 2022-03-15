export class Question {
  /**
   *
   * @param {string} title Representa el titulo de la pregunta
   * @param {string[]} options Representa las opciones de respuesta
   * @param {string} answer Representa la respuesta correcta
   */

  constructor(title, options, answer) {
    this.title = title;
    this.options = options;
    this.answer = answer;
  }
  /**
   *
   * @param {string} option Representa la opcion seleccionada por el usuario
   * @returns {boolean} Retorna true si la opcion es correcta, caso contrario false
   */
  correctAnswer(option) {
    return this.answer === option;
  }
}
