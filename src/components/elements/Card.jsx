import React from "react";
import { Col, Button } from "react-bootstrap";

function Card({ item, selected, setSelected, resetSelection }) {
  const cardClass = selected === item ? "selected" : "unselected";
  const handleSelect = () => {
    resetSelection();
    setSelected(item);
  };

  return (
    <Col
      xl={5}
      md={5}
      sm={10}
      className={`card align-items-stretch ${cardClass} m-2`}
      onClick={handleSelect}
    >
      <img className="card-img-top" src={item.img} alt={item.title} />
      <div className="card-body px-4 pt-4">
        <h5 className="card-title">{item.title}</h5>
        <span>id: {item.asin} </span>

        <div className="price-cart pt-2 pb-3">
          <span>€ {item.price}</span>

          <Button variant="success">
            <i className="bi bi-cart2"></i>
          </Button>
        </div>
      </div>
      {/* {selected === asin && <CommentArea elementId={asin} />} */}
    </Col>
  );
}

export default Card;
