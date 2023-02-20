import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function FetchData() {
  const [postNumber, setPostNumber] = useState(1);
  const { isLoading, error, data } = useFetch(
    "https://dummyjson.com/posts/" + postNumber
  );

  function nextPost() {
    setPostNumber((oldPost) => oldPost + 1);
  }

  return (
    <div>
      <h4>BLOG</h4>
      <button onClick={nextPost} className="my-button">
        Next Post
      </button>

      <article className="article-container">
        {isLoading ? (
          <h5>Loading post</h5>
        ) : error ? (
          <h5>Error</h5>
        ) : (
          <>
            <h5>{data.title}</h5>
            <div className="tags-container">
              {data.tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <p>{data.body}</p>
            <div className="reactions-container">
              <div className="reaction">
                <span className="heart-container">
                  <i className="fa fa-heart heart-icon"></i>
                  <span className="heart-text">{data.reactions}</span>
                </span>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}

export default FetchData;
