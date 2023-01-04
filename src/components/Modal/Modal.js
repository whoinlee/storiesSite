import React from 'react';
import Button from '../Button/Button';
import './Modal.scss';

function Modal({ height, width, title, setToggledModal, buttons, children }) {
  return (
    <div className='modal'>
      <div className='modal-content' style={{ height, width }}>
        <div className='modal-header'>
          {title}
          <img
            src='/appAssets/close.svg'
            alt='close'
            onClick={() => setToggledModal(false)}
          />
        </div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <div className='button-container'>
            {buttons?.map((b) => (
              <Button
                key={`button-${title}-${b.id}`}
                type={b.type}
                label={b.label}
                callback={b.callback}
                disabled={b.disabled}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
