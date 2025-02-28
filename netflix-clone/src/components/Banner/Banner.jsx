import axios from "./../../utils/axios";
import { useEffect, useState } from "react";
import requests from "../../utils/request";
import styles from "./banner.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function Banner() {
  // creating state to hold the data later after fetching
  const [movies, setmovies] = useState({});
  const [trailer, settrailer] = useState("");
  useEffect(() => {
    (async () => {
      try {
        // sending get request to by concatinating base url(axions) with the end point(request)
        const request = await axios.get(requests.fetchActions);
        // updating the state after the data fetch
        setmovies(
          request.data.results[
            [
              // to choose 1 banner data from incoming datas genertae random no and acces throght index
              Math.floor(Math.random() * request.data.results.length),
            ]
          ]
        );
      } catch (error) {
        error, console.log(error);
      }
    })();
  }, []);
  const playClick = (mov) => {
    if (trailer) {
      settrailer("");
    } else {
      movieTrailer(mov).then((data) => {
        const urlParms = new URLSearchParams(new URL(data).search);
        // updating our trailer state by the vedio id
        settrailer(urlParms.get("v"));
      });
    }
  };
  function truncate(str, n) {
    // string.substr(startIndex, length)
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div
        className={`${styles.Banner_img} `}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path}`,
        }}
      >
        <div className={styles.banner_content}>
          <div>
            <h1 className={styles.banner_title}>
              {movies.original_title || movies.title}
            </h1>
          </div>
          <div className={styles.btns}>
            <button
              className={styles.btn_play}
              onClick={() =>
                playClick(`${movies?.original_title} || ${movies?.title}`)
              }
            >
              Play
            </button>
            <button className={styles.btn_list}>My List</button>
          </div>
          <div className={styles.banner_des}>
            {truncate(movies.overview, 150)}
          </div>
        </div>
        <div className={styles.banner_fade}></div>
      </div>
      <div className={styles.trailer}>
        {trailer && (
          <YouTube className={styles.youtube} videoId={trailer} opts={opts} />
        )}
      </div>
    </>
  );
}

export default Banner;

// :
