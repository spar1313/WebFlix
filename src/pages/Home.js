import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  const location = useLocation();
  const category = location.state?.category || 'all'; // default to 'all' if no state passed
  const selected = requests[category];

  return (
    <>
      <Main />
      <h2 className="text-white text-3xl font-bold px-4 pt-4">{selected.title}</h2>
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="6" title={selected.title} fetchURL={selected.url} />
    </>
  );
};

export default Home;
