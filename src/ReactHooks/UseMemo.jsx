import React, { useMemo, useState } from 'react';

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  return (
    <>
      <div>
        <h2>Squared Value:{squaredNum}</h2>
      </div>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Value"
      />
    </>
  );
}

const squareNum = (number) => {
  console.log('Calling SquareNum function');
  return Math.pow(number, 2);
};
