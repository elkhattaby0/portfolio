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
			<div className={styleHeader.dropdwon} id="dropdwon">
				<button className="absolute right-4 top-4 text-2xl hover:text-red-500" onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>X</button>
				<Link to="/" className={styleHeader.linkPg} onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>{current.Header.home}</Link>
				<Link to="/about" className={styleHeader.linkPg}  onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>{current.Header.about}</Link>
				<Link to="/projects" className={styleHeader.linkPg}  onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>{current.Header.projects}</Link>
				<Link to="/blog" className={styleHeader.linkPg}  onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>{current.Header.blog}</Link>
				<Link to="/contact" className={styleHeader.linkPg}  onClick={()=> {
					document.getElementById('dropdwon').className('hidden')
				}}>{current.Header.contact}</Link>
				<SwitchLang setLang={setLang} />
			</div>
			<nav className={styleHeader.navMobile}>
				<ul>
					<Link to="/" className={styleHeader.linkLogo}>{current.Header.logo}</Link>
				</ul>
				<ul>
					<button onClick={()=> {
						document.getElementById('dropdwon').className = "visible fixed bg-white h-screen w-full flex flex-col items-center justify-center"
					}}>
						<img src={require("../Images/Icons/menu.png")}
							alt="Menu"
							width='20px'
						/>
					</button>					
				</ul>
			</nav>
			<Outlet />
		</div>
		
	)
}

const styleHeader = {
	"div" : "mx-auto bg-[#fff] flex flex-col items-center  hero-image bg-cover bg-center h-screen object-cover mix-blend-overlay",
	"navLaptop" : "hidden  py-[20px] lg:flex justify-between items-center bg px-9 w-full",
	"linkLogo" : "font-bold text-2xl p-2 m-2",
	"linkPages" : "font-medium p-2 m-2",

	"navMobile" : "lg:hidden py-[20px] flex justify-between items-center content-center px-9 w-full",
	"dropdwon" : "hidden lg:hidden",
	"linkPg" : "flex font-medium w-full hover:bg-[#212121] hover:text-white py-3 justify-center"
	
}

export default Header;