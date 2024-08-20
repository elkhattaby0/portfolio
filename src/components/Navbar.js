import { Link, Outlet } from "react-router-dom"

import Columns from "./ui/Columns"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"
import ParagraphSix from "./ui/Paragraph/ParagraphSix"
import SocialMedia from "./SocialMedia"
import MenuResposive from "./MenuResposive"


const Navbar = () => {
    const uicss = {
        "fullcontainer": "bg-[#f8f7f4] w-full flex flex-col justify- items-center",
        "container": "bg-[#f8f7f4] flex w-10/12 justify-between items-center",

        "logo": "uppercase py-4 text-[#0D0C22]",
        "links": "uppercase py-4 px-2 text-[#0D0C22]"
    }

    return (
        <div className={uicss.fullcontainer}>
            <div className={uicss.container}>
                <Columns>
                    <ParagraphFive uicss={uicss.logo}>
                        <Link to="/">Logo</Link>
                    </ParagraphFive>
                </Columns>
                <Columns nbr={5} uicss="max-md:hidden">
                    <ParagraphSix uicss={uicss.links}>
                        <Link to='/'>Home</Link>
                    </ParagraphSix>
                    <ParagraphSix uicss={uicss.links}>
                        <Link to='/projects'>Projects</Link>
                    </ParagraphSix>
                    <ParagraphSix uicss={uicss.links}>
                        <Link to='/services'>Services</Link>
                    </ParagraphSix>
                    <ParagraphSix uicss={uicss.links}>
                        <Link to='/contact'>Contact</Link>
                    </ParagraphSix>
                    <ParagraphSix uicss={uicss.links}>
                        <Link to='/about'>About</Link>
                    </ParagraphSix>
                </Columns>
                <Columns uicss="hidden max-md:flex bg-[#f8f7f4]">
                    <MenuResposive />
                </Columns>
            </div>
            {/* <SocialMedia /> */}
            <Outlet />
        </div>    
    )
}

export default Navbar