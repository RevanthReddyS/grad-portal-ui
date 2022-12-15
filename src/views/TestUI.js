import React, { useEffect, useState } from "react";
import axios from "axios";

const TestUI = () => {
  const [albums, setAlbums] = useState([]);

  const formatData = (albData, albImages) => {
    let tempData = [];
    for (const alb of albData) {
      for (const albImg of albImages) {
        if (alb.id === albImg.albumId)
          tempData = [...tempData, { ...alb, ...{ url: albImg.url } }];
      }
    }
    setAlbums(tempData);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((albData) => {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((albImages) => {
          formatData(albData.data, albImages.data);
        });
    });
  }, []);

  console.log("data", albums);
  return (
    <div>
      {albums.length !== 0 &&
        albums.map((alb) => {
          return (
            <div>
              <img src={alb.url} />
              <p>{alb.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TestUI;
