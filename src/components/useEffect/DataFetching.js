import axios from 'axios';
import { useEffect, useState } from 'react';

function DataFeching() {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(postId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((data) => {
        console.log(data.data);
        setPost(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type='text'
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      ></input>
      <button onClick={handleClick}>Fetch</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFeching;
