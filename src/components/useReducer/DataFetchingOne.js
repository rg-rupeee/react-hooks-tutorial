import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setPost('something went wrong');
        setError('somenting went wrong');
      });
  }, []);

  return (
    <div>
      {loading ? loading : post.title}
      <br />
      {error && error}
    </div>
  );
}
export default DataFetchingOne;
