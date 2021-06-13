import classNames from 'classnames';
import MathJax from 'react-mathjax';
import style from './DivWithMath.module.scss';

type Props = {
  text: string;
  allowBlock?: boolean;
  className?: string;
};

const DivWithMath = ({ className, text, allowBlock = true }: Props) => (
  <MathJax.Provider>
    {text.split('\n').map((line: string, index: number) => {
      const splited: string[] = line.split('$$');

      if (allowBlock === true && splited.length === 3 && splited[0] === '' && splited[2] === '')
        return (
          <div key={index} className={classNames(className, style.font)}>
            <MathJax.Node formula={splited[1]} />
          </div>
        );

      return (
        <div key={index} className={classNames(className, style.font)}>
          {splited.map((val: string, cnt: number) => {
            if (cnt % 2 === 0) return val;

            return <MathJax.Node inline={true} formula={val} key={cnt} />;
          })}
        </div>
      );
    })}
  </MathJax.Provider>
);

export default DivWithMath;
