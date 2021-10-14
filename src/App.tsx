import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdrawal from './components/Withdrawal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="container">
      <header className="row">
        <h1 className="text-center p-3 text-primary text-decoration-underline">
          Hello Redux Bank!
        </h1>
      </header>
      <Balance />
      <Deposit />
      <Withdrawal />
    </main>
  );
}

export default App;
