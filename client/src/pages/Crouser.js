// import React from "react";

// const Crouser = () => {
//   return <div></div>;
// };

// export default Crouser;
import React from "react";
import { Carousel } from "react-bootstrap";

const Crouser = () => {
  return (
    <Carousel
    //   style={{
    //     marginTop: "40px",
    //   }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner3.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Crouser;
