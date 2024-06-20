import SearchAndLogin from "../User/SearchAndLogin";
import React, { useContext } from "react";
import { Data } from "../../App";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import Footer from "../User/Footer";

const LitterSupplies = () => {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const catogery = product.filter((item) => item.catogery === "LitterSupplies");
  return (
    <>
      <SearchAndLogin />

      <Row
        className="m-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "red" }}>
          <u>Litter Supplies</u>
        </h1>
        {catogery.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="d-flex flex-wrap m-4"
          >
            <Card className="m-1" style={{ width: "17rem" }}>
              <Card.Img
                style={{ width: "15rem", height: "10rem" }}
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title className="m-2">{item.title}</Card.Title>
                <Card.Text>
                  <h2>Rs{item.price}</h2>
                </Card.Text>
                <Button
                  onClick={() => navigate(`/viewproduct/${item.id}`)}
                  variant="primary"
                >
                  View Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Footer />
    </>
  );
};

export default LitterSupplies;
