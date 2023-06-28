import { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Features from "./features";
import Footer from "./footer";
export default class HomeLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Banner />
        <div className="row mb-4">
          <div className="col-3">
            <Features />
          </div>
          <div className="col-3">
            <Features />
          </div>
          <div className="col-3">
            <Features />
          </div>
          <div className="col-3">
            <Features />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
