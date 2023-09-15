import Carousel from 'react-bootstrap/Carousel';
import footcaro1 from "../../../assets/img/New folder/footcaro1.png";
import footcaro2 from "../../../assets/img/New folder/footcaro2.png";
import footcaro3 from "../../../assets/img/New folder/footcaro3.png";
import footcaro4 from "../../../assets/img/New folder/footcaro4.png";


function CarouselFadeExample() {
    return (
        <Carousel className="common-carousel" interval={1000} > 
            <Carousel.Item>
                <img className="d-block mx-auto w-50 h-50" src={footcaro1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto w-75 h-75" src={footcaro2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto w-50 h-50" src={footcaro3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto w-50 h-50" src={footcaro4} alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;