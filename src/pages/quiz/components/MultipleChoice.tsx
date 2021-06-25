import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

type Props = {
  onChange: (value: CheckboxValueType[]) => void;
  disabled?: boolean;
  n?: number;
};

const MultipleChoice = ({ onChange, disabled, n }: Props) => {
  const options = Array.from({ length: n || 5 }, (_: unknown, i: number) => i + 1);

  return (
    <Checkbox.Group
      disabled={disabled}
      onChange={onChange}
      options={options.map((v: number) => ({ label: `${v}`, value: `${v}` }))}
    />
  );
};

export default MultipleChoice;
