import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data
  .sort(() => 0.5 - Math.random())
  .map(
    (question) =>
      new Question(
        question.title,
        question.options.sort(() => 0.5 - Math.random()),
        question.answer
      )
  );
