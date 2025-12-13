import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Image from '../Image';
import BannerImg from "/src/assets/bannerImg.jpg";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <Image imgSrc={BannerImg} className={"h-80 w-full "}/>
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} className={"h-80 w-full"}/>
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} className={"h-80 w-full"}/>
                    </div>
                    
                </Slider>
            </div>
        </>
    )
}

export default Banner
