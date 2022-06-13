import "./App.css";
import { useQuery } from "@apollo/client";
import { SERVER_API } from "./constants";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { menuApi } from "./api/api";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import ButtonsDownloads from "./components/ButtonsDownloads/ButtonsDownloads";
import ErrorPage from "./pages/Error/ErrorPage";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  const { data, loading } = useQuery(menuApi.background);
  return (
    <>
      {loading && <Loading />}
      {data && (
        <div
          className="App"
          style={{
            backgroundImage: `url(${SERVER_API}${data.setting.data.attributes.background.data.attributes.url})`,
            backgroundSize: "cover",
          }}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
