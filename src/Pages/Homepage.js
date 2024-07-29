
const Homepage = ({ current }) => {
	return (
		<div className={styleHomepage.divOne}>
			<div className={styleHomepage.hero}>
				<h1 className={styleHomepage.head}>{current.Homepage.heroSection.head}</h1>
				<p className={styleHomepage.text}>{current.Homepage.heroSection.text}</p>
				<button className={styleHomepage.buttonTxt}>{current.Homepage.heroSection.buttonTxt}</button>
			</div>

			<div className={styleHomepage.intro}>
				<img src={require("../Images/Avatar/profile.png")}
					alt="profile" 
					className={styleHomepage.img}
				/>
				<p className={styleHomepage.introTxt}>{current.Homepage.Introduction.Brief}</p>
			</div>

		</div>
	)
}

const styleHomepage = {
	"divOne" : "container max-md:w-11/12 h-full",

	"hero" : "h-5/6 -2 border-red-500 flex flex-col items-center justify-center min-md:space-x-20",
	"head" : "text-[#212121] text-4xl my-2 text-center",
	"text" : "text-[#212121] text-xl my-2 text-center",
	"buttonTxt" : "bg-[#212121] text-white px-5 py-3 my-2 rounded-xl hover:bg-white hover:text-[#212121] hover:border-2 hover:border-[#212121] text-center",

	"intro" : "h-fit -2 border-blue-500 mt-4  flex flex-col items-center justify-center ",
	'introTxt' : "w-11/12 my-4",
	"img" : "bg-[#e6e2d3] h-1/4 w-1/4 my-4 object-cover rounded-xl"
}

export default Homepage;