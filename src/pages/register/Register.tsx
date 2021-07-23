import { Button, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from 'src/services/userService';
import style from './Register.module.scss';

const Register = () => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('role', 'student');
  }, [setValue]);

  const onSelectRole = (value: string) => {
    setValue('role', value);
  };

  const onSubmit = (data: any) => {
    registerUser(data);
  };

  return (
    <form className={style.content} onSubmit={handleSubmit(onSubmit)}>
      <div>身分</div>
      <Select defaultValue="student" onChange={onSelectRole}>
        <Select.Option value="student">學生</Select.Option>
        <Select.Option value="teacher">老師</Select.Option>
      </Select>
      <div>姓名</div>
      <Input {...register('name', { required: true })} />
      <div className={style.button}>
        <Button htmlType="submit" type="primary">
          送出
        </Button>
      </div>
    </form>
  );
};

export default Register;
