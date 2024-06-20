import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/cado">
        Cado
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img
          src="/Capture.JPG"
          alt="footer"
          style={{ width: "100%" }}
          onClick={() => navigate("/products")}
        />
      </div>
      <div
        className="justify-content-center"
        style={{
          width: "100%",
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <Row style={{ display: "flex", textAlign: "left" }}>
          <Col
            flexGrow={2}
            className="text-center text-sm-start"
            style={{ paddingLeft: "100px" }}
            onClick={() => navigate("/products")}
          >
            <h5 className="fs-6 fs-sm-5">
              {" "}
              <b>
                <u>ONLINE SHOPPING</u>
              </b>
            </h5>
            <p>
              Dogs <br />
              Cats <br />
              Dog Behaviour
            </p>
          </Col>
          <Col
            flexGrow={2}
            className="text-center text-sm-start"
            onClick={() => navigate("/products")}
          >
            <h5 className="fs-6 fs-sm-5">
              {" "}
              <b>
                <u>EXPLORE</u>
              </b>
            </h5>
            <p>
              Our story <br />
              FAQs <br />
              Blog <br /> Contact Us
            </p>
          </Col>
          <Col
            flexGrow={2}
            className="text-center text-sm-start"
            onClick={() => navigate("/products")}
          >
            <h5 className="fs-6 fs-sm-5">
              {" "}
              <b>
                {" "}
                <u>QUICK LINKS</u>
              </b>
            </h5>
            <p>
              My Account <br />
              Track Your Order <br />
              Refund policy <br />
              Return policy <br />
              Privacy Policy <br />
              Terms of Use <br />
              Refer and save
            </p>
          </Col>
          <Col
            flexGrow={2}
            className="text-center text-sm-start"
            onClick={() => navigate("/products")}
          >
            <h5 className="fs-6 fs-sm-5">
              {" "}
              <b>
                {" "}
                <u>
                  EXPERIENCE SUPERTAILS <br /> APP ON MOBILE
                </u>
              </b>
            </h5>
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hhonoWuqac_WmN8NBcBdiQrTnP3hpPGQPg&usqp=CAU"
              alt="PlayStore"
              style={{ paddingLeft: "15px", height: "110px" }}
            />
            <br />
            <br />
            <h5
              style={{ paddingLeft: "40px" }}
              onClick={() => navigate("/products")}
            >
              {" "}
              <b>FOLLOW US</b>
            </h5>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT244SvCAkoy_QB3230D8l9G1zsRp6-wQSmog&usqp=CAU"
              alt="PlayStore"
              style={{ height: "80px", marginTop: "-10px" }}
            />
          </Col>
          <Copyright sx={{ mt: -2 }} />
        </Row>
      </div>
    </div>
  );
};

export default Footer;
