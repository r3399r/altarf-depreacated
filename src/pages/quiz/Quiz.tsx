import { Button, Modal } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import classNames from 'classnames';
import { sum } from 'mathjs';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DivWithMath from 'src/components/DivWithMath';
import Loading from 'src/components/Loading';
import { checkUserAnswer, getQuiz, Question, QuestionType } from 'src/services/quizServices';
import FillInBlank from './components/FillInBlank';
import MultipleChoice from './components/MultipleChoice';
import SingleChoice from './components/SingleChoice';
import style from './Quiz.module.scss';

const Quiz = () => {
  // const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();

  const [questions, setQuestions] = useState<Question[]>([]);
  // const [formDisable, setFormDisable] = useState<boolean>(false);
  // const [info, setInfo] = useState<{ quizId: string; userName: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [checkResult, setCheckResult] = useState<number[]>();

  useEffect(() => {
    setIsLoading(true);
    getQuiz(location.state as string)
      .then((res: any) => {
        // console.log(res)
        setQuestions(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [location]);

  // const onConfirm = (data: { quizId: string; userName: string }) => {
  //   setIsLoading(true);
  //   getQuiz(data.quizId)
  //     .then((res: Question[]) => {
  //       setInfo(data);
  //       setQuestions(res);
  //       setFormDisable(true);
  //       message.success('題目讀取完成');
  //     })
  //     .catch(() => {
  //       message.error('ID 不存在，請再次確認');
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const onBackClick = () => {
    history.goBack();
  };

  const onChange = (i: number) => (value: string) => {
    const currentAnswer = [...userAnswer];
    currentAnswer[i] = value;
    setUserAnswer(currentAnswer);
  };

  const onCheck = (i: number) => (value: CheckboxValueType[]) => {
    const currentAnswer = [...userAnswer];
    currentAnswer[i] = value.join();
    setUserAnswer(currentAnswer);
  };

  const onSelect = (i: number, n: number) => (value: string) => {
    const currentAnswer = [...userAnswer];
    const ans = currentAnswer[i] ? currentAnswer[i].split(',') : [];
    ans[n] = value;
    currentAnswer[i] = ans.join();
    setUserAnswer(currentAnswer);
  };

  const onSubmit = () => {
    setIsModalVisible(true);
  };

  const onModalConfirm = () => {
    setIsModalVisible(false);
    setCheckResult(checkUserAnswer(questions, userAnswer));
  };

  const onModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={style.main}>
      <Button onClick={onBackClick}>回上一頁</Button>
      {/* <form className={style.info} onSubmit={handleSubmit(onConfirm)} autoComplete="off">

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
      </form> */}
      {isLoading && <Loading />}
      {checkResult && (
        <div>
          總分: {sum(checkResult)}/{questions.length * 10}
        </div>
      )}
      {questions.length > 0 && (
        <div>
          <div className={style.content}>
            {questions.map((q: Question, i: number) => (
              <div
                key={i}
                className={classNames(style.card, {
                  [style.wrong]: checkResult && checkResult[i] !== 10,
                })}
              >
                <DivWithMath text={`${i + 1}. ${q.question}`} />
                {q.image && (
                  <div className={style.image}>
                    <img alt="" role="presentation" src={q.image} />{' '}
                  </div>
                )}
                <div className={style.center}>
                  {checkResult && (
                    <div>
                      得分: {checkResult[i]}，參考答案: {q.answer}
                    </div>
                  )}
                  {q.type === QuestionType.SINGLE && (
                    <SingleChoice
                      n={q.options}
                      onChange={onChange(i)}
                      disabled={checkResult !== undefined}
                    />
                  )}
                  {q.type === QuestionType.MULTIPLE && (
                    <MultipleChoice
                      n={q.options}
                      onChange={onCheck(i)}
                      disabled={checkResult !== undefined}
                    />
                  )}
                  {q.type === QuestionType.FILL_IN_BLANK && (
                    <div className={style.fill}>
                      {q.answer.split(',').map((_v: string, n: number) => (
                        <div key={n}>
                          {n + 1}:{' '}
                          <FillInBlank
                            onChange={onSelect(i, n)}
                            disabled={checkResult !== undefined}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {!checkResult && (
            <div className={style.submitBtn}>
              <Button type="primary" onClick={onSubmit}>
                交卷
              </Button>
            </div>
          )}
        </div>
      )}
      <Modal
        visible={isModalVisible}
        onOk={onModalConfirm}
        onCancel={onModalCancel}
        okText={'確認交卷'}
        cancelText={'再看看'}
        closable={false}
      >
        <p>請再次確認答題結果，確認交卷後將不能再作答</p>
      </Modal>
    </div>
  );
};

export default Quiz;
