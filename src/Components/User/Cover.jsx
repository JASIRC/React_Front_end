import React from "react";
import { useNavigate } from "react-router-dom";

const Cover = () => {
  const navigate = useNavigate();
  return (
    <div>
      <video
        width="100%"
        autoPlay
        muted
        loop
        onClick={() => navigate("/products")}
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/4fd5bffeb470496a9d81a54315ba8e15.mp4"
          type="video/mp4"
        />
        Your browser does not support the video
        </video>
      <img src="/icici.webp" alt="Cover" style={{ width: "100%" }} />
    </div>
  );
};

export default Cover;
