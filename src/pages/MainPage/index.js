import '../../App.css';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import Row from "../../components/Row";
import requests from "../../api/requests";
import Footer from "../../components/Footer";

function MainPage() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      ></Row>
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      ></Row>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
