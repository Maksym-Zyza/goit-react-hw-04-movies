import React from 'react';
import style from './Inputs.module.scss';

// export type Register = {
//   onChange: ChangeHandler;
//   onBlur: ChangeHandler;
//   name: string;
//   ref: any;
// };

// export type SelectOption = {
//   value: string;
//   label: string;
// };

// type Props = {
//   label?: string;
//   name: string;
//   options: SelectOption[];
//   register?: (name: string) => Register;
// };

export const Select = ({
  label,
  options,
  name,
  register,
  onChange,
  isSelect,
}) => {
  return (
    <div className={style.inputWrapper}>
      {label ? <label>{label}</label> : null}
      <select
        {...(register ? register(name) : null)}
        name={name}
        onChange={onChange}
        value={isSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
