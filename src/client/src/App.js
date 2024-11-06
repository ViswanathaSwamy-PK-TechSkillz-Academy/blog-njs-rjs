import './App.css';
import PostCreate from "./Posts/PostCreate";
import PostList from "./Posts/PostList";

const App = () => {
  return (
    <div className="App">
      <header>
        Navbar Header should go here
      </header>
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />

        <hr />
        <h1>Posts</h1>
        <PostList />
      </div>
    </div>
  );
}

export default App;
