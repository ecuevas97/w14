// Import components and styles
import { Header } from "./components/Header";       // Title/header component
import { TaskList } from "./components/TaskList";   // Component that displays the list of tasks
import "./App.css";                                 // Optional styles for layout and design

// The main App component
function App() {
  return (
    <div className="app-container"> 
      <Header />        {/* Renders the header/title of the app */}
      <TaskList />      {/* Renders the list of to-do items */}
    </div>
  );
}

export default App; // Exports the App component for use in main.tsx

