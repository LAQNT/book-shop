import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import logo from "../logo.svg";
import CardFilter from "./elements/CardFilter";

import InputSearch from "./elements/InputSearch";

import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

function Header({ inputValue, setInputValue }) {
  return (
    <Navbar
      expand="lg"
      className="nav-bar container-fluid d-flex flex-column"
      href="#top"
    >
      {/* <div className="container d-flex flex-column  "> */}
      <div className="row d-flex justify-content-between">
        <Col lg={2}>
          <Navbar.Brand href="#home">
            <i className="bi bi-book-half"></i> Book Shop
          </Navbar.Brand>
        </Col>
        <Col lg={10}>
          <CardFilter />
        </Col>
      </div>

      <Row className="my-3">
        <Col>
          <div className="searchbar">
            <InputSearch
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Navbar>
  );
}

export default Header;

// function Header({ inputValue, setInputValue }) {
//   return (
//     <header>
//       <div className="header-left">
//         {/* <img src={logo} className="logoHeader" alt="logo" /> */}
//         <div className="searchbar">
//           <InputSearch inputValue={inputValue} setInputValue={setInputValue} />
//         </div>
//       </div>
//       <div className="header-right">
//         <Button type="submit">Logout</Button>
//       </div>
//     </header>
//   );
// }

// export default Header;
