import React, {useState, useEffect} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [posts,setPosts] = useState([]);

  const handleIncreamen = (params) => {
    console.log(params)
    setCount((previous) => previous + 1);
  }

  function handleDecreamen(params){
    console.log(params);
    if (count === 0) return;
      setCount(count - 1);
  }

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
  }, []);

  return(
    <div>
      <div>ini adalah app : {count}</div>
    <button onClick={() => handleIncreamen("tambah")}>increamen</button>
    <button onClick={() => handleDecreamen("kurang")}>decreamen</button>
    <ul>
      {posts.map(post => <li>{post.title}</li>)}
    </ul>
    </div>
  );
};

export default App;

