import React from 'react';

function NewsLetter() {
  return (
    <div className="news-letter">
      <div className="news-letter-title">
        <p>NewsLetter</p>
      </div>
      <div className="news-letter-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, inventore?</p>
        <form>
          <input type="text" placeholder="Enter your email" />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
