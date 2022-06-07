import "./App.css";
import { useQuery } from "@apollo/client";
import { SERVER_API } from "./constants";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { menuApi } from "./api/api";
import Loading from "./components/Loading/Loading";

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
            </Routes>
            <section className="s" />
            <section className="s" />
            <section className="s" />
            <section className="s" />
            <section className="s" />
            <section className="s" />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
