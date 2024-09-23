import Palette from "../Palette"
import Image from "../ui/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = ({currentLang}) => {
    return (
            <section 
                className="h-screen max-md:h-fit py-8 w-10/12 flex flex-col items-center justify-center">    
                <h1 
                    data-aos="fade-up"
                    className="font-bold text-center max-md:text-left w-full my-10 text-3xl"
                    style={{color:Palette.HighlightColor}}
                >{currentLang.headtitle}</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {currentLang.content.map(n => (
                    <div class="py-" key={n.id}  data-aos="fade-up">
                        <details class="group">
                            <summary class="flex cursor-pointer list-none items-center justify-between font-medium border-b py-4">
                                <span 
                                    className="flex w-[200px] text-xl w-full text-left"
                                > 
                                    <p
                                        className="mr-1"
                                        style={{color: Palette.HighlightColor}}
                                    >{n.id}.</p>
                                    <p>{n.category}</p>
                                </span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="25"    
                                        shape-rendering="geometricPrecision"
                                        stroke={Palette.HighlightColor} stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="25">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>

                                </span>
                            </summary>
                            <div className="w-full flex flex-wrap p-">
                                {n.skills.map(p => (
                                    <div key={p.name} 
                                        className="flex w-1/2 items-center pl-4 p-3"    
                                    >
                                        <span className="rounded-full " style={{background: Palette.primaryColor}}>
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="25px"
                                            mix="mix-blend-normal p-1"                                            
                                        />
                                        </span>
                                        <p 
                                            className="ml-4 font-medium"
                                            style={{color:Palette.primaryColor}}
                                            >{p.name}</p>
                                    </div>
                                ))}
                                </div>
                        </details>
                    </div>
                    ))}
                </div>
            </section>
    )
}

export default Skills;
AOS.init();