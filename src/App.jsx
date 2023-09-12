import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { useState } from "react";
import MyHero from "./components/MyHero";

const App = props => {
  /*   state = {
    selectedAsin: "",
  }; */

  const [selectedAsin, setSelectedAsin] = useState("");

  const setNewAsin = asin => {
    setSelectedAsin(asin);
  };

  return (
    <Container>
      <MyNav />
      <MyHero />
      {/* <AllTheBooks /> */}
      <Row>
        <Col md={8}>
          <BookList books={fantasy} setNewAsin={setNewAsin} selectedAsin={selectedAsin} />
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
};

export default App;
