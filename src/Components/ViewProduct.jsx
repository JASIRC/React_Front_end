import React, { useContext, useState } from "react";
import { Data } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
import Footer from "./User/Footer";
import SearchAndLogin from "./User/SearchAndLogin";

const ViewProducts = () => {
  const navigate = useNavigate();
  const { product, login, loginUser } = useContext(Data);
  const { id } = useParams();
  const findView = product.filter((item) => item.id === parseInt(id));
  const [btn, setbtn] = useState(true);

  const addCart = () => {
    if (login) {
      const [productget] = findView;

      const isProductInCart = loginUser.cart.find(
        (item) => item.id === productget.id
      );

      if (!isProductInCart) {
        loginUser.cart.push({ ...productget, qty: 1 });
        console.log(loginUser, "viewproduct");
        toast.success("Your Product is Added");
      } else {
        toast.error("This product is already in your cart");
        setbtn(false);
      }
    } else {
      navigate("/signin");
      toast.error("Please login");
    }
  };

  return (
    <>
      <SearchAndLogin />
      <div className="container mt-5 m-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            {findView.map((item) => (
              <Card className="w-100" key={item.id}>
                <Card.Img
                  className="mx-auto"
                  style={{ width: "20rem", height: "20rem" }}
                  variant="top"
                  src={item.image}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                    {" "}
                    <h2>
                      <u>{item.title}</u>
                    </h2>
                  </Card.Title>
                  <br />
                  <h5>
                    <b>Details:</b> {item.details}
                  </h5>
                  <br />
                  <h3 className="text-warning">Rs {item.price}</h3>

                  {btn ? (
                    <Button
                      className="bg-success"
                      variant="primary"
                      onClick={addCart}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button
                      className="bg-danger"
                      variant="primary"
                      onClick={() => navigate("/cart")}
                    >
                      Go To Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProducts;
