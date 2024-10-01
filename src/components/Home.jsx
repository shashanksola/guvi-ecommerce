import Navbar from "./Navbar";
import Preview from "./Preview";
import ItemInfo from "./ItemInfo";
import CartModal from "./CartModal";
import { useState } from "react";

const Home = () => {
    const [quantity, setQuantity] = useState(0);
    const [tempQuantity, setTempQuantity] = useState(0);
    const [cartVisible, setCartVisible] = useState(false);
    return (
        <main className="w-screen">
            <Navbar cartVisible={cartVisible} updateCartVisible={setCartVisible} updateQuantity={setQuantity} />
            <hr />
            <div className="flex items-center justify-evenly mt-8 max-md:flex-col">
                <Preview />
                <ItemInfo quantity={tempQuantity} updateQuantity={setTempQuantity} updateCartQuantity={setQuantity} />
            </div>
            <CartModal cartVisible={cartVisible} updateCartVisible={setCartVisible} quantity={quantity} updateQuantity={setQuantity} />
        </main>

    )
}

export default Home;