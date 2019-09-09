import React from "react";
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";
import img1 from "../../assets/images/img1.jpg";
import img1small from '../../assets/images/img1copy.jpg';
import img3 from "../../assets/images/img3.jpg";
import img3small from "../../assets/images/img3copy.jpg";
import img4 from "../../assets/images/img4.jpg";
import img4small from "../../assets/images/img4copy.jpg";
import img5 from "../../assets/images/img5.jpg";
import img5small from "../../assets/images/img5copy.jpg";
import img6 from "../../assets/images/img6.jpg";
import img6small from "../../assets/images/img6copy.jpg";
import img7 from "../../assets/images/img7.jpg";
import img7small from "../../assets/images/img7copy.jpg";
import img8 from "../../assets/images/img8.jpg";
import img8small from "../../assets/images/img8copy.jpg";
import img9 from "../../assets/images/img9.jpg";
import img9small from "../../assets/images/img9copy.jpg";
import img10 from "../../assets/images/img10.jpg";
import img10small from "../../assets/images/img10copy.jpg";

const demoPhotos = [
  {
    id: 1,
    src: img4small,
    bigSrc: img4
  },
  {
    id: 2,
    src: img5small,
    bigSrc: img5
  },
  {
    id: 3,
    src: img1small,
    bigSrc: img1
  },
  {
    id: 4,
    src: img3small,
    bigSrc: img3
  },
  {
    id: 5,
    src: img6small,
    bigSrc: img6
  },
  {
    id: 6,
    src: img7small,
    bigSrc: img7
  },
  {
    id: 7,
    src: img8small,
    bigSrc: img8
  },
  {
    id: 8,
    src: img9small,
    bigSrc: img9
  },
  {
    id: 9,
    src: img10small,
    bigSrc: img10
  }
];

class Photography extends React.Component {
  render() {
    return (
      <div className="container">
        <PhotoGrid columns={3} photos={demoPhotos} />
      </div>
    );
  }
}

export default Photography;