import { SERVER_API } from "../../constants";
import { useEffect, useState } from "react";

const Review = ({ element, defaultImg }) => {
  const [stars, setStars] = useState();
  useEffect(() => {
    if (element) {
      const arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(
          <span
            key={i}
            className={i + 1 <= element.attributes.rating ? "active" : ""}
          />
        );
      }
      setStars(arr);
    }
  }, []);
  return (
    <div className="review">
      <div
        className="userImg"
        style={{
          backgroundImage: `url(${SERVER_API}${
            element.attributes.user_img.data?.attributes.url || defaultImg
          })`,
          backgroundSize: "cover",
        }}
      />
      <div className="name">{element.attributes.name}</div>
      <div className="role">{element.attributes.role}</div>
      <div className="rating">{stars}</div>
      <div>{element.attributes.text} </div>
    </div>
  );
};
export default Review;
