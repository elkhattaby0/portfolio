import { Link, Outlet } from "react-router-dom"

import Columns from "./ui/Columns"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"
import ParagraphSix from "./ui/Paragraph/ParagraphSix"
import MenuResposive from "./MenuResposive"
import Logo from "./ui/Logo"
import Palette from "./Palette"


const Navbar = () => {
    const uicss = {
        "fullcontainer": "w-full flex flex-col justify- items-center",
        "container": "flex w-10/12 justify-between items-center",

        "logo": "uppercase py-4",
        "links": "uppercase py-4 px-2"
    }

    return (
        <div className={uicss.fullcontainer} style={{backgroundColor:Palette.backgroundColor}}>
            <div className="sticky top-0 z-10 shadowe-md w-full bg-red-500 flex justify-center">
                <h1
                    className="text-xl max-md:text-sm py-1"
                    style={{color: Palette.primaryColor}}
                >&#x26A0; Website still under development &#x26A0;</h1>
            </div>
            <div 
                className="w-full flex justify-center"
                style={{backgroundColor: Palette.primaryColor}}
            >
                <div className={uicss.container}>
                    <Columns>
                        <ParagraphFive uicss={uicss.logo}>
                            <Link to="/">
                                <Logo 
                                    logo={Palette.HighlightColor}
                                    bk='none'
                                    w="20px"
                                />
                            </Link>
                        </ParagraphFive>
                    </Columns>
                    <Columns nbr={5} uicss="max-md:hidden">
                        <ParagraphSix uicss={uicss.links} stl={Palette.HighlightColor}>
                            <Link to='/'>Home</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={uicss.links} stl={Palette.HighlightColor}>
                            <Link to='/projects'>Projects</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={uicss.links} stl={Palette.HighlightColor}>
                            <Link to='/services'>Services</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={uicss.links} stl={Palette.HighlightColor}>
                            <Link to='/contact'>Contact</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={uicss.links} stl={Palette.HighlightColor}>
                            <Link to='/about'>About</Link>
                        </ParagraphSix>
                    </Columns>
                    <Columns uicss={"hidden max-md:flex"} stl={Palette.HighlightColor}>
                        <MenuResposive />
                    </Columns>
                </div>
            </div>
            {/* <SocialMedia /> */}
            <Outlet />
        </div>    
    )
}

export default Navbar