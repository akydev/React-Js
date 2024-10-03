import { Save } from "@mui/icons-material";
import React, { useRef, useState } from "react";

export default function VideoInput() {
  const inputRef = useRef<HTMLInputElement>(null); // Change to HTMLInputElement
  const [videoUrl, setVideoUrl] = useState<string>("");

  const save = () => {
    if (inputRef.current) {
      // Access the video URL from the input and set it
      setVideoUrl(inputRef.current.value);
    }
  };

  return (
    <div>
      <input
        type="text" // Fixed space issue
        name="videoUrl"
        ref={inputRef} // Use the input reference here
        placeholder="Enter Video URL."
      />
      <input type="button" onClick={save} value="Save" />
      {videoUrl && (
        <div>
          <h3>Video Preview</h3>
          <video width="400" controls>
            <source src={videoUrl} type="video/mp4" />
            {/* preview link is https://www.w3schools.com/html/mov_bbb.mp4 */}
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}
    </div>
  );
}
