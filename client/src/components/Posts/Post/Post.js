const Post = ({ title, id, content, createdAt, autor, category }) => {
  return (<div>
    Название: {title}
    Контент:  {content}
    Автор: {autor}
    Категория: {category}
  </div>);
}

export default Post;
