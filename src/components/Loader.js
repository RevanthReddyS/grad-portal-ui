import React, { Fragment } from "react";
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from "react-loading-icons";

const Loader = ({ icon, message }) => {
  const icons = {
    audio: <Audio stroke="#000000" speed={0.75} />,
    ball_triangle: <BallTriangle stroke="#000000" speed={0.75} />,
    bars: <Bars stroke="#000000" speed={0.75} />,
    circles: <Circles stroke="#000000" speed={0.75} />,
    grid: <Grid stroke="#000000" speed={0.75} />,
    hearts: <Hearts stroke="#000000" speed={0.75} />,
    oval: <Oval stroke="#000000" speed={0.75} />,
    puff: <Puff stroke="#000000" speed={0.75} />,
    rings: <Rings stroke="#000000" speed={0.75} />,
    spinning_circles: <SpinningCircles stroke="#000000" speed={0.75} />,
    tail_spin: <TailSpin stroke="#000000" speed={0.75} />,
    three_dots: <ThreeDots stroke="#000000" speed={0.75} />,
  };
  return (
    <Fragment>
      {icons[icon]}
      <p>{message ?? message}</p>
    </Fragment>
  );
};

export default Loader;
