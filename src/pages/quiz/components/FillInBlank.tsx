import { Select } from 'antd';

type Props = {
  onChange: (value: string) => void;
  disabled?: boolean;
};

const FillInBlank = ({ onChange, disabled }: Props) => (
  <Select
    style={{ width: 40 }}
    size={'small'}
    showArrow={false}
    onChange={onChange}
    disabled={disabled}
  >
    <Select.Option value="0">0</Select.Option>
    <Select.Option value="1">1</Select.Option>
    <Select.Option value="2">2</Select.Option>
    <Select.Option value="3">3</Select.Option>
    <Select.Option value="4">4</Select.Option>
    <Select.Option value="5">5</Select.Option>
    <Select.Option value="6">6</Select.Option>
    <Select.Option value="7">7</Select.Option>
    <Select.Option value="8">8</Select.Option>
    <Select.Option value="9">9</Select.Option>
    <Select.Option value="-">-</Select.Option>
    <Select.Option value="±">±</Select.Option>
  </Select>
);

export default FillInBlank;
