import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { listFiles, listFolder } from 'src/services/dropboxService';
import style from './Homework.module.scss';

const Homework = () => {
  const [folders, setFolders] = useState<string[]>();
  const [currentFolder, setCurrentFolder] = useState<string>();
  const [files, setFiles] = useState<{ name: string; comment: string; link: string }[][]>();
  const [currentNumber, setCurrentNumber] = useState<number>();

  useEffect(() => {
    listFolder('/hw').then((res: string[]) => {
      setFolders(res);
    });
  }, []);

  useEffect(() => {
    if (currentFolder)
      listFiles(`/hw/${currentFolder}`).then(
        (res: { name: string; comment: string; link: string }[][]) => {
          setFiles(res);
        },
      );
  }, [currentFolder]);

  const onFolderClick = (folder: string) => () => {
    setCurrentFolder(folder);
  };

  const onNumberClick = (i: number) => () => {
    setCurrentNumber(i);
  };

  return (
    <div className={style.main}>
      <div>
        {folders &&
          folders.map((folder: string, i: number) => (
            <Button key={i} className={style.btn} onClick={onFolderClick(folder)}>
              {folder}
            </Button>
          ))}
      </div>
      <div>
        {files &&
          files.map((file: { name: string; comment: string; link: string }[], i: number) => (
            <Button key={i} className={style.btn} onClick={onNumberClick(i)}>
              {i}
            </Button>
          ))}
      </div>
      <div className={style.pic}>
        {files &&
          currentNumber &&
          files[currentNumber].map(
            (file: { name: string; comment: string; link: string }, i: number) => (
              <div key={i}>
                <div>{file.name}</div>
                <div>{file.comment}</div>
                <a href={file.link}>
                  <img className={style.img} alt={file.link} src={file.link} />
                </a>
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default Homework;
