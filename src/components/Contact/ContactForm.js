import Palette from "../Palette";
import Button from "../ui/Button";
import Phone from "../../assets/svg/Phone";
import Email from "../../assets/svg/Email";
import { useState } from "react";

const Loading = () => {
    return (
        <div
            style={{backgroundColor: Palette.backgroundColor}}
            className="fixed top-[30%] z-10 border h-1/2 w-1/2 max-md:w-screen max-md:h-screen max-md-top-[0%] rounded-xl shadow-md"
        >

        </div>
    )
}

const ContactForm = ({ currentLang }) => {
    const [data, setData] = useState({})
    const [captcha, setCaptcha] = useState(null);

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const getData = (e) => {
        const { name, value } = e.target
        setData(n => ({ ...n, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        fetch('https://formspree.io/f/mpwankrw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        });
    }

    return (
        <section className="w-full flex flex-col items-center mb-4 py-4">
            <h1
                data-aos="fade-up"
                className="font-bold text-center my-10 text-3xl"
                style={{ color: Palette.secondaryColor }}
            >
                &#8729; {currentLang.headtitle} &#8729;
            </h1>
            <div className="w-10/12 flex max-md:flex-col">
                <div className="w-1/2 max-md:w-full">
                    <div className="flex">
                        <h1
                            data-aos="fade-up"
                            className="text-md"
                            style={{ color: Palette.HighlightColor }}
                        >
                            <Phone />
                        </h1>
                        <span className="px-4">
                            <h1
                                data-aos="fade-up"
                                className="text-xl"
                                style={{ color: Palette.primaryColor }}
                            >
                                {currentLang.content.info[0].name}
                            </h1>
                            <p
                                data-aos="fade-up"
                                className="text-xl mt-1"
                                style={{ color: Palette.secondaryColor }}
                            >
                                {currentLang.content.info[0].value}
                            </p>
                        </span>
                    </div>
                    <div className="flex my-4">
                        <h1
                            data-aos="fade-up"
                            className="text-md"
                            style={{ color: Palette.HighlightColor }}
                        >
                            <Email />
                        </h1>
                        <span className="px-4">
                            <h1
                                data-aos="fade-up"
                                className="text-xl"
                                style={{ color: Palette.primaryColor }}
                            >
                                {currentLang.content.info[1].name}
                            </h1>
                            <p
                                data-aos="fade-up"
                                className="text-xl mt-1"
                                style={{ color: Palette.secondaryColor }}
                            >
                                {currentLang.content.info[1].value}
                            </p>
                        </span>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-1/2 max-md:w-full flex flex-col items-center justify-start">
                    {
                        currentLang.content.form.input.map(n => (
                            <input
                                key={n.id}
                                data-aos="fade-up"
                                placeholder={n.placeholder}
                                className="w-full outline-none my-2 px-4 rounded-md border"
                                style={{ backgroundColor: Palette.backgroundColor, height: n.height, color: Palette.primaryColor }}
                                type={n.type}
                                name={n.name}
                                value={data[n.name] || ""}
                                onChange={getData}
                                required
                            />
                        ))
                    }
                    <textarea
                        data-aos="fade-up"
                        placeholder={currentLang.content.form.textarea.placeholder}
                        className="w-full outline-none my-2 px-4 pt-4 rounded-md border"
                        style={{ backgroundColor: Palette.backgroundColor, height: "150px", color: Palette.primaryColor }}
                        name={currentLang.content.form.textarea.name}
                        value={data[currentLang.content.form.textarea.name] || ""}
                        onChange={getData}
                        required
                    />
                    <div
                        data-aos="fade-up"
                        className="w-full max-md:w-full mt-2 flex justify-start"
                    >
                        <Button type="submit">{currentLang.content.form.btn}</Button>
                    </div>
                </form>
            </div>
            {/* <Loading /> */}
        </section>
    )
}

export default ContactForm;
