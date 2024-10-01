import Navbar from "./Navbar";
import Preview from "./Preview";
import ItemInfo from "./ItemInfo";
import { useState } from "react";

const Home = () => {
    const [quantity, setQuantity] = useState(0);
    return (
        <main className="w-screen">
            <Navbar />
            <hr />
            <div className="flex items-center justify-evenly mt-8 max-md:flex-col">
                <Preview />
                <ItemInfo quantity={quantity} updateQuantity={setQuantity} />
            </div>
        </main>
    )
}

export default Home;