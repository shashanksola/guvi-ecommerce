import Navbar from "./Navbar";
import Preview from "./Preview";

const Home = () => {
    return (
        <>
            <Navbar />
            <hr />
            <div className="mt-24">
                <Preview />
            </div>
        </>
    )
}

export default Home;