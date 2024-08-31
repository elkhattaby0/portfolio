import Footer from "../components/Footer"
const NoPage = () => {
    return (
        <div className="h-[89vh] w-full flex flex-col justify-between items-center">
            <div 
                className="h-full flex flex-col justify-center"
                >
                <h1 
                    className="text-5xl font-bold text-center"
                >404</h1>
                <p
                    className="text-xl font-semibold text-gray-700"
                >Page not found</p>
            </div>
            <Footer />
        </div>
    )
}

export default NoPage