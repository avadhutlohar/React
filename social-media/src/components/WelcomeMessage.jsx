import React from "react";

const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center className="welcomeMessage">
      <h1 >There are no posts</h1>
      <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Get Posts from Server</button>
    </center>
  );
};

export default WelcomeMessage;
