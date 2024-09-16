import React from 'react';
import Slider from "react-slick";
import Image from "../ui/Image";
import Palette from '../Palette';


const Testimonial = ({currentLang}) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const Card = (props) => {
        return (
            <div 
                className="rounded-md flex flex-col justify-between h-[320px] mt-8 w-[98%] max-md:w-full max-md:h-fit  p-4"
                style={{backgroundColor: Palette.secondaryColor}}
            >
                <div className="p-0 m-0">
                    <p 
                        className="text-9xl opacity-50"
                        style={{color: Palette.backgroundColor}}
                    >&#10077;</p>
                    <p 
                        style={{color: Palette.backgroundColor}}
                        className="text-xl font-normal leading-8 relative -top-10"
                        
                    >{props.msg}</p>
                </div>
                <div className="flex items-center max-md:mt-3 relative -top-3">
                    <div 
                        style={{border: `1px solid ${Palette.HighlightColor}`}}
                        className="w-[35px] border-2 rounded-full bg-[#f8f7f4]">
                        <Image url={props.img} alt={props.name} mix="rounded-full" />
                    </div>
                    <p 
                        className="text-sm ml-4 italic opacity-50"
                        style={{color: Palette.backgroundColor}}    
                    >{props.name}</p>
                </div>
            </div>
        )
    }

    return (
        <section 
            style={{backgroundColor: Palette.primaryColor}}
            className="flex flex-col items-center justify-center w-full h-fit border- py-8">
            <h1 
                data-aos="fade-up"
                className="font-bold text-center my-10 text-3xl"
                style={{color:Palette.backgroundColor}}   
            >{currentLang.headtitle}</h1>
            <br />
            <div className="w-10/12 h-fit">
                <Slider {...settings}>
                    {currentLang.content.map((n, index) => (
                        <Card key={index} img={n.img} name={n.name} msg={n.msg} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Testimonial;
