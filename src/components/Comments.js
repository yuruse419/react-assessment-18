import { useState, useEffect } from "react";

const Comments = () => {
  // Insturction:
  // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments.
  // display the comment body on the screen
  // add event listeners to each comment body that when clicked will simply console.log the comment id.

  // you will need to use the useEffect hook. Do this in async / await syntax.

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    console.log(id);
  };

  const displayData = (data) => {
    const listItems = data.map((comment) => {
      return (
        <li key={comment.id} onClick={() => handleClick(comment.id)}>
          {comment.body}
        </li>
      );
    });

    return listItems;
  };

  if (data) {
    return (
      // Replace this with your code.
      <ul>{displayData(data)}</ul>
    );
  }
};

export default Comments;
