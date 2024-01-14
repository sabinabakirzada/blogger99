import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Toner from "./toner";
import Latest from "./latest";
import Travel from "./travel";
import axios from "axios";
import SuppliersCard from "./suppliers-cards";

const Homepage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios("https://northwind.vercel.app/api/suppliers");
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage| Blogger</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is Home Page" />
      </Helmet>
      <Toner />
      <SuppliersCard data={data} getData={getData} />
      <Latest />
      <Travel />
    </div>
  );
};

export default Homepage;
