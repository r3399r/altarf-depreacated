import { Button, Input, message, Upload } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DivWithMath from 'src/components/DivWithMath';
import { uploadFile } from 'src/services/dropboxService';
import { getQuiz } from 'src/services/quizServices';
import style from './Quiz.module.scss';

const Quiz = () => {
  const { register, handleSubmit } = useForm();

  const [questions, setQuestions] = useState<{ question: string; image: string }[]>([]);
  const [formDisable, setFormDisable] = useState<boolean>(false);
  const [info, setInfo] = useState<{ quizId: string; userName: string }>();

  const onConfirm = (data: { quizId: string; userName: string }) => {
    getQuiz(data.quizId)
      .then((res: { question: string; image: string }[]) => {
        setInfo(data);
        setQuestions(res);
        setFormDisable(true);
        message.success('題目讀取完成');
      })
      .catch(() => {
        message.error('ID 不存在，請再次確認');
      });
  };

  const uploadImage = (i: number) => (file: File) => {
    const fileExt = file.name.split('.').pop();

    if (info === undefined) throw Error('Something went wrong.');

    uploadFile({ contents: file, path: `/quiz/${info.quizId}/${info.userName}-${i}.${fileExt}` })
      .then(() => {
        message.success(`第 ${i} 題上傳成功`);
      })
      .catch(() => {
        message.error(`第 ${i} 題上傳失敗，請通知老師`);
      });

    return false;
  };

  return (
    <div className={style.main}>
      <form className={style.info} onSubmit={handleSubmit(onConfirm)} autoComplete="off">
        <div>
          試卷 ID
          <Input
            className={style.input}
            placeholder="請輸入試卷 ID"
            {...register('quizId', { required: true })}
            disabled={formDisable}
          />
        </div>
        <div>
          名字
          <Input
            className={style.input}
            placeholder="請輸入名字"
            {...register('userName', { required: true })}
            disabled={formDisable}
          />
        </div>
        <Button htmlType="submit" disabled={formDisable}>
          OK
        </Button>
      </form>
      {questions.length > 0 && (
        <div className={style.content}>
          {questions.map((q: { question: string; image: string }, i: number) => (
            <div key={i} className={style.card}>
              <DivWithMath text={`${i + 1}. ${q.question}`} />
              {q.image && (
                <div className={style.image}>
                  <img alt="" role="presentation" src={q.image} />{' '}
                </div>
              )}
              <div className={style.right}>
                <Upload beforeUpload={uploadImage(i + 1)}>
                  <Button>上傳計算過程</Button>
                </Upload>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
