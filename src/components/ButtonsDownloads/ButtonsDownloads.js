import { Grid } from "@mui/material";
import { SERVER_API } from "../../constants";
import AppStorePNG from "../../img/appstore.png";
import PlayMarketPNG from "../../img/GooglePlay.png";

const ButtonsDownloads = ({ appstore, playmarket, wm, direction }) => {
  return (
    <Grid
      container
      spacing={2}
      className="applinks"
      justifyContent="center"
      alignItems="center"
      direction={direction}
    >
      <Grid item>
        {wm !== "AndroidOS" && (
          <a href={`${SERVER_API}${appstore}`}>
            <img
              src={AppStorePNG}
              alt="Download from AppStore"
              style={{ width: "160px", height: "50px" }}
            />
          </a>
        )}
      </Grid>
      <Grid item>
        {wm !== "iOS" && (
          <a href={`${SERVER_API}${playmarket}`}>
            <img
              src={PlayMarketPNG}
              alt="Download from AppStore"
              style={{ width: "160px", height: "50px" }}
            />
          </a>
        )}
      </Grid>
    </Grid>
  );
};
export default ButtonsDownloads;
