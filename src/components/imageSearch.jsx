import React, { useState } from "react";

function ImageSearch({ searchText, mode }) {
  const [text, setText] = useState("");

    const submit = (e) => {
        e.preventDefault();
        searchText(text)
    }

  return (
    <div className="max-w-sm overflow-hidden mb-10 mx-auto">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className="flex items-center rounded-3xl border border-b-2 border-teal-500 py-2">
          <input
            type="text"
            placeholder="Search For Images..."
            onChange={(e) => setText(e.target.value)}
            className="appearence-none bg-transparent w-full mr-3  px-3 leading-tight focus:outline-none"
            style={{ color: mode === "dark" ? "rgb(255 255 255 / 90%)" : "rgb(76 69 69)" }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-3xl mr-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
