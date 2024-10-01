import Navbar from "./Navbar";
import Preview from "./Preview";
import ItemInfo from "./ItemInfo";
import { useState } from "react";

const Home = () => {
    const [quantity, setQuantity] = useState(0);
    return (
        <>
            <Navbar />
            <hr />
            <div className="flex items-center mt-8">
                <Preview />
                <ItemInfo quantity={quantity} updateQuantity={setQuantity} />
            </div>
        </>
    )
}

export default Home;