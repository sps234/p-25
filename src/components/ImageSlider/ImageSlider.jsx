import React from "react";
import { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./styles.css";

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);

  async function fetchImages({ url, page, limit }) {
    try {
      setLoading(true);
      if (url === "") {
        console.log("URL is empty");
        return;
      }
      const url1 = `${url}?page=${page}&limit=${limit}`;
      //   console.log(url1);
      const res = await fetch(url1);
      let data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error in fetching images");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages({ url, page, limit });
    } else {
      console.log("URL is empty");
    }
  }, [url]);

  function handleClick(curIndex) {
    setIndex(curIndex);
    // console.log(images);
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (errorMsg) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <>
      <div className="image-slider">
        <FaCaretLeft
          className="arrow arrow-left"
          size={30}
          onClick={() =>
            handleClick(index == 0 ? images.length - 1 : index - 1)
          }
        />
        <div>
          {images && images.length
            ? images.map((imageItem, curIndex) => (
                <img
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  key={imageItem.id}
                  className={
                    index == curIndex
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              ))
            : null}
        </div>
        <FaCaretRight
          className="arrow arrow-right"
          size={30}
          onClick={() =>
            handleClick(index == images.length - 1 ? 0 : index + 1)
          }
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, i) => (
                <button
                  key={i}
                  className={
                    index == i
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setIndex(i)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}

export default ImageSlider;
