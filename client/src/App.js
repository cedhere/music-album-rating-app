import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [postsList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div className="App">
      {postsList.map((value, key) => { 
        return <div className="post" key = {value.id}> 
          <div className="user">
            {value.user_id} rated {value.album_id}
          </div>
          <div className="rating">{value.rating}</div> 
          <div className="caption">{value.caption}</div>
        </div>
    })}
    </div>
  );
}

export default App;
