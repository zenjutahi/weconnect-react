import React from "react";
import BusinessList from "./BusinessList";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BusinessListPage = () => (
  <div>
    <NavBar />
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>
              WeConnect Businesses Listings<small />
            </h2>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </header>
    <BusinessList />
    <Footer />
  </div>
);

export default BusinessListPage;
