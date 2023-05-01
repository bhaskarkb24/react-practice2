import logo from './logo.svg';
import './App.css';
import One from './Components/One1';
import UseState from './Components/UseState';
import ConditionalComs from './Components/ConditionalComs';
import OnChangeExample from './Components/OnChangeExample';
import OnclickExample from './Components/OnclickExample';
import ReusableExample from './Reusable/ReusableExample';
function App() {
  return (
    <>
      <p>Paragraph</p>
      <One />
      <UseState />
      <ConditionalComs />
      <br />
      <br />
      <OnChangeExample />
      <br />
      <OnclickExample />
      <br />
      <ReusableExample />
    </>
  );
}

export default App;
