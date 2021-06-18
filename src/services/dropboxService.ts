import { Dropbox, DropboxResponse, files } from 'dropbox';
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

export const listFolder = async (path: string) => {
  if (dropbox === undefined) initDropbox();
  const res: DropboxResponse<files.ListFolderResult> = await dropbox.filesListFolder({
    path,
  });

  return res.result.entries.map(
    (
      entry:
        | files.FolderMetadataReference
        | files.FileMetadataReference
        | files.DeletedMetadataReference,
    ) => entry.name,
  );
};

export const listFiles = async (path: string) => {
  const fileNames = await listFolder(path);

  const res: { name: string; comment: string; link: string }[][] = [];
  await Promise.all(
    fileNames.map(async (file: string) => {
      const arr = file.split('-');

      let link: string;
      const shared = await dropbox.sharingListSharedLinks({
        path: `${path}/${file}`,
        direct_only: true,
      });
      if (shared.result.links.length > 0)
        link = shared.result.links[0].url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      else {
        const createShared = await dropbox.sharingCreateSharedLinkWithSettings({
          path: `${path}/${file}`,
        });
        link = createShared.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      if (res[Number(arr[1])] === undefined)
        res[Number(arr[1])] = [
          {
            name: arr[0],
            comment: arr[2].split('.')[0],
            link,
          },
        ];
      else
        res[Number(arr[1])].push({
          name: arr[0],
          comment: arr[2].split('.')[0],
          link,
        });
    }),
  );

  return res;
};
