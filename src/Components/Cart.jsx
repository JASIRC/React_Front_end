import React, { useContext, useEffect, useState } from "react";
import { Data } from "../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import SearchAndLogin from "./User/SearchAndLogin";
import Footer from "./User/Footer";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { product, setViewOrder, loginUser, setCart } = useContext(Data);
  const navigate = useNavigate();
  const [cartuser, setcartuser] = useState([]);
  useEffect(() => {
    setcartuser(loginUser.cart);
  }, [loginUser.cart]);
  console.log(loginUser, "user");

  const removeTask = (x) => {
    const newTask = cartuser.filter((item) => item.id !== x);
    setcartuser(newTask);
    if (loginUser) {
      loginUser.cart = newTask;
    }
    toast.error("Your product is removed");
  };

  const handleincrece = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.qty <= item.stock) {
          item.qty += 1;
          item.price = parseFloat(productprice.price) * item.qty;
        }
      }
      return item;
    });
    setCart(updatecart);
  };

  const handledecrece = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.qty <= item.stock && item.qty > 1) {
          item.qty -= 1;
          item.price = parseFloat(productprice.price) * item.qty;
        }
      }
      return item;
    });
    setCart(updatecart);
  };

  const reducer = cartuser.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  const clear = () => {
    loginUser.cart = [];
    setcartuser([]);
    toast.success("Your cart is Empty");
  };

  const order = () => {
    if (cartuser.length === 0) {
      toast.success("Your cart is Empty");
    } else {
      navigate("/payment");
      setViewOrder(cartuser);
    }

    if (loginUser) {
      loginUser.cart = [];
    }
  };

  return (
    <>
      <SearchAndLogin />
      <div>
        <section className="navu h-100" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography
                    tag="h2"
                    className="fw-normal mb-0  text-black"
                    style={{ margin: "auto" }}
                  >
                    <b>Shopping Cart </b>
                  </MDBTypography>
                  <div>
                    <h2 className="mb-0">
                      <span className="text-warning"></span>
                      <a href="#!">
                        RS: {reducer}
                        <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </h2>
                  </div>
                </div>

                {cartuser.map((item) => (
                  <MDBCardBody className="p-4" key={item.id}>
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.image}
                          alt="products"
                        />
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="8">
                        <p className="lead fw-normal mb-2">
                          <b>{item.title}</b>
                        </p>

                        <p className="text-dark bold">
                          <b>{item.price}</b>
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="12"
                        lg="6"
                        xl="4"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <button
                          className=" border border-secondary p-2 m-1"
                          variant="danger"
                          onClick={() => handledecrece(item.id)}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="border border-secondary p-3">
                          {item.qty}
                        </span>
                        <button
                          className="border border-secondary p-2 m-1"
                          varient="danger"
                          onClick={() => handleincrece(item.id)}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4" className="text-end">
                        <a href="#!" className="text-danger">
                          <MdDelete
                            onClick={() => removeTask(item.id)}
                            icon="trash"
                            className="text-danger"
                            size={40}
                          />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                ))}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div style={{ textAlign: "center" }}>
          <h1>Total {reducer}</h1>
          <Button className="bg-info m-2 p-2" onClick={() => clear()}>
            Clear Cart
          </Button>
          <Button className="bg-success m-2 p-2" onClick={order}>
            Buy
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
