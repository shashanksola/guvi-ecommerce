const ItemInfo = ({ quantity, updateQuantity }) => {
    const removeItem = () => {
        if (quantity > 0) {
            updateQuantity(quantity - 1);
        }
    }

    const addItem = () => {
        if (quantity < 10) {
            updateQuantity(quantity + 1);
        }
    }

    return <div>
        <b className="text-slate-600 mb-4">SNEAKER COMPANY</b>
        <h1 className="text-5xl mb-2"><b>Fall Limited Edition</b></h1>
        <h1 className="text-5xl mb-8"><b>Sneakers</b></h1>
        <p className="text-slate-500 mb-6">
            These low profile sneakers are your perfect casual wear <br></br>
            companion. Featuring a durable rubber outer sole they'll <br></br>
            withstand everythin the weather can offer.
        </p>
        <div className="flex items-center mb-4">
            <b className="text-5xl mr-6">$125</b>
            <b className="bg-slate-900 rounded-md text-slate-100 p-2">50%</b>
        </div>
        <b className="rounded-md text-slate-500 p-2 line-through">$250.00</b>
        <div className="mt-4 flex">
            <div className="bg-slate-300 text-slate-950 flex justify-between items-center w-1/3 p-4 rounded-md">
                <button onClick={removeItem}>
                    <svg className="size-4 fill-orange-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 52.161 52.161" xml:space="preserve">
                        <g>
                            <path d="M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875   h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z" />
                        </g>
                    </svg>
                </button>
                <p className="text-slate-950 text-xl font-bold">{quantity}</p>
                <button onClick={addItem}>
                    <svg className="size-4 fill-orange-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 60.364 60.364" xml:space="preserve">
                        <g>
                            <path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269   L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91   c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z" />
                        </g>
                    </svg>
                </button>
            </div>
            <button className="bg-orange-600 rounded-md text-slate-950 font-bold text-xl ml-4 w-2/3 flex justify-center items-center">
                <svg className="fill-slate-950" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
                <p>Add To Cart</p>
            </button>
        </div>
    </div>
}

export default ItemInfo;