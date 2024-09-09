import Palette from "../Palette"
import Image from "../ui/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = ({currentLang}) => {
    return (
            <section 
                id=""
                className="h-screen max-md:h-fit py-8 w-10/12 flex flex-col items-center justify-center"
                style={{backgroundColor: Palette.backgroundColor}}
            >    
                <h1 
                    data-aos="fade-up"
                    className="font-bold text-center my-10 text-3xl"
                    style={{color:Palette.secondaryColor}}
                >&#8729; {currentLang.headtitle}  &#8729;</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="25px"
                                            mix="mix-blend-normal bg-gray-800 rounded-full p-1"
                                        />
                                        <p 
                                            className="text-[#f8f7f4] ml-4 text-md"
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