import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import ProfileCard from "./ProfileCard";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProfileCarousel = ({ profiles, country }) => {
  const [matchingProfiles, setMatchingProfiles] = useState(profiles);
  const [showArrows, setShowArrows] = useState(false);

  const addItem = () => {
    const nextItem = Math.max(1, matchingProfiles.length + 1);
    setMatchingProfiles([...matchingProfiles, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, matchingProfiles.length - 1);
    setMatchingProfiles(matchingProfiles.slice(0, endRange));
  };

  return (
    <div className="App">
      {/* <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div> */}

      <div
        className="carousel-wrapper"
        onMouseEnter={() => {
          setShowArrows(true);
        }}
        onMouseLeave={() => {
          setShowArrows(false);
        }}
      >
        <h2>PROFILES</h2>
        <Carousel
          pagination={false}
          showArrows={true}
          breakPoints={breakPoints}
        >
          {matchingProfiles.map((item, i) => (
            <ProfileCard key={i} profile={item} country={country} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileCarousel;
