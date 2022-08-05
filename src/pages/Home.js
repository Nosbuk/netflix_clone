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
      <Row
        title="Horror"
        fetchURL={requests.horror}
      />
      <Row
        title="Comedy"
        fetchURL={requests.comedy}
      />
      <Row
        title="Romance"
        fetchURL={requests.romance}
      />
      <Row
        title="Drama"
        fetchURL={requests.drama}
      />
      <Row
        title="Action"
        fetchURL={requests.action}
      />
      <Row
        title="Crime"
        fetchURL={requests.crime}
      />
      <Row
        title="Western"
        fetchURL={requests.western}
      />
    </>
  );
};
