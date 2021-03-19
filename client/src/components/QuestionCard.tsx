import React from 'react'
// Types
import { AnswerObject } from '../pages/QuizzGame/QuizzGame';
// Styles
import styled from 'styled-components';
import './QuestionCard.css';

type StyledBtnProps = {
  correct: boolean;
  userClicked: boolean;
}

const StyledBtn = styled.button<StyledBtnProps>`
  transition: all 0.5s ease;
  user-select: none;
  font-size: 18px;
  color: #fff;
  width: 100%;
  min-height: 40px;
  background: ${({correct, userClicked}) => 
    correct
      ? '#25ab6d'
      : !correct && userClicked
      ? '#ef1c44'
      : '#5f92b5'};
  &:hover {
    background: ${({correct, userClicked}) => 
      correct
        ? '#25ab6d'
        : !correct && userClicked
        ? '#ef1c44'
        : '#186194'};
  }
`

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
  correct?: boolean;
  key?: string;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <>
      <div className="question-number">
        <span>{questionNumber} / {totalQuestions}</span>
      </div>
      <div className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answers">
        {answers.map(answer => (
          <div className="answer" key={answer}>
            <StyledBtn
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </StyledBtn>
          </div>
        ))}
      </div>
    </>
  )
}

export default QuestionCard