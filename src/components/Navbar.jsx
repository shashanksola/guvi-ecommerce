import { useState } from "react";
import SideBarModal from "./SideBarModal";

const Navbar = ({ cartVisible, updateCartVisible, updateQuantity }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <nav className="container flex justify-around items-center p-4">
                <svg onClick={() => setVisible(true)} className="hidden max-md:block" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" /></svg>
                <div className="flex flex-row justify-around w-4/6 items-center">
                    <h2 style={{ fontFamily: "sans-serif", fontWeight: '700', fontSize: '25px' }}>sneakers</h2>
                    <p className="text-gray-400 max-md:hidden">Collections</p>
                    <p className="text-gray-400 max-md:hidden">Men</p>
                    <p className="text-gray-400 max-md:hidden">Women</p>
                    <p className="text-gray-400 max-md:hidden">About</p>
                    <p className="text-gray-400 max-md:hidden">Contact</p>
                </div>
                <div className="flex justify-between w-20 items-center">
                    <div onClick={() => updateCartVisible(!cartVisible)} className="z-30">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg>
                    </div>
                    <img src="../../images/image-avatar.png" style={{ height: '30px' }} />
                </div>
            </nav>
            <SideBarModal visible={visible} updateVisible={setVisible} />
        </>
    )
}

export default Navbar;