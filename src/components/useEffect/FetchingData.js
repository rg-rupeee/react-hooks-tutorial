import axios from 'axios';
import { useEffect, useState } from 'react';

function FetchingData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        console.log(data.data);
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default FetchingData;
