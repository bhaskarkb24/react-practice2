import React from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'DECREASE':
      return state - 1;
    case 'INCREASE':
    default:
      return state;
  }
};

export default function UseReducerExample() {
  const [count, dispatch] = useReducer(countReducer, 10);
  const decreaseHandler = () => {
    dispatch({ type: 'DECREASE' });
  };
  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', count: count + 1 });
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decreaseHandler}>Decrease </button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}
