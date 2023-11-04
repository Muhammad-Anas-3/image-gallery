import React from "react";

function Filter({ selectedFilter, setSelectedFilter, mode }) {
  const optionStyle = {
    color: mode === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgb(76, 69, 69)",
  };

  return (
    <div className="flex justify-center mb-2">
      <h2
        style={{
          color:
            mode === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgb(76, 69, 69)",
        }}
      >
        Select a category :{" "}
      </h2>
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="font-medium rounded bg-transparent"
        style={{
          color:
            mode === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgb(76, 69, 69)",
        }}
      >
        <option value="popular" style={optionStyle}>
          Popular
        </option>
        <option value="latest" style={optionStyle}>
          Latest
        </option>
      </select>
    </div>
  );
}

export default Filter;
