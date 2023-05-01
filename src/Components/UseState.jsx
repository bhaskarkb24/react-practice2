import React from 'react';
import PropsExample from './PropsExample';
export default function UseState() {
  const cars = [{ name: 'Bugatti', price: '5cr', origin: 'Germany' }];
  return (
    <>
      <div>
        <PropsExample cars={cars} />
      </div>
    </>
  );
}
