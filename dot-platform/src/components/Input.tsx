import Reeact from 'react';

type InputProps = {
  children: string;
};
const Input = ({ children }: InputProps) => {
  return (
    <label htmlFor="">
      <input id="" name="" type="" value="">
        {children}
      </input>
    </label>
  );
};
