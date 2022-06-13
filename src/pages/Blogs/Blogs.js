import { useQuery } from "@apollo/client";
import { menuApi } from "../../api/api";
import { useEffect, useState } from "react";
import { Grid, Link, Pagination } from "@mui/material";
import { SERVER_API } from "../../constants";
import "./Blogs.css";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { loading, data, error } = useQuery(menuApi.getBlogs(page, limit));
  const [blogElements, setBlogElements] = useState([]);
  useEffect(() => {
    if (data) {
      setBlogElements(
        data.blogs.data.map((e) => {
          let text = e.attributes.text.slice(0, 200) + "...";
          console.log(e.attributes);
          return (
            <Grid item xs={4} key={e.id}>
              <Link to={e.id} className="linkToBlog">
                <div className="blogElement">
                  <div className="blogImg">
                    {e.attributes.img.data && (
                      <img
                        src={SERVER_API + e.attributes.img.data?.attributes.url}
                        alt={`blog ${e.id} image`}
                      />
                    )}
                  </div>
                  <h3>{e.attributes.title}</h3>
                  <div>{text}</div>
                </div>
              </Link>
            </Grid>
          );
        })
      );
    } else {
      console.log(error);
    }
  }, [data]);
  return (
    data && (
      <>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          {blogElements}
        </Grid>
        <Pagination
          count={data.blogs.meta.pagination.pageCount}
          defaultpage={page}
          onChange={(e, v) => {
            setPage(v);
          }}
        />
      </>
    )
  );
};
export default Blogs;
