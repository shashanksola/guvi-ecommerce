const CartModal = ({ cartVisible, updateCartVisible, quantity, updateQuantity }) => {

    if (cartVisible === false) return null;

    return <div className="fixed inset-0 overscroll-none z-20 flex justify-end items-start">
        {quantity === 0 ? <div className="bg-slate-50 min-h-48 max-md:w-5/6 w-1/3 m-20 p-4 drop-shadow-2xl flex justify-center items-center"><p>Your Cart is Empty.</p></div> : <div className="bg-slate-100 min-h-36 max-md:w-5/6 w-1/3 m-20 p-4">
            <p className="text-xl font-semibold mb-4">Cart</p>
            <div className="flex items-center justify-evenly mb-4">
                <img src="../assets/images/image-product-1-thumbnail.jpg" className="w-1/6 rounded-md" />
                <p className="text-slate-500 font-semibold">
                    Fall Limited Edition Sneakers <br></br>
                    $125.00x{quantity} <b className="text-slate-800">{parseFloat(125 * quantity).toFixed(2)}</b>
                </p>
                <svg onClick={() => updateQuantity(0)} className="size-6 fill-slate-600" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z" /></g></svg>
            </div>
            <button className="bg-orange-600 rounded-md text-slate-950 font-bold text-xl ml-4 w-5/6 h-12 flex justify-center items-center drop-shadow-md">Checkout</button>
        </div>}
    </div >
}

export default CartModal;