import React from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Render function for Prismic headless CMS pages
function Youtube() {
  const [modalIsOpen, setModalIsOpen] = React.useState('https://youtu.be/jT6pN0SAleg');
  const [videoUrl] = React.useState("");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }

  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleExerciseComplete = () => console.log("Do something");

  return (
    <div>
      <div>
        <h1>Video</h1>
        <div></div>
      </div>
      <div>
      <form method="submit" action="submit"> 

      <input
      
						type='url'
						value="https://youtu.be/jT6pN0SAleg"
						name='media'
						placeholder='media URL'
						textarea 
						required
						className="form-control"
						aria-label="Large" 
            alt="video URL"
					/>

					<br />
					<input button='submit' type='submit' value=' Play' />
				</form>


        <div>
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={opts}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div>
        </div>
      </Modal>
    </div>
  );
}

export default Youtube;
