import React, {useRef} from 'react';
import Slider, {Settings} from 'react-slick';

export const Slideshow = () => {
    const slide: any = useRef(null);
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "",
    };


    return (
        <div className="slide-container">
            <Slider {...settings}>
                <img/>
            </Slider>
        </div>
    )
}