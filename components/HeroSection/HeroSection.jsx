import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.herosection}>
        <div className={Style.herosection_box}>
            <div className={Style.herosection_box_left}>
                <h1>Discover,Collect,and sell NFTs 🖼️</h1>
                <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search"/>
            </div>
            <div className={Style.herosection_box_right}>
                <Image src={images.hero}
                alt="HERO SECTION"
                width={600}
                height={600}/>
            </div>
        </div>
    </div>
  )
};

export default HeroSection;
