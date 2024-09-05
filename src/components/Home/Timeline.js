import Palette from "../Palette";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";

const Timeline = () => {
    return (
        <div class="w-full bg-purple- flex justify-center">
            <div className="w-10/12">
                <ParagraphFive
                    uicss="text-3xl text-center my-8"
                    stl={Palette.secondaryColor}
                >&#8729; Journey &#8729;</ParagraphFive>

                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    {/* Left */}
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl"
                            >Freelancer</h3>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"
                            >2024 - Now</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>
                    {/* Right */}
                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl">Internship</h3>
                            <p class="mt-2 leading-6">Restaurant website</p>
                            <p class="mt-2 leading-6">At Nowotch</p>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2024</span>
                        </div>
                    </div>

                    {/* Left */}
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl"
                            >Full Stack Developer</h3>
                            <p class="mt-2 leading-6">OFPPT</p>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"
                            >2023 - 2024</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>
                    {/* Right */}
                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl">Macdonald</h3>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2023</span>
                        </div>
                    </div>

                    <div class="flex md:contents flex-row-reverse">
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl">Full Stack Developer</h3>
                            <p class="mt-2 leading-6">OFPPT</p>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2022 - 2023</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl">Chemistry</h3>
                            <p class="mt-2 leading-6">University</p>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2020 - 2022</span>
                        </div>
                    </div>
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            style={{ backgroundColor: "lightgray" }}
                            class="relative p-4 my-6 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3
                                style={{ color: Palette.primaryColor }}
                                class="text-lg font-semibold lg:text-xl"
                            >Life and Earth Sciences</h3>
                            <p class="mt-2 leading-6">High School</p>
                            <span
                                style={{ color: Palette.primaryColor }}
                                class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"
                            >2020</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div
                                    style={{ backgroundColor: Palette.HighlightColor }}
                                    class="w-1 h-full rounded-t-full">
                                </div>
                            </div>
                            <div
                                style={{ backgroundColor: Palette.backgroundColor, border: `4px solid ${Palette.HighlightColor}` }}
                                class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;