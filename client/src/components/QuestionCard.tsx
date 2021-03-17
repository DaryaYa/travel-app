import React from 'react'
// Types
import { AnswerObject } from '../pages/QuizzGame/QuizzGame';
// Styles
import styled from 'styled-components';

type StyledBtnProps = {
  correct: boolean;
  userClicked: boolean;
}

const StyledBtn = styled.button<StyledBtnProps>`
  transition: all 0.5s ease;
  :hover {
    background-color: '#e1e2e2';
    opacity: 1;
  }
  cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 0 5px;
    background: ${({correct, userClicked}) => 
      correct
        ? '#3dd28d'
        : !correct && userClicked
        ? '#F32C52'
        : '#f2f2f2'};
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
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div key={answer}>
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
    </div>
  )
}

export default QuestionCard