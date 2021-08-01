import axios from 'axios';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { getSheet } from './googleSheetService';

const SCORE_PER_QUESTION = 10;

export enum QuestionType {
  SINGLE = 'S',
  MULTIPLE = 'M',
  FILL_IN_BLANK = 'B',
}

export type Question = {
  question: string;
  type: QuestionType;
  options?: number;
  answer: string;
  image: string;
};

export const getQuiz = async (quizId: string) => {
  const res = await axios.get(`/api/quiz/${quizId}`);

  return res.data.questions;
};

export const getQuizOld = async (quizId: string): Promise<Question[]> => {
  const doc = await getSheet('1utxZBaMApMJBPkOwkGo4-p22kC35OmqosZHR8dleJBQ');
  const sheet = doc.sheetsById[quizId];
  const rows = await sheet.getRows();

  return rows.map((v: GoogleSpreadsheetRow) => ({
    question: v.question,
    type: v.type,
    options: Number(v.options),
    answer: v.answer,
    image: v.image,
  }));
};

export const checkUserAnswer = (
  quizInfo: Question[],
  userAnswer: string[],
  scorePerQuestion: number = SCORE_PER_QUESTION,
) =>
  quizInfo.map((q: Question, i: number) => {
    if (userAnswer[i] === undefined) return 0;
    if (q.type !== QuestionType.MULTIPLE) return q.answer === userAnswer[i] ? scorePerQuestion : 0;
    else {
      const thisAnswer = q.answer.split(',');
      const userSays = userAnswer[i].split(',');

      const notInclude = thisAnswer.filter((x: string) => !userSays.includes(x));
      const redundant = userSays.filter((x: string) => !thisAnswer.includes(x));
      const difference = [...notInclude, ...redundant];

      const n = q.options || 5; // how many options
      const k = difference.length; // how many wrongs
      const score = Math.round((1 - (2 * k) / n) * scorePerQuestion * 100) / 100;

      return score < 0 ? 0 : score;
    }
  });
