import React from 'react';
import Button from './Button';
export default function ReusableExample() {
  const onClickHandler = (buttonName) => {
    console.log('Button Clicked', buttonName);
  };

  return (
    <>
      <Button onClick={onClickHandler} name="Click Here" />
      <Button onClick={onClickHandler} name="Button 1" />
      <Button onClick={onClickHandler} name="Button 2" />
      <Button onClick={onClickHandler} name="Button 3" />
      <Button onClick={onClickHandler} name="Button 4" />
    </>
  );
}
