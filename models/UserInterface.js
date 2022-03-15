export class UserInterface {
  constructor() {}
  /**
   *
   * @param {string} title Representa el titulo de la pregunta
   */
  showActualQuestion(title) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = title;
  }
  /**
   *
   * @param {string[]} options Representa las opciones de respuesta
   * @param {function} callback Representa la funcion que se ejecuta al seleccionar una opcion
   */
  showOptionsQuestion(options, callback) {
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    options.forEach((option) => {
      const optionElement = document.createElement("button");
      optionElement.className = "btn btn-primary";
      optionElement.innerHTML = option;
      optionElement.addEventListener("click", () => callback(option));
      optionsList.append(optionElement);
    });
  }
  /**
   *
   * @param {number} score
   */
  showScore(score) {
    const resultHTML = `
        <div class="alert alert-success text-center" role="alert">
            <h3 class="alert-heading">Felicidades!</h3>
            <h4>Tu puntaje es: ${score}</h4>
        </div>
      `;
    const resultHTML2 = `
      <div class="alert alert-danger text-center" role="alert">
      <h3 class="alert-heading">Buen intento!</h3>
      <h4>Tu puntaje es: ${score}</h4>
      </div>
      `;
    const element = document.getElementById("quiz-app");
    element.innerHTML = score < 3 ? resultHTML2 : resultHTML;
  }
  /**
   *
   * @param {number} currentIndex Representa el indice de la pregunta actual
   * @param {number} total Representa el total de preguntas
   */
  showProgressQuiz(currentIndex, total) {
    const progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}
