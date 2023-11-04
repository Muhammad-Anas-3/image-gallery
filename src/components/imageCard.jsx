import React from "react";

function ImageCard({ image, pageURL, mode }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg"
    style={{ color: mode === "dark" ? "rgb(255 255 255 / 90%)" : "rgb(76 69 69)" }}
    >
      <img src={image.webformatURL} alt="error" className="w-full h-80" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Download: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-1 py-4">
          <a
            href={pageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <button className="px-2 py-2 bg-teal-500 hover:bg-teal-700 rounded-lg">
              More Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
