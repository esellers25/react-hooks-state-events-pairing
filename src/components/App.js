import video from "../data/video.js";
import VideoMain from "./VideoMain";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoMain videoInfo={video}/>
      <Comments commentsInfo={video}/>
    </div>
  );
}

export default App;
