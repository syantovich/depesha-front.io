import "./Benefits.css";
import { useEffect, useState } from "react";
import Benefit from "../Benefit/Benefit";
import { Grid } from "@mui/material";

const Benefits = ({ width, benefits }) => {
  const [benefitsElem, setBenefitsElem] = useState();
  useEffect(() => {
    const newBenefits = benefits.data.map((e) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={e.id}>
          <Benefit
            img={e.attributes.img.data.attributes.url}
            title={e.attributes.title}
            description={e.attributes.description}
          />
        </Grid>
      );
    });
    setBenefitsElem(newBenefits);
  }, [benefits]);
  return (
    <section>
      {benefits && (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ width }}
          className="benefits"
          flexWrap="wrap"
        >
          {benefitsElem}
        </Grid>
      )}
    </section>
  );
};
export default Benefits;
