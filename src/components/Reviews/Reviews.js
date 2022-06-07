import { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Reviews = ({ reviews, defaultImg, width }) => {
  const [reviewsElem, setReviewsElem] = useState();
  useEffect(() => {
    const newArr = reviews.data.map((e) => {
      return <Review key={e.id} element={e} defaultImg={defaultImg} />;
    });
    setReviewsElem(newArr);
  }, [reviews]);
  return (
    <section>
      <div className="reviews" style={{ width: width }}>
        <AliceCarousel
          items={reviewsElem}
          controlsStrategy={"responsive"}
          disableButtonsControls
          mouseTracking
          responsive={{
            0: {
              items: 1,
            },
            600: { items: 2 },
            1750: {
              items: 3,
            },
          }}
          x
          showSlideInf={true}
        />
      </div>
    </section>
  );
};
export default Reviews;
