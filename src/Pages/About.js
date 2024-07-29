

const AboutMe = ({ current }) => {
	return (
		<div className={styleAbout.divOne}>
			{/* <p className={styleAbout.bio}>Bio</p> */}
			<div>
				<p>{current.AboutMe.bio1title}</p>
				<p>{current.AboutMe.bio1}</p>
			</div>
			<div>
				<p>{current.AboutMe.bio2title}</p>
				<p>{current.AboutMe.bio2}</p>
			</div>

			<div>
				<p>{current.AboutMe.bio3title}</p>
				<p>{current.AboutMe.bio3}</p>
				<ul>
					{
						current.AboutMe.bio3ul.map(n=> (
							<li>{n}</li>
						))
					}
				</ul>
			</div>
			
		</div>
	)
}

const styleAbout = {
	"divOne" : "container max-md:w-11/12 h-full",
	"bio" : "h-5/6 border-2 border-red-500 flex flex-col items-center justify-center min-md:space-x-20"
}

export default AboutMe;