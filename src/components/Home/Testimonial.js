import React from 'react';
import Slider from "react-slick";
import Image from "../ui/Image";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Space from "../ui/Space";
import Palette from '../Palette';

const Data = [
    { img: "ribab.jpg", name: "Client 1", msg: "Working with Lahoucine was a game-changer. His expertise and dedication were remarkable." },
    { img: "ribab.jpg", name: "Client 2", msg: "Lahoucine exceeded our expectations with his innovative solutions and excellent service." },
    { img: "ribab.jpg", name: "Client 3", msg: "Exceptional work! Lahoucine's attention to detail and professionalism were outstanding." },
    { img: "ribab.jpg", name: "Client 4", msg: "Lahoucine's creativity and problem-solving skills made our project a success. Highly recommended." },
    { img: "ribab.jpg", name: "Client 5", msg: "We were impressed by Lahoucine's ability to deliver high-quality work on time. His expertise is unmatched." },
    { img: "ribab.jpg", name: "Client 6", msg: "Lahoucine's commitment to our project was evident in the results. His skills are top-notch." }
];

const Testimonial = () => {
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
                className="rounded-md flex flex-col justify-between h-[350px] mt-8 w-[99%] max-md:w-full max-md:h-fit p-8"
                style={{backgroundColor: Palette.primaryColor}}
            >
                <div className="p-0 m-0">
                    <p 
                        className="text-9xl opacity-50"
                        style={{color: Palette.secondaryColor}}
                    >&#10077;</p>
                    <p 
                        style={{color: Palette.accentColor}}
                        className="text-2xl font-normal leading-8 relative -top-10"
                        
                    >{props.msg}</p>
                </div>
                <div className="flex items-center max-md:mt-5">
                    <div 
                        style={{border: `1px solid ${Palette.HighlightColor}`}}
                        className="w-[35px] border-2 rounded-full bg-[#f8f7f4]">
                        <Image url={props.img} alt={props.name} mix="rounded-full" />
                    </div>
                    <p 
                        className="text-sm ml-4 italic"
                        style={{color: Palette.accentColor}}    
                    >{props.name}</p>
                </div>
            </div>
        )
    }

    return (
        <div 
            style={{backgroundColor: Palette.primaryColor}}
            className="flex flex-col items-center justify-center w-full h-fit border- py-8">
            <ParagraphFive 
                uicss="text-center text-3xl"
                stl={Palette.backgroundColor}    
            >&#8729; Client Feedback &#8729;</ParagraphFive>
            <Space />
            <div className="w-10/12 h-fit">
                <Slider {...settings}>
                    {Data.map((n, index) => (
                        <Card key={index} img={n.img} name={n.name} msg={n.msg} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial;
