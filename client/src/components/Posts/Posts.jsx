/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Post from './PostCard/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts').then((responce) => responce.json()).then((result) => setPosts(result));
  }, []);

  return (
    <div>
      {posts.length
        ? posts.map(({
          title, id, content, autor, category,
        }) => (
          <Post
            title={title}
            id={id}
            content={content}
            autor={autor}
            scategory={category}
          />
        ))
        : 'netu'}
    </div>
  );
};

export default Posts;
