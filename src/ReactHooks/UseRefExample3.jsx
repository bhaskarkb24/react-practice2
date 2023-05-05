import { useRef } from 'react';

export default function UseRefExample3() {
  const counter = useRef(0);

  const handleIncreaseCounter = () => {
    counter.current = counter.current + 1;
    console.log('button Clicked', counter.current, 'times');
  };

  return (
    <div>
      <hr />
      <hr />
      <button onClick={handleIncreaseCounter}>Increase counter</button>
    </div>
  );
}
