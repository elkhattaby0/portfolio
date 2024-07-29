
const Homepage = ({ current }) => {
	return (
		<div className={styleHomepage.divOne}>
			<div className={styleHomepage.hero}>
				<h1 className={styleHomepage.head}>{current.Homepage.heroSection.head}</h1>
				<p className={styleHomepage.text}>{current.Homepage.heroSection.text}</p>
				<button className={styleHomepage.buttonTxt}>{current.Homepage.heroSection.buttonTxt}</button>
			</div>

			<div className={styleHomepage.intro}>
				<p>{current.Homepage.Introduction.Brief}</p>
				<img src="" alt="" />
			</div>

		</div>
	)
}

const styleHomepage = {
	"divOne" : "container border-2 h-5/6",
	"hero" : " border-2 border-red-500 flex flex-col items-center justify-center space-x-20	h-4/5",
	"head" : "text-[#212121] text-4xl",
	"text" : "text-[#212121] text-xl",
	"buttonTxt" : "bg-[#212121] text-white px-5 py-3 rounded-xl",

	"intro" : " border-2 border-blue-500"
}

export default Homepage;