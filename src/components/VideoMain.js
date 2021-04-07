import React, { useState } from "react";

function VideoMain({ videoInfo }) {
  const [count, setCount] = useState(videoInfo.upvotes);
  const [countDown, setCountDown] = useState(videoInfo.downvotes);

  function handleCountClick() {
    setCount(count + 1);
  }

  function countDownClick() {
    setCountDown(countDown + 1);
  }

  return (
    <div>
      <h2>{videoInfo.title}</h2>
      <p>
        {videoInfo.views} Views | Uploaded {videoInfo.createdAt}
      </p>
      <button onClick={handleCountClick}>{count}👍</button>
      <button onClick={countDownClick}>{countDown}👎</button>
    </div>
  );
}

export default VideoMain;
