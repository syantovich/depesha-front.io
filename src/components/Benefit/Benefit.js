import "./Benefit.css";
import { SERVER_API } from "../../constants";

const Benefit = ({ img, title, description }) => {
  return (
    <>
      <img src={`${SERVER_API}${img}`} />
      <h5>{title}</h5>
      <p>{description}</p>
    </>
  );
};
export default Benefit;
