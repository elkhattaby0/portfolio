import { Outlet, Link } from "react-router-dom";
import SwitchLang from "./SwitchLang";

const Header = ({ current, setLang }) => {

	return (
		<div className={styleHeader.div} dir={current.Header.dir}>
			<nav className={styleHeader.navLaptop}>
				<ul>
					<Link to="/" className={styleHeader.linkLogo}>{current.Header.logo}</Link>
				</ul>
				<ul>
					<Link to="/" className={styleHeader.linkPages} >{current.Header.home}</Link>
					<Link to="/about" className={styleHeader.linkPages}>{current.Header.about}</Link>
					<Link to="/projects" className={styleHeader.linkPages}>{current.Header.projects}</Link>
					<Link to="/blog" className={styleHeader.linkPages}>{current.Header.blog}</Link>
					<Link to="/contact" className={styleHeader.linkPages}>{current.Header.contact}</Link>
					<SwitchLang setLang={setLang} />
				</ul>
			</nav>
			<nav className={styleHeader.navMobile}>
				<ul>
					<Link to="/" className={styleHeader.linkLogo}>{current.Header.logo}</Link>
				</ul>
				<ul>
					<button>+</button>
					{/* <Link to="/" className={styleHeader.linkPages} >{current.Header.home}</Link>
					<Link to="/about" className={styleHeader.linkPages}>{current.Header.about}</Link>
					<Link to="/projects" className={styleHeader.linkPages}>{current.Header.projects}</Link>
					<Link to="/blog" className={styleHeader.linkPages}>{current.Header.blog}</Link>
					<Link to="/contact" className={styleHeader.linkPages}>{current.Header.contact}</Link>
					<SwitchLang setLang={setLang} /> */}
				</ul>
			</nav>
			<Outlet />
		</div>
		
	)
}

const styleHeader = {
	"div" : "mx-auto bg-[#fff] flex flex-col items-center  hero-image bg-cover bg-center h-screen object-cover mix-blend-overlay",
	"navLaptop" : "hidden  h-1/6 lg:flex justify-between items-center  bg px-9 w-full",
	"linkLogo" : "font-bold text-2xl p-2 m-2",
	"linkPages" : "font-medium p-2 m-2",

	"navMobile" : "lg:hidden  min-md:hidden flex justify-between items-center  bg-blue-400 px-9 w-full"
	
}

export default Header;