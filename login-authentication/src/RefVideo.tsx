import React, { useRef, useState } from "react";

export default function VideoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
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
        type="text"
        name="videoUrl"
        ref={inputRef}
        placeholder="Enter Video URL or local path."
      />
      <input type="button" onClick={save} value="Save" />
      {videoUrl && (
        <div>
          <h3>Video Preview</h3>
          <video width="400" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}
      {/* Example of a local video */}
      <h3>Local Video Preview</h3>
      <video width="800" controls>
        <source src={`/videos/video.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

// for local file upload
// import React, { useState } from "react";

// export default function VideoInput() {
//   const [videoUrl, setVideoUrl] = useState<string>("");

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setVideoUrl(url);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="video/*"
//         onChange={handleFileChange}
//       />
//       {videoUrl && (
//         <div>
//           <h3>Video Preview</h3>
//           <video width="400" controls>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support HTML5 video.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// }
