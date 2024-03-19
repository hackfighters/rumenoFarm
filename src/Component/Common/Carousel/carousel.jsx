import Carousel from "react-bootstrap/Carousel";

// Image
import footcaro1 from "../../../assets/img/Footcaro/footcaro1.png";
import footcaro2 from "../../../assets/img/Footcaro/footcaro2.png";
import footcaro3 from "../../../assets/img/Footcaro/footcaro3.png";
import footcaro4 from "../../../assets/img/Footcaro/footcaro4.png";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
function CarouselFadeExample() {
  return (
    <>
      
      <Carousel className="common-carousel" interval={1000}>
        <Carousel.Item>
          <img className="d-block mx-auto w-75" src={footcaro1} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block mx-auto w-75" src={footcaro2} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block mx-auto w-75" src={footcaro3} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block mx-auto w-75" src={footcaro4} alt="Loading" />
        </Carousel.Item>
      </Carousel>

    </>
  );
}

export default CarouselFadeExample;
