import { Dropbox } from 'dropbox';
import _fetch from 'isomorphic-fetch';

let dropbox: Dropbox;

const initDropbox = () => {
  dropbox = new Dropbox({
    accessToken: process.env.REACT_APP_DROPBOX,
    fetch: _fetch,
  });
};

type CommitedFile = {
  contents: Object;
  path: string;
};

export const uploadFile = async (commitedFile: CommitedFile) => {
  if (dropbox === undefined) initDropbox();

  return await dropbox.filesUpload({
    contents: commitedFile.contents,
    path: commitedFile.path,
    mode: { '.tag': 'overwrite' },
  });
};

export const loadFile = async (id: string) => {
  if (dropbox === undefined) initDropbox();

  return await dropbox.filesDownload({
    path: `/toliman/${id}.jpg`,
  });
};
