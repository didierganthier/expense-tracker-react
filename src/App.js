import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";

const App = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;
