import { Collapse } from 'antd';
import style from './Homework.module.scss';

const Homework = () => {
  const { Panel } = Collapse;

  const text = `
  A dog is a kind of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={style.main}>
      <Collapse accordion={true}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Homework;
