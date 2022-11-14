import React from "react";
import imgSrc1 from "assets/images/sustainable-finance-r-image.jpeg";
import imgSrc2 from "assets/images/abstract-background-with-low-poly-design.jpg";
import imgSrc3 from "assets/images/background.jpg";
import imgSrc4 from "assets/images/logo.png";
import imgSrc5 from "assets/images/pexels-muffin-creatives-4584611.jpg";

const one = {
  id:1,
  image: imgSrc1,
  title: 'FIRST',
  text: 'first',
};

const two = {
  id:2,
  image: imgSrc2,
  title: 'SECOND',
  text: 'second',
};
const three = {
  id:3,
  image: imgSrc3,
  title: 'THIRD',
  text: 'third',
};
const four = {
  id:4,
  image: imgSrc4,
  title: 'FOURTH',
  text: 'fourth',
};
const five = {
  id:5,
  image: imgSrc5,
  title: 'FIFTH',
  text: 'fifth',
};

const ListItems = [one, two, three, four, five];

const MixedContent = () => (
  
  <div className="MixedContent">
    <ul>

      {ListItems.map((item) => {
          return(<li key={item.id}>
            <img src={item.image} alt="image" />
            <h1> {item.title}</h1>
            <p> {item.text}</p>
          </li>) 
      })}

    </ul>
  </div>
  

);


export default MixedContent;