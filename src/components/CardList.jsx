import React, { useState } from "react";
import Card from "./elements/Card";
import { Container, Row, Col } from "react-bootstrap";
import cardsDataResponse from "../data/fantasy.json";
import SelectedBook from "./elements/Selected";

function CardList({ inputValue }) {
  const [selected, setSelected] = useState(null);

  const resetSelection = () => {
    setSelected(null);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h4>Latest Releases</h4>
          <div className="d-flex flex-wrap justify-content-start  latest-releases">
            {cardsDataResponse
              .filter((data) => {
                const titleLower = data.title.toLowerCase();
                const inputLower = inputValue.toLowerCase();

                return titleLower.includes(inputLower);
              })
              .map((item) => (
                <Card
                  key={item.asin}
                  item={item}
                  selected={selected}
                  setSelected={setSelected}
                  resetSelection={resetSelection}
                />
              ))}
          </div>
        </Col>
        <Col className="d-flex align-items-stretch">
          <SelectedBook selected={selected} />
        </Col>
      </Row>
    </Container>
  );
}

export default CardList;
