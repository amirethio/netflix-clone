import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/request";

function Rowlists() {
  return (
    <>
      <Row
        title="NETFLIX ORIGIONAL"
        fetchUrl={requests.fetchNetflixOriginal}
        isLarge="true"
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrors} />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRated}
        isLarge="true"
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActions} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomances} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShows} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimations} />
    </>
  );
}

export default Rowlists;
