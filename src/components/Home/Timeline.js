import Palette from "../Palette";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";

const Timeline = () => {
    return (
        <div class="w-full bg-purple- flex justify-center">
            <div className="w-10/12">
            <ParagraphFive 
                uicss="text-3xl text-center my-8"
                stl={Palette.secondaryColor}
            >&#8729; Qualification  &#8729;</ParagraphFive>
            <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                <div class="flex md:contents flex-row-reverse">
                    <div
                        class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 class="text-lg font-semibold lg:text-xl">Digital Development</h3>
                        <p class="mt-2 leading-6">OFPPT</p>
                        <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2022 - 2024</span>
                    </div>
                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div class="flex items-center justify-center w-6 h-full">
                            <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div class="flex md:contents">
                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div class="flex items-center justify-center w-6 h-full">
                            <div class="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 class="text-lg font-semibold lg:text-xl">chemistry</h3>
                        <p class="mt-2 leading-6">University</p>
                        <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2020 - 2022</span>
                    </div>
                </div>

                <div class="flex md:contents flex-row-reverse">
                    <div
                        class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 class="text-lg font-semibold lg:text-xl">high school diploma "BAC"</h3>
                        <p class="mt-2 leading-6">High School</p>
                        <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2022</span>
                    </div>
                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div class="flex items-center justify-center w-6 h-full">
                            <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div class="flex md:contents">
                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div class="flex items-center justify-center w-6 h-full">
                            <div class="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
                        <p class="mt-2 leading-6">Description of the second event.</p>
                        <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Timeline;