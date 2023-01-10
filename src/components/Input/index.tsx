import './styles.css'
import React from 'react';

export const Input = (
  type: string,
  className: string,
  placeholder: string,
  require: boolean,
  minLength: number,
) => (
  <input
    type={type}
    className={className}
    minLength={minLength}
    placeholder={placeholder}
    required={require}
  />
);