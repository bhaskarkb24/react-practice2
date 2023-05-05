import React, { useRef } from 'react';

export default function UseRefExample() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputContact = useRef();

  const handleSubmit = () => {
    console.log(inputName.current.value);
    console.log(inputEmail.current.value);
    console.log(inputContact.current.value);
  };

  return (
    <>
      <hr />
      <hr />
      <hr />

      <input ref={inputName} type="text" placeholder="Enter Name" />
      <br />
      <input ref={inputEmail} type="email" placeholder="Enter Email" />
      <br />
      <input ref={inputContact} type="number" placeholder="Enter Number" />
      <br />
      <button onClick={handleSubmit}>Click</button>
    </>
  );
}
