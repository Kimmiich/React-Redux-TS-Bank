import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdrawal from './components/Withdrawal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Redux Bank!</h1>
        <Balance />
        <Deposit />
        <Withdrawal />
      </header>
    </div>
  );
}

export default App;
