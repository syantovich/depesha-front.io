import "./BlockDownloads.css";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Downloads from "../Downloads/Downloads";
import { SERVER_API } from "../../constants";

const BlockDownloads = ({ block, width, delay, frames }) => {
  const [blockElem, setBlockElem] = useState();
  const [errorImage, setErrorImage] = useState(false);
  useEffect(() => {
    if (block) {
      const arrElem = (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          className="blockDownloads"
        >
          <Grid item xs={12} sm={12} md={6} className="blockDownloads_content">
            <h4 className="blockDownloads_content_title">
              {block.data.attributes.title}
            </h4>
            <p className="blockDownloads_content_description">
              {block.data.attributes.description}
            </p>
            <div className="blockDownloads_content_downloads">
              <p className="number">
                <Downloads
                  downloads={block.data.attributes.downloads}
                  delay={delay}
                  frames={frames}
                />
              </p>
              <p className="text">Downloads</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="blockDownloads_picture">
            {!errorImage && (
              <img
                src={`${SERVER_API}${block.data.attributes.img.data.attributes.url}`}
                alt=""
                onError={() => {
                  setErrorImage(true);
                }}
              />
            )}
          </Grid>
        </Grid>
      );
      setBlockElem(arrElem);
    }
  }, [block]);
  return (
    <section>
      <div style={{ width: width }}>{blockElem}</div>
    </section>
  );
};
export default BlockDownloads;
