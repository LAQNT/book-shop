import React from "react";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SelectedBook({ selected }) {
  if (!selected) {
    return (
      <Col xl={12} sm={12} className={`card`}>
        <div className="card-body">
          <h5 className="card-title">Selec a Book</h5>
        </div>
      </Col>
    );
  }

  return (
    <Col xl={12} sm={12} className={`card`}>
      <img className="card-img-top" src={selected.img} alt={selected.title} />
      <div className="card-body">
        <h5 className="card-title">{selected.title}</h5>
        <span>ASIN: {selected.asin}</span>
      </div>
      <CommentArea elementId={selected.asin} />
    </Col>
  );
}

export default SelectedBook;
