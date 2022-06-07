import { useQuery } from "@apollo/client";
import { menuApi } from "../api/api";
import { useEffect, useState } from "react";
import { SERVER_API } from "../constants";
import { Stack } from "@mui/material";
import AppStorePNG from "../img/appstore.png";
import GooglePlayPNG from "../img/GooglePlay.png";
import { Grid } from "@mui/material";
import "./Main/Main.css";
import MobileDetect from "mobile-detect";
import Benefits from "./Benefits/Benefits";
import Loading from "./Loading/Loading";
import BlockDownloads from "./BlockDownloads/BlockDownloads";
import Reviews from "./Reviews/Reviews";

const Main = () => {
  const { loading, data, error } = useQuery(menuApi.getMenu);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [plM, setPlM] = useState();
  const [apS, setApS] = useState();
  const [mainimg, setMainimg] = useState();
  const [mainPageWidth, setMainPagewidth] = useState();
  const [detected] = useState(new MobileDetect(window.navigator.userAgent));
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    if (data) {
      setTitle(data.headerContent.data.attributes.title);
      setDescription(data.headerContent.data.attributes.description);
      setPlM(data.headerContent.data.attributes.playmarket);
      setApS(data.headerContent.data.attributes.appstore);
      setMainimg(data.headerContent.data.attributes.img.data.attributes.url);
      setMainPagewidth(
        document.documentElement.clientWidth > 800
          ? data.setting.data.attributes.header_img_width
          : "100%"
      );
      setBackgroundImage(
        data.headerContent.data.attributes.background.data.attributes.url
      );
    }
  }, [data]);
  return (
    <>
      {loading && <Loading />}
      {data && (
        <>
          <div
            className="preview"
            style={{
              backgroundImage: `url(${SERVER_API}${backgroundImage})`,
              backgroundSize: "cover",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              style={{
                width: mainPageWidth,
              }}
            >
              <Grid item xs={12}>
                <h2>{title}</h2>
              </Grid>
              <Grid item xs={12}>
                <p>{description}</p>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} className="applinks">
                  {detected.os() === null || detected.os() === "iOS" ? (
                    <Grid item>
                      <a href={apS}>
                        <img src={AppStorePNG} width={"160px"} eight="50px" />
                      </a>
                    </Grid>
                  ) : (
                    false
                  )}
                  {detected.os() === null || detected.os() === "AndroidOS" ? (
                    <Grid item>
                      <a href={plM}>
                        <img src={GooglePlayPNG} width="160px" height="50px" />
                      </a>
                    </Grid>
                  ) : (
                    false
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <img
                  className="header_img"
                  src={`${SERVER_API}${mainimg}`}
                  alt="page"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </div>
          <div className="after" />
          <Benefits
            width={
              document.documentElement.clientWidth > 800
                ? mainPageWidth
                : "100%"
            }
            benefits={data.benefits}
          />
          <BlockDownloads
            block={data.block3}
            width={mainPageWidth}
            delay={data.setting.data.attributes.delay_downloads}
            frames={data.setting.data.attributes.number_of_frames}
          />
          <Reviews
            reviews={data.reviews}
            defaultImg={
              data.setting.data.attributes.default_person_img.data.attributes
                .url
            }
            width={mainPageWidth}
          />
        </>
      )}
    </>
  );
};
export default Main;
