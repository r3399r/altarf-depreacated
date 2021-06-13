import { GoogleSpreadsheet } from 'google-spreadsheet';

export const getSheet = async (sheetId: string) => {
  const doc = new GoogleSpreadsheet(sheetId);

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_AUTH_CLIENT as string,
    private_key: (process.env.REACT_APP_AUTH_KEY as string).replace(/\\n/g, '\n'),
  });
  await doc.loadInfo(); // loads document properties and worksheets

  return doc;
};
