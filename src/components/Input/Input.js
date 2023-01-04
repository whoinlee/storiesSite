import React, { useState } from 'react';
import './Input.scss';

function Input({
  placeholder,
  value,
  inputObject,
  type,
  disabled,
  id,
  callback,
}) {
  const [inputValue, setInputValue] = useState(value);
  const [disabledState, setDisabledState] = useState(disabled);

  const handleSetInputValue = (targetValue) => {
    setInputValue(targetValue);
    inputObject.value = targetValue;
    callback(inputObject, id);
  };

  if (type === 'number') {
    return (
      <div className='input-draft'>
        <span className='number-wrapper'>
          <input
            disabled={disabledState}
            placeholder={placeholder}
            value={inputValue}
            type={type}
            onChange={(e) => handleSetInputValue(e.target.value)}
          />
        </span>
      </div>
    );
  }
  return (
    <div className='input-draft'>
      <input
        disabled={disabledState}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        onChange={(e) => handleSetInputValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
