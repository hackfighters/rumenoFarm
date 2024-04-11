import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import '../../../assets/css/slider.css'

// import images
import caroimg1 from "../../../assets/img/achievement-img/achmt1.png";
import caroimg2 from "../../../assets/img/achievement-img/achmt2.png";
import caroimg3 from "../../../assets/img/achmtvideo.mp4";
import caroimg4 from "../../../assets/img/achievement-img/achmt44.jpg";


const Achievment = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const sliderWidth = 480; // Width of each image placeholder
    const increment = 120;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Set to 4 for 4 images
            }
        }, 3000); // Auto slide every 7 seconds

        return () => clearInterval(interval);
    }, [isHovered]);

    const position = () => {
        const half = activeIndex;
        let x = 0;
        let z = 0;
        let scaleX = 1.3;
        let scaleY = 1.3;
        let transformOrigin = sliderWidth / 2;

        document.querySelectorAll('.slider div').forEach((element, index) => {
            scaleX = scaleY = 1;
            if (index < half) {
                x = sliderWidth / 2 - increment * (half - index + 1);
                z = -increment * (half - index + 1);
            } else if (index > half) {
                x = sliderWidth / 2 + increment * (index - half + 1);
                z = -increment * (index - half + 1);
            } else {
                x = sliderWidth / 2;
                z = 1;
                scaleX = scaleY = 1.2;
                transformOrigin = 'initial';
            }
            element.style.transform = `translate3d(${calculateX(x, index)}px, 0, ${z}px) scale3d(${scaleX}, ${scaleY}, 1)`;
            element.style.zIndex = index < half ? index + 1 : 6 - index; // Set to 4 for 4 images
            element.style.transformOriginX = `${transformOrigin}px`;
        });
    };

    const calculateX = (position, index) => {
        return index < activeIndex ? position - sliderWidth / 2 : position - sliderWidth / 2;
    };

    useEffect(() => {
        position();
    }, [activeIndex]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <section className='container-fluid bg-light  py-5'>
                <div className="row px-4">
                    <div
                        className="col-lg-6 mb-6 mb-lg-0"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <div className="d-flex mb-3">
                            <span className="label-title">Achievements</span>
                            <div>
                                <div className="about-line-large"></div>
                                <div className="about-line-small"></div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="" id="wrap-sh-slider"

                        >
                            <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div><img className="shadow w-0 sm:w-100" width={550} sizes={10} height={400} alt="loading" src={caroimg1} /></div>
                                <div> <video
                                    muted
                                    height={380}
                                    width={10}
                                    controls
                                    className="shadow w-auto"
                                    src={caroimg3}
                                ></video></div>
                                <div><img className="shadow w-0 sm:w-100" width={550} sizes={10} height={400} alt="loading" src={caroimg2} /></div>
                                <div><img className="shadow w-0 sm:w-100" width={550} sizes={10} height={400} alt="loading" src={caroimg4} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <hr />
                        <h4>Animal Feed Supplements: Improving Livestock Health through High-Quality Diet</h4>
                        <p>In the field of animal husbandry, it is critical to guarantee the health and output of animals. In order to accomplish these objectives, proper diet is essential. Animal feed supplements are necessary to satisfy the dietary requirements of animals, promote healthy growth, and fend against illness. A number of manufacturers in India are committed to creating feed supplements of the highest caliber; Rumeno Farmotech is one such producer that is both dependable and creative.
                        </p>
                        <h4>Rumeno Farmotech: A Trusted Name in Animal Feed Supplements</h4>
                        <p>One of India's top producers of animal feed supplements is Rumeno Farmotech. The company, which was founded in 2016, has advanced veterinary research significantly. Let's examine the reasons behind farmers' and livestock owners' preference for Rumeno Farmotech:</p>
                        <p><strong>Broad Selection of Products:</strong> A wide variety of feed supplements are available from Rumeno Farmotech to suit different types of animals.</p>
                        <p><strong>Goat feed supplement:</strong> Rumeno Farmotech provides a premium goat feed supplement that is intended to improve your goats' well-being and output. Our supplement is full of vital vitamins, minerals, and nutrients that support healthy growth, milk production, and general wellbeing. Our feed supplement guarantees that your goats, whether dairy or meat, get the nutrition they need to thrive as a herd.</p>
                        <p><strong>Cow feed Supplement:</strong> These goods help cattle grow and develop. Your cows and buffaloes will be well-nourished thanks to Rumeno Farmotech's mineral combinations and calcium supplements.
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <p><strong>Poultry feed Supplement:</strong> Rumeno Farmotech is a reliable source of high-quality supplements that improve the general health and well-being of chickens, ducks, and other fowl.
                        </p>
                        <p><strong>Aqua Feed Supplements:</strong> Specialized nutrition is required for aquaculture. Fish and other aquatic creatures can benefit from high-quality supplements from Rumeno Farmotech.</p>
                        <p><strong>Pigeon Feed Supplements:</strong> Avian enthusiasts can rely on Rumeno Farmotech to provide their feathered companions with the proper nourishment.
                            Rumeno Farmotech takes great satisfaction in the effectiveness and high quality of its feed supplements. Every product is painstakingly designed to meet particular dietary needs. The goal of all products, including liver tonics, digestive powders, and toxin binders, is to improve animal health.
                        </p>
                        <p><strong>Reach Across the Nation:</strong> Rumeno Farmotech makes sure that its products reach farmers and livestock owners in every corner of India with more than 150 franchise locations nationwide. The company stands out for its dedication to availability and accessibility.</p>
                        <p><strong>Research-Driven Approach:</strong> The Rumeno Farmotech team is always conducting research and creating new recipes to address the growing problems that farmers encounter. Their answers, which include growth promotion and sickness prevention, are supported by research. </p>
                        <p>Rumeno Farmotech is a well-known veterinary feed supplement manufacturer in India that is committed to improving the well-being and output of animals. They provide a large selection of feed additives for different animals, with an emphasis on quality and innovation. Results-driven products are offered by Rumeno Farmotech for pigeons, poultry, fish, and cattle. Their carefully designed supplements meet particular dietary requirements, guaranteeing healthy growth and warding off illness. Rumeno Farmotech is a reputable supplier of veterinary products with more than 150 franchise locations nationwide, earning the trust of livestock owners. Select Rumeno Farmotech for happier animals and productive farming! </p>
                        <p>Rumeno Farmotech is aware that robust animal health is essential to agriculture. Their methodical methodology, based on research, guarantees that every feed supplement is precisely designed to fulfil certain dietary needs. Rumeno Farmotech produces outcomes whether it's preventing deficits, promoting growth, or boosting immunity.</p>

                    </div>
                    <div className="col-lg-12">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievment