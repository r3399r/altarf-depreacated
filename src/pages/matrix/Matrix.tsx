import { Button } from 'antd';
import * as math from 'mathjs';
import { useState } from 'react';
import MathJax from 'react-mathjax';
import * as latexHelper from 'src/util/latexHelper';
import style from './Matrix.module.scss';

const matrixMul = (mat1: number[][], mat2: number[][]) => {
  const mat3: number[][] = math.multiply(mat1, mat2);
  let formula = '';
  formula += latexHelper.matrix(mat1, 6);
  formula += latexHelper.matrix(mat2, 6);
  formula += '=';
  formula += latexHelper.matrix(mat3, 6);

  return formula;
};

const Matrix = () => {
  const [step, setStep] = useState(0);
  const [stateArray, setStateArray] = useState([[[0.1], [0.9]]]);

  const transitionMat: number[][] = [
    [0.5, 0.4],
    [0.5, 0.6],
  ];

  const nextState = () => {
    const next = math.multiply(transitionMat, stateArray[step]);
    setStateArray([...stateArray, next]);
    setStep(step + 1);
  };

  return (
    <div className={style.content}>
      <div>轉移矩陣</div>
      <div>
        <Button onClick={nextState}>下一個</Button>
      </div>
      <MathJax.Provider>
        {Array.from({ length: step + 1 }, (_: any, i: number) => i).map((i: number) => (
          <MathJax.Node key={i} formula={matrixMul(transitionMat, stateArray[i])} />
        ))}
      </MathJax.Provider>
    </div>
  );
};

export default Matrix;
