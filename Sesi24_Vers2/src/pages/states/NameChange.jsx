import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NameChange = () => {
  const params = useParams();
  const [anotherName, setAnotherName] = useState('Fikri');
  const [name, setName] = useState(params.name || 'budi');

  const changeName = (e) => {
    // cara 1: useState tambahan
    const oldName = name;
    setName(anotherName);
    setAnotherName(oldName);

    // cara 2: conditional
    // setName(name === 'Budi' ? 'Fikri' : 'Budi')
  };

  return (
    <>
      <p>
        Edit <code>{name}</code> and save to reload.
      </p>
      <button onClick={changeName}>Change name</button>
    </>
  );
};

export default NameChange;

