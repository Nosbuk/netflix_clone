import React from "react";
import { Main } from "../components/Main";
import { Row } from "../components/Row";
import { requests } from "../requests";

export const Home = () => {
  return (
    <>
      <Main />
      <Row
        title="Upcoming"
        fetchURL={requests.upcoming}
      />
      <Row
        title="Popular"
        fetchURL={requests.popular}
      />
      <Row
        title="Trending"
        fetchURL={requests.trending}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.topRated}
      />
    </>
  );
};
