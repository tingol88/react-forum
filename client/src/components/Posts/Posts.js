import React, { useEffect, useState } from 'react'
import Post from './Post/Post'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts').then((responce) => responce.json()).then((result) => setPosts(result))
  }, [])

  return (
    <div>
      {posts.length ?
        posts.map(({ title, id, content, createdAt, autor, category }) =>
          <Post
            title={title}
            id={id}
            content={content}
            autor={autor}
            scategory={category} />)
        : 'netu'}
    </div>
  );
}

export default Posts;
