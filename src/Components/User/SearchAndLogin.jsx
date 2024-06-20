import React, { useState, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Data } from "../../App";
import { toast } from "react-hot-toast";
import { Navbar, Container } from "react-bootstrap";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

function Search() {
  const [btnClr, setBtnClr] = useState("");
  const [btnClr1, setBtnClr1] = useState("");
  const [btnClr2, setBtnClr2] = useState("");
  const [btnClr3, setBtnClr3] = useState("");
  const navigate = useNavigate();
  const { login, setLogin, setSearch, loginUser, setCart } = useContext(Data);

  const logout = () => {
    setCart([]);
    setLogin(false);
    navigate("/cado");
    toast.error("You have logged out");
  };

  const carticon = () => {
    if (login) {
      navigate("/cart");
    } else {
      toast.error("Please Login");
    }
  };

  return (
    <div style={{
      backgroundColor: "rgb(199 121 44 / 29%)",
      borderRadius: "200px",
      width: "100%",
    }}>
      <Navbar expand="md" className="body-primary">
        <img
          src={"/Cado.png"}
          alt="CADO"
          style={{
            width: "140px",
            marginLeft: "70px",
            marginTop: "-18px",
          }}
          onClick={() => navigate("/cado")}
        />
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <input
              type="text"
              onChange={(evt) => setSearch(evt.target.value)}
              placeholder="Search Here...!"
              style={{
                width: "40%",
                height: "40px",
                marginLeft: "80px",
                marginTop: "5px",
                borderRadius: "50px",
                paddingLeft: "15px",
              }}
            />
            <i
              className="bi bi-search"
              style={{
                marginLeft: "-45px",
                fontSize: "1.5rem",
                marginTop: "5px",
                color: "Black",
              }}
              onClick={() => navigate("/search")}
            ></i>

            {login === false ? (
              <button
                onClick={() => navigate("/signin")}
                onMouseEnter={() => setBtnClr({ backgroundColor: "#4CAF50" })}
                onMouseLeave={() => setBtnClr({})}
                style={{
                  width: "15%",
                  height: "40px",
                  marginLeft: "50px",
                  marginTop: "5px",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                  textAlign: "-moz-initial",
                  ...btnClr,
                }}
              >
                <MdAccountCircle size={20} /> Account
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/cado")}
                  onMouseEnter={() => setBtnClr({ backgroundColor: "#4CAF50" })}
                  onMouseLeave={() => setBtnClr({})}
                  style={{
                    width: "15%",
                    height: "40px",
                    marginLeft: "30px",
                    marginTop: "5px",
                    borderRadius: "25px",
                    paddingLeft: "1px",
                    textAlign: "-moz-initial",
                    ...btnClr,
                  }}
                >
                  <MdAccountCircle size={20} /> {loginUser?.firstname}
                </button>
                <button
                  onClick={logout}
                  onMouseEnter={() =>
                    setBtnClr1({ backgroundColor: "#FF0000" })
                  }
                  onMouseLeave={() => setBtnClr1({})}
                  style={{
                    width: "10%",
                    height: "40px",
                    marginLeft: "10px",
                    marginTop: "5px",
                    borderRadius: "25px",
                    paddingLeft: "1px",
                    textAlign: "-moz-initial",
                    ...btnClr1,
                  }}
                >
                  <AiOutlineLogout size={20} /> Logout
                </button>
              </>
            )}

            <button
              onMouseEnter={() => setBtnClr2({ backgroundColor: "#F5A623" })}
              onMouseLeave={() => setBtnClr2({})}
              onClick={carticon}
              style={{
                width: "15%",
                height: "40px",
                marginLeft: "10px",
                marginTop: "5px",
                borderRadius: "25px",
                borderLeft: "40px",
                paddingLeft: "5px",
                ...btnClr2,
              }}
            >
              <FaShoppingCart size={20} /> My Cart
            </button>
            <button
              onMouseEnter={() => setBtnClr3({ backgroundColor: "#03A9F4" })}
              onMouseLeave={() => setBtnClr3({})}
              onClick={() => navigate("/adminlogin")}
              style={{
                width: "8%",
                height: "40px",
                marginLeft: "10px",
                marginTop: "5px",
                borderRadius: "25px",
                borderLeft: "40px",
                paddingLeft: "5px",
                ...btnClr3,
              }}
            >
              <MdAdminPanelSettings size={20} /> Admin
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Search;
