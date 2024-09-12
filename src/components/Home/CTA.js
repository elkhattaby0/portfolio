import Palette from "../Palette";

const CTA = ({ currentLang }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
                className="h-fit max-md:h-fit p-10 w-10/12 max-md:w-full flex flex-col items-center justify-center rounded-xl max-md:rounded-none text-center max-md:text-left shadow my-8 "
                style={{backgroundColor: Palette.HighlightColor}}
            >  
            <h1 
                className="w-full font-semibold text-4xl font-bold"
                style={{color: Palette.backgroundColor}}
            >{currentLang.headline}</h1>
            <p
                className="w-full text-xl my-4"
                style={{color: Palette.secondaryColor}}
            >{currentLang.subheadline}</p>
            <div className="w-full">
                <button
                    onClick={() => scrollToSection('contact')}
                    className="w-[200px] text-xl p-4 rounded  hover:shadow-md"
                    style={{background: Palette.backgroundColor, color: Palette.secondaryColor}}
                >{currentLang.button}</button>            
            </div>
            
        </section>
    )
}

export default CTA;