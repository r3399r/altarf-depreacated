import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { getSheet } from './googleSheetService';

export const getQuiz = async (quizId: string) => {
  const doc = await getSheet('1utxZBaMApMJBPkOwkGo4-p22kC35OmqosZHR8dleJBQ');
  const sheet = doc.sheetsById[quizId];
  const rows = await sheet.getRows();

  return rows.map((v: GoogleSpreadsheetRow) => ({ question: v.question, image: v.image }));
};
