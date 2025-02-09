import styles from "./row.module.css";
import axios from "./../../../utils/axios";
import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setmovies] = useState([]);
  const [trailer, settrailer] = useState("");
  let baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    (async () => {
      try {
        const datas = await axios.get(fetchUrl);
        setmovies(datas.data.results);
        // console.log(datas);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchUrl]);
  const handlechlick = (mov) => {
    if (trailer) {
      settrailer("");
    } else {
      // finding the vedio url by giving the title for movie trailer
      movieTrailer(mov.original_title || mov.title).then((data) => {
        const urlParms = new URLSearchParams(new URL(data).search);
        // console.log(urlParms.get("v"));
        // updating our trailer state by the vedio id
        settrailer(urlParms.get("v"));
      });
    }
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className={styles.row}>
        <h1>{title}</h1>
        {/* {console.log(trailer)} */}
        {/* choose css style base on the props come from parent */}
        <div className={`${styles.poster} ${isLarge && styles.large_poster} `}>
          {movies?.map((mov, index) => (
            <>
              <img
                onClick={() => handlechlick(mov)}
                key={index}
                // choose the end point based on the parameter come from parent
                src={`${baseUrl}${
                  isLarge ? mov.poster_path : mov.backdrop_path
                }`}
                alt={mov.title}
              />
            </>
          ))}
        </div>
        <div className={styles.trailer}>{trailer && <YouTube videoId={trailer} opts={opts} />}</div>
      </div>
    </>
  );
}
//  {trailer} && <YouTube {` $ && {${videoId={trailer} } opts= ${opts} } `}
export default Row;
