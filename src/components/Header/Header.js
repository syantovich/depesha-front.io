import { menuApi } from "../../api/api";
import Loading from "../Loading/Loading";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SERVER_API } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Grid, Menu, MenuItem } from "@mui/material";

const Header = () => {
  const { loading, data } = useQuery(menuApi.getLogo);
  const [logo, setLogo] = useState();
  const [logoWidth, setLogoWidth] = useState();
  const [logoHeight, setLogoHeight] = useState();
  const [nameApp, setNameApp] = useState();
  const [anhorEl, setAnhorElem] = useState(null);
  const open = !!anhorEl;
  const handleEvent = (e) => {
    setAnhorElem(e.currentTarget);
  };
  const handleClose = () => {
    setAnhorElem(null);
  };
  useEffect(() => {
    if (data) {
      setLogo(data.logo.data.attributes.logo.data.attributes.url);
      setLogoHeight(data.setting.data.attributes.logo_height);
      setLogoWidth(data.setting.data.attributes.logo_width);
      setNameApp(data.logo.data.attributes.name);
    }
  }, [data]);
  if (data) {
  }
  return (
    <>
      {loading && <Loading />}
      {data && (
        <header>
          <Grid
            container
            spacing={2}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={1} className="logo">
              <img
                src={`${SERVER_API}${logo}`}
                alt="Logo"
                style={{ width: logoWidth, height: logoHeight }}
              />
              <p>{nameApp}</p>
            </Grid>
            <Grid item xs={4}>
              {document.documentElement.clientWidth > 1024 ? (
                <Grid container spacing={2} className="pages">
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
              ) : (
                <div className="hamburger-menu pages">
                  <input id="menu__toggle" type="checkbox" />
                  <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                  </label>
                  <ul class="menu__box">
                    <li>
                      <NavLink to="/">Main</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </Grid>
          </Grid>
        </header>
      )}
    </>
  );
};
export default Header;
