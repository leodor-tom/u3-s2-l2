import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async asin => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5Y2NhMThkM2Q0OTAwMTRjZmQ3ZmEiLCJpYXQiOjE2OTQwOTI0NTAsImV4cCI6MTY5NTMwMjA1MH0.fgB8DJQ6GZCMZGZ7c_5mcKN-RG4yiVrx-xXRPLfBdG4",
        },
      });
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
