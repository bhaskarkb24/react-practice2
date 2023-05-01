import React, { useState } from 'react';

export default function OnclickExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showDetails = () => {
    console.log('Email', email);

    console.log('Password', password);
  };
  return (
    <>
      <br />
      <div>
        <input
          type="email"
          placeholder="Enter EmailID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={showDetails}>LogIn</button>
        <p>Email:{email}</p>
        <p>password:{password}</p>
      </div>
    </>
  );
}
