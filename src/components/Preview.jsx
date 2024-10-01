import { useState } from "react";
import PreviewModal from "./PreviewModal";

//image-product-2
const imgs = [1, 2, 3, 4];
const Preview = () => {
    const [currentImg, setCurrentImg] = useState(1);
    const [modalStatus, setModalStaus] = useState(false);

    const updateImage = (num) => {
        setCurrentImg(num);
    }

    return (
        <>
            <div className="flex flex-col justify-between w-1/2 max-md:w-screen items-center lg:w-1/3">
                <img src={`../assets/images/image-product-${currentImg}.jpg`} className="w-5/6 mb-8 rounded-md max-md:pointer-events-none" onClick={() => setModalStaus(!modalStatus)} />
                <div className="flex justify-between w-5/6">
                    {imgs.map(each => {
                        const overlay = each == currentImg ? 'border' : ''
                        return <img src={`../assets/images/image-product-${each}-thumbnail.jpg`} className={`w-1/5 rounded-md ${overlay} z-10`} key={each} onClick={() => updateImage(each)} />
                    })}
                </div>
            </div>
            <PreviewModal visible={modalStatus} updateModalStatus={setModalStaus} />
        </>
    )
}

export default Preview;