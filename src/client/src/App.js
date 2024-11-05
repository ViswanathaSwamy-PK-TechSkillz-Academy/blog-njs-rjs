import './App.css';
import PostCreate from "./PostCreate";

const App = () => {
  return (
    <div className="App">
      <header>
        Navbar Header should go here
      </header>
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
      </div>
    </div>
  );
}

export default App;
