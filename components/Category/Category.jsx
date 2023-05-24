import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";
const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5];

  return (
    <div className={Style.category}>
      {CategoryArray.map((el, i) => (
        <div className={Style.category_box} key={i + 1}>
          <Image
            src={images.creatorbackground1}
            className={Style.category_box_img}
            alt="Background image"
            width={350}
            height={150}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Category;
