import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className="container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Board >
      </Board>
    </div>
  );
}

export default App;
