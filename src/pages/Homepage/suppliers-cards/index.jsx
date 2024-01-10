import React from "react";
import "./index.scss";
import axios from "axios";
const SuppliersCard = ({ data }) => {
  const deleteSupplier = async (id, btn) => {
    try {
      await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
      btn.parentElement.remove();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="cards">
      <div className="container">
        <div className="cards">
          {data.map((item) => {
            return (
              <div className="card">
                <h2>CompanyName: {item.companyName}</h2>
                <h3>
                  Address: {item.address?.street}, {item.address?.city}
                </h3>
                <button
                  onClick={(event) => {
                    deleteSupplier(item.id, event.target);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuppliersCard;
