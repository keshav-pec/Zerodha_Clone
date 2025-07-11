import React from "react";

function NotFound() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
          alt="Page Not Found"
          style={{width: "80%", margin: "-2rem auto"}}
        />
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
