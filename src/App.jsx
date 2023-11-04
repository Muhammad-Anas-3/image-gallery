import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import Navbar from "./components/Navbar";
import Spinner from "./components/loading";
import Filter from "./components/filter";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [mode, setMode] = useState("light");
  const [selectedFilter, setSelectedFilter] = useState("popular");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(24 39 60)";
    }
  };
  useEffect(() => {
    setProgress(20);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${
            import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY
          }&q=${term}&image_type=photo&per_page=51&order=${selectedFilter}`
        );
        setProgress(50);
        if (response.ok) {
          const data = await response.json();
          setImages(data.hits);
          setIsLoading(false);
          setProgress(100);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setIsLoading(true);
    const delay = setTimeout(() => {
      fetchData();
    }, 500); // Add a delay of 500 milliseconds before making the API call

    return () => clearTimeout(delay);
  }, [term, selectedFilter]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar toggleMode={toggleMode} mode={mode} />
      <div className="container mx-auto pt-28">
        {<ImageSearch searchText={(text) => setTerm(text)} mode={mode} />}
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          mode={mode}
        />
        <div
          className="loading-container"
          style={{
            height: "110px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {isloading && <Spinner />}
        </div>
        {!isloading && images.length === 0 && (
          <h1
            className="text-5xl text-center mx-auto "
            style={{
              color:
                mode === "dark"
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgb(76, 69, 69)",
            }}
          >
            No Images Found
          </h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              pageURL={image.pageURL}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
