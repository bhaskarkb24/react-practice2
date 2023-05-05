import React, { useRef } from 'react';

export default function UseRefExample2() {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const handleSubmit = () => {
    console.log(inputEmail.current.value);
    console.log(inputPassword.current.value);
  };

  return (
    <>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />

      <input ref={inputEmail} type="email" placeholder="Enter Email" />
      <br />
      <br />

      <input ref={inputPassword} type="password" placeholder="Enter Password" />
      <br />
      <br />

      <button onClick={handleSubmit}>Click Here</button>
    </>
  );
}
