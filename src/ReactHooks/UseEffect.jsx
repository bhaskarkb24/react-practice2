import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('Name', name);
  }, []);
  useEffect(() => {
    console.log('Contact', contact);
  }, []);
  useEffect(() => {
    console.log('Email', email);
  }, []);
  useEffect(() => {
    console.log('name , email,contact is updated');
  }, [name, contact, email]);

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        type="number"
        placeholder="Enter Number"
      />
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter EmailID"
      />
      <input type="text" />
    </>
  );
}
