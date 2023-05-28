import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";

import Img1 from "./img1.jpg";
import Img2 from "./img2.png";
import Img3 from "./img3.png";
import Img4 from "./Img4.png";
import Img5 from "./img5.png";
import Img6 from "./img6.jpg";
import Img7 from "../../assets/logo.png";

const DesignGallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CgCloseO onClick={() => setModel(false)} size={40} />
      </div>
      <div className="designGallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DesignGallery;
