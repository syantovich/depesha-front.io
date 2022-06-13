import "./Footer.css";
import ButtonsDownloads from "../ButtonsDownloads/ButtonsDownloads";

const Footer = ({ playmarket, appstore }) => {
  return (
    <footer>
      <ButtonsDownloads
        playmarket={playmarket}
        appstore={appstore}
        direction="column"
      />{" "}
    </footer>
  );
};
export default Footer;
