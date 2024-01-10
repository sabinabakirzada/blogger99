import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const FashionPage = () => {
  return (
    <div className="fashion">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fashion Page</title>
        <meta name="description" content="This is Fashion Page" />
      </Helmet>

      
      Fashion Page
    </div>
  );
};

export default FashionPage;
