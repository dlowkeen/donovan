import React from "react";
import { Parallax } from "react-parallax";

export default function ParallaxImage(props) {
  return (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={props.bgImage}
      bgImageAlt="the dog"
      strength={200}
    >
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ color: 'white', fontSize: '52px' }}>{props.words}</h1>
        </div>
      </div>
      <div style={{ height: "350px" }} />
    </Parallax>
  </div>
)}