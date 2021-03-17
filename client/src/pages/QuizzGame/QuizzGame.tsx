import React, { useState } from 'react';
// Components
import QuestionCard from '../../components/QuestionCard';
import Layout from '../../components/Layout/Layout';
// Types
import { fetchQuestions, QuestionState, Difficulty } from '../../QuizzAPI';
// Styles
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   html {
//     height: 80vh;
//   }
//   body {
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS: number = 10;

const QuizzGame = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setIsGameOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check users answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      // Save answer in the array of user answer
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, AnswerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS) {
      setIsGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <Layout>
      {isGameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>Start</button>
      ) : null}
      
      {!isGameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading...</p>}

      {!loading && !isGameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!isGameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}
    </Layout>
  );
}

export default QuizzGame;