import React from 'react';

export default function PropsExample(props) {
  return (
    <>
      {props.cars.map((value, index) => (
        <>
          <h2 key={index}>
            Name:{value.name} Price:{value.price} Origin:{value.origin}
          </h2>
        </>
      ))}
    </>
  );
}
