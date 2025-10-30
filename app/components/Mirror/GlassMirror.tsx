import React from "react";
import BigImageComponent from "../Ui/BigImage/BigImageComponent";

export default function GlassMirror() {
  return (
    <BigImageComponent
      imageSrc="/images/win.jpg"
      paragraphs={[
        "Glass mirrors are an important part of our daily life. They are used in our homes, offices, cars and even on roads for traffic monitoring. Glass mirrors can serve a variety of functions, from enhancing natural light in a room to increasing the sense of space.",
        "The history of glass mirrors goes back thousands of years. The first mirrors were made of polished metal, but later glass mirrors were also used. In the Middle Ages, glass mirrors were a sign of wealth and power and were often used in palaces and castles.",
        "In the modern world, glass mirrors are manufactured in a variety of sizes and shapes, from small hand mirrors to large wall mirrors that can capture an entire room. Most glass mirrors today are coated with a layer of silver or aluminum on the back of the glass to produce a clear and reflective image.",
        "Glass mirrors can be used in different settings to enhance the light in a room. They can be placed on the ceiling or walls to enhance natural light and create a larger space. Lighted mirrors are often used in bathrooms to enhance light when applying makeup or shaving.",
        "Glass mirrors are also often used in architecture to create a sense of space and depth. They can be placed on opposite walls to enlarge the space and create an optical illusion. Glass mirrors are often used in stores and shopping centers to enlarge space and create a bright and inviting atmosphere.",
      ]}
      buttonText="Our emergency service number:  040 32042000"
      onButtonClick={() => console.log("CTA clicked")}
      sectionClass="!bg-[#f8f9ff] !text-[16px]"
      paragraphClass="!text-[#585C67]"
      buttonClass="!bg-[#2D2E83]"
    />
  );
}
