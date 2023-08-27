import "./App.css";
import MainComponent from "./MainComponent";

function App() {
  return (
      <>
        <header className="header">
          <div>This is a multicontainer application</div>
        </header>
        <div className="main">
          <MainComponent />
        </div>
      </>
  );
}

export default App;
