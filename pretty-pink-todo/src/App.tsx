import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
