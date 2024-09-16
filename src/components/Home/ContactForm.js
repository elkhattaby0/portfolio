import Palette from "../Palette";
import Button from "../ui/Button";
import Phone from "../../assets/svg/Phone";
import Email from "../../assets/svg/Email";
import { useState } from "react";
import Sucess from "../../assets/svg/Success";
import Failed from "../../assets/svg/Failed";

const Loading = (props) => {
    let content;  

    switch (props.status) {
        case 'loading':
            content = (
                <>
                    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <p className="text-xl mt-4">Loading...</p>
                </>
            );
            break;
        case 'success':
            content = (
                <>
                    <span className="w-[30%]">{props.svgg || <Sucess />}</span>
                    <p className="text-xl mt-4 text-green-500">{props.msg || 'Action completed successfully!'}</p>
                </>
            );
            break;
        case 'failed':
            content = (
                <>
                    <span className="w-[30%]">{props.svgg || <Failed />}</span>
                    <p className="text-xl mt-4 text-red-500">{props.msg || 'Action failed. Please try again!'}</p>
                </>
            );
            break;
        default:
            content = null;
    }

    return (
        <div
            style={{ backgroundColor: props.backgroundColor || "#fff" }}
            className={`${
                props.show === 'visible' ? 'block' : 'hidden'
            } fixed top-20 z-20 border h-1/2 w-1/4 max-md:w-4/5 rounded-xl shadow flex flex-col items-center justify-center`}
        >
            {content}
        </div>
    );
};


const ContactForm = ({ currentLang }) => {
    const [data, setData] = useState({})
    const [loadingState, setLoadingState] = useState({status: 'loading', msg: '', svg: null, show: 'hidden',});

    

    const getData = (e) => {
        const { name, value } = e.target
        setData(n => ({ ...n, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoadingState({
            status: 'loading',
            show: 'visible',
        });

        fetch('https://formspree.io/f/mpwankrw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                setLoadingState({
                        status: 'success',
                        msg: 'Message sent successfully!',
                        svg: <Sucess />,
                        show: 'visible',
                })
            } else {
                setLoadingState({
                    status: 'failed',
                    msg: 'Failed to send message!',
                    svg: <Failed />,
                    show: 'visible',
                });
            }
            setTimeout(() => {
                setLoadingState((prev) => ({ ...prev, show: 'hidden' }));
            }, 3000);
        }, 3000);
        

    }

    return (
        <section 
            id="contact"
            className="w-full flex flex-col items-center mb-4 py-4">
            <h1
                data-aos="fade-up"
                className="font-bold text-center max-md:text-left w-10/12 my-10 text-3xl"
                style={{ color: Palette.HighlightColor }}
            >
            {currentLang.headtitle}
            </h1>
            <div className="w-10/12 flex max-md:flex-col">
                <div className="w-1/2 max-md:w-full">
                    <div className="flex">
                        <h1
                            data-aos="fade-up"
                            className="text-md font-semibold"
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
                                className="text-xl font-normal mt-1"
                                style={{ color: Palette.primaryColor }}
                            >
                                {currentLang.content.info[0].value}
                            </p>
                        </span>
                    </div>
                    <div className="flex my-4">
                        <h1
                            data-aos="fade-up"
                            className="text-md font-semibold"
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
                                className="text-xl font-normal mt-1"
                                style={{ color: Palette.primaryColor }}
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
                        <Button uicss="font-normal" type="submit">{currentLang.content.form.btn}</Button>
                    </div>
                </form>
            </div>
            <Loading 
                status={loadingState.status}
                msg={loadingState.msg}
                svg={loadingState.svgg}
                show={loadingState.show}
            />
            
        </section>
    )
}

export default ContactForm;
