import { useEffect, useState } from "react";

const Downloads = ({ downloads = 0, delay = 0, frames = 60 }) => {
  const [number, setNumber] = useState(0);
  const delta = downloads / frames;
  useEffect(() => {
    if (number < downloads - 1) {
      setTimeout(() => {
        setNumber(number + delta);
      }, delay / frames);
    }
  }, [number]);
  return Math.round(number);
};
export default Downloads;
