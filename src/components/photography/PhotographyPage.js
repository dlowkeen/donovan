import React, { Component } from "react";
import Photography from "./Photography";
import ParallaxImage from '../ParallaxImage';
import img12 from "../../assets/images/img12.jpg";

class PhotographyPage extends Component {
  render() {
    return (
      <div className="body" id="photography">
        <ParallaxImage bgImage={img12} words="Photography" />
        <div className="container">
          <br/><br/><br/>
          <Photography />
        </div>
      </div>
    );
  }
}

export default PhotographyPage;