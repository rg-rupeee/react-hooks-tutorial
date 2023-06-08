import { useReducer, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };

    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something went wrong',
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      {state.loading ? state.loading : state.post.title}
      <br />
      {state.error && state.error}
    </div>
  );
}
export default DataFetchingTwo;
