import React, { useEffect, useState, useRef } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Button from '../../components/Button/Button';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import { filterByValue } from '../../helpers/helpers';
import './Card.scss';

function Card(props) {
  const {
    type,
    id,
    title,
    actions,
    chartOptions,
    data,
    handleSaveEditedData,
    search,
    handleExternalSearchQuery,
  } = props;

  const cardRef = useRef();
  const [toggledEdit, setToggledEdit] = useState(false);
  const [cardData, setCardData] = useState(data);
  const [isChanged, setIsChanged] = useState(false);

  useDetectOutsideClick(cardRef, () => setToggledEdit(false));

  const handleOnSearchChange = (value) => {
    if (handleExternalSearchQuery) {
      handleExternalSearchQuery(value);
      return;
    }
    const filtered = filterByValue(data, value);
    setCardData(filtered);
  };

  useEffect(() => {
    setCardData(data);
  }, [data]);

  const handleToggleEdit = (boolean) => {
    setToggledEdit(boolean);
  };

  const handleEditData = (inputObject, id) => {
    const newCardData = cardData.map((c) => {
      if (c.id === inputObject.id) {
        c = inputObject;
      }
      return c;
    });
    setIsChanged(JSON.stringify(data) === JSON.stringify(cardData));
    setCardData(newCardData);
  };

  const handleSaveData = () => {
    handleSaveEditedData(cardData, id);
    setToggledEdit(false);
  };

  const addAnimation = () => {
    setTimeout(() => {
      document.querySelector('.overlay').classList.add('animated');
    }, 50);
  };

  return (
    <>
      {toggledEdit && <div className={`overlay ${addAnimation()}`}></div>}

      <div className='card-container'>
        <div className='card'>
          {props.children}
          {(title || search) && (
            <CardHeader
              title={title}
              actions={actions}
              toggledEdit={toggledEdit}
              handleToggleEdit={handleToggleEdit}
              search={search}
              handleOnSearchChange={handleOnSearchChange}
            />
          )}

          {!props.children && (
            <CardBody type={type} chartOptions={chartOptions} data={cardData} />
          )}
        </div>

        <div
          ref={cardRef}
          className={`card card-modal ${toggledEdit ? 'show' : 'hidden'}`}
        >
          {toggledEdit && (
            <>
              <CardHeader
                title={title}
                close='true'
                handleToggleEdit={handleToggleEdit}
              />
              <CardBody
                type={type}
                data={cardData}
                mode='edit'
                id={id}
                handleEditData={handleEditData}
              />
              <div className='actions-footer'>
                <Button
                  type='secondary'
                  label='Cancel'
                  callback={() => setToggledEdit(false)}
                />

                <Button
                  type='primary'
                  label='Save'
                  disabled={isChanged ? false : true}
                  callback={() => handleSaveData()}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
