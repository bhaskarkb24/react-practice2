import React, { useState } from 'react';

export default function OnChangeExample() {
  const [fullName, setFullName] = useState('');
  const fullNameHandler = (e) => {
    console.log(e.target, e.target.value);
    setFullName(e.target.value);
  };
  return (
    <>
      <h2>Full Name: {fullName}</h2>
      <input
        type="text"
        value={fullName}
        placeholder="Enter Full Name"
        onChange={fullNameHandler}
      />
    </>
  );
}
