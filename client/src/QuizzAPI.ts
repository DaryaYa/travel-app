import { shuffleArr } from './quizzUtils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
};

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=22&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results.map((questions: Question) => (
    {
      ...questions,
      answers: shuffleArr([
        ...questions.incorrect_answers,
        questions.correct_answer
      ])
    }
  ));
};