import { menuApi } from "../../api/api";
import Loading from "../Loading/Loading";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SERVER_API } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Grid } from "@mui/material";

const Header = () => {
  const { loading, data, error } = useQuery(menuApi.getLogo);
  const [logo, setLogo] = useState();
  const [settings, setSetting] = useState();
  const [logoWidth, setLogoWidth] = useState();
  const [logoHeight, setLogoHeight] = useState();
  useEffect(() => {
    if (data) {
      setLogo(data.logo.data.attributes.logo.data.attributes.url);
      setLogoHeight(data.setting.data.attributes.logo_height);
      setLogoWidth(data.setting.data.attributes.logo_width);
    }
  }, [data]);
  if (data) {
  }
  return (
    <>
      {loading && <Loading />}
      {data && (
        <header>
          <img
            src={`${SERVER_API}${logo}`}
            alt="Logo"
            style={{ width: logoWidth, height: logoHeight }}
          />
          <Grid container className="pages" spacing={2}>
            <Grid item xs={4}>
              <NavLink to="/">Main</NavLink>
            </Grid>
            <Grid item xs={4}>
              <NavLink to="/contacts">Contacts</NavLink>
            </Grid>
            <Grid item xs={4}>
              <NavLink to="/blogs">Blogs</NavLink>
            </Grid>
          </Grid>
        </header>
      )}
    </>
  );
};
export default Header;
