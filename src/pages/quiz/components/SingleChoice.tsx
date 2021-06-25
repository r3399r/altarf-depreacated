import { Radio, RadioChangeEvent } from 'antd';

type Props = {
  onChange: (value: string) => void;
  disabled?: boolean;
  n?: number;
};

const SingleChoice = ({ onChange, disabled, n }: Props) => {
  const onRadioChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  const radios = Array.from({ length: n || 4 }, (_: unknown, i: number) => i + 1);

  return (
    <Radio.Group onChange={onRadioChange} disabled={disabled}>
      {radios.map((v: number) => (
        <Radio key={v} value={`${v}`}>
          {v}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default SingleChoice;
