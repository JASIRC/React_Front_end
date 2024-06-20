import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <h1 style={{ textAlign: "center", marginTop: "4%" }}>
          <b>
            <u
              style={{ color: "darkolivegreen" }}
              onClick={() => navigate("/products")}
            >
              Popular Categories
            </u>
          </b>
        </h1>
        <br />
        <Container>
          <Row>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories_52c8479c-3318-4f9c-8c6e-22c46140d720_480x.png?v=1704701404"
                thumbnail
                onClick={() => navigate("/dogfood")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-4_91417480-eecc-4ad9-a673-a414448added_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/catfood")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-1_acf513ca-2e51-4594-81f1-774aac7ac9d1_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/dogtreats")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-5_704f164b-7c3c-4dca-b73c-5cddacd739d8_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/cattreats")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-8_ec2faa12-455f-4cad-b998-36449c3ec9f7_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/healthcare")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-9_4e448ae0-6f60-419b-a0d0-d488ce03e842_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/littersupplies")}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-2_767ff9c2-bf16-4371-bca3-43b4e8c14d43_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/toys")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-6_b37cbb83-8ea3-45f2-98ea-d59981ebd474_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/walkessentials")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-10_5714a368-6d86-4287-b417-8e780062a239_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/grooming")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-3_c1821f4b-c73e-4019-a850-ebffa28664ea_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/bowls")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-7_0e233886-a925-480c-942b-27b3972fc4cf_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/beddings")}
              />
            </Col>
            <Col xs={6} md={2}>
              <Image
                src="https://supertails.com/cdn/shop/files/categories-11_0f1d5be6-d225-4f35-8316-b4594d74abd3_480x.png?v=1703666861"
                thumbnail
                onClick={() => navigate("/clothing")}
              />
            </Col>
          </Row>
          <br />
          <br />
        </Container>
        <div style={{ backgroundColor: "grey", borderRadius: "50px" }}>
          <br />
          <Container style={{ maxWidth: "1400px" }}>
            <Row className="justify-content-center">
              <Col>
                <Image
                  src="https://supertails.com/cdn/shop/files/SC-1_495f1aa5-4416-400c-813f-f3ac91e40041.png?v=1705905236"
                  fluid
                  style={{ width: "300px", height: "auto" }}
                  onClick={() => navigate("/catfood")}
                />
              </Col>
              <Col>
                <Image
                  src="https://supertails.com/cdn/shop/files/SC_d5bd7379-24e5-4206-a145-59b02b799e6d.png?v=1705905239"
                  fluid
                  style={{ width: "300px", height: "auto" }}
                  onClick={() => navigate("/dogfood")}
                />
              </Col>
              <Col>
                <Image
                  src="https://supertails.com/cdn/shop/files/SC-2_aba0e6a2-2839-4974-8fda-3953cd888e97.png?v=1705312743"
                  fluid
                  style={{ width: "300px", height: "auto" }}
                  onClick={() => navigate("/toys")}
                />
              </Col>
              <Col>
                <Image
                  src="https://supertails.com/cdn/shop/files/SC-3_0ce74fda-5e57-4f7d-af46-c6485eef025c.png?v=1705312743"
                  fluid
                  style={{ width: "300px", height: "auto" }}
                  onClick={() => navigate("/littersupplies")}
                />
              </Col>
            </Row>
            <br />
          </Container>
        </div>
        <div style={{ backgroundColor: "rgb(243 243 243)" }}>
          <br />
          <img
            src="https://supertails.com/cdn/shop/files/Des_8638e76c-1baa-40de-80d5-f684737706af_1600x.png?v=1704520352"
            alt="Cover"
            style={{ width: "100%", height: "auto" }}
            onClick={() => navigate("/clothing")}
          />
        </div>
        <div style={{ backgroundColor: "white" }}>
          <h1 style={{ textAlign: "center", paddingTop: "1.5%" }}>
            <b>
              <u
                style={{ color: "darkgoldenrod" }}
                onClick={() => navigate("/products")}
              >
                In the Spotlight
              </u>
            </b>
          </h1>
          <Container style={{ maxWidth: "1400px", backgroundColor: "white" }}>
            <Row>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722952_3fb401bc-2fc2-4309-9d7b-98ade4be972a_480x.png?v=1705905629"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/products")}
                />
              </Col>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722929_fef6b4bf-6b7d-4c27-81c1-4dbd1a9761e4_480x.png?v=1705905629"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/products")}
                />
              </Col>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722953_72c67d06-151b-4e9a-a54a-929303098e6f_480x.png?v=1705905629"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/products")}
                />
              </Col>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722954_d864ae60-dfea-48da-acbf-b2db9bc9042a_480x.png?v=1705905630"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/Dogfood")}
                />
              </Col>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722845_a287b089-fb77-4b34-8e32-cb0040561fda_480x.png?v=1705905630"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/catfood")}
                />
              </Col>
              <Col xs={6} md={2}>
                <Image
                  src="https://supertails.com/cdn/shop/files/Frame_106722698_44d70c44-692e-457c-a428-9f7eacab3476_480x.png?v=1704348453"
                  thumbnail
                  style={{ borderColor: "white" }}
                  onClick={() => navigate("/clothing")}
                />
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Category;
