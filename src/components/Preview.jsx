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
            <div className="flex flex-col justify-between items-center">
                <img src={`../../images/image-product-${currentImg}.jpg`} className="w-1/2 mb-8 rounded-md" onClick={() => setModalStaus(!modalStatus)} />
                <div className="flex justify-between w-1/2">
                    {imgs.map(each => {
                        const overlay = each == currentImg ? 'opacity-50 border' : ''
                        return <img src={`../../images/image-product-${each}-thumbnail.jpg`} className={`w-1/5 rounded-md ${overlay}`} key={each} onClick={() => updateImage(each)} />
                    })}
                </div>
            </div>
            <PreviewModal visible={modalStatus} updateModalStatus={setModalStaus} />
        </>
    )
}

export default Preview;