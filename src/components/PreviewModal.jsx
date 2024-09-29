import { useState } from "react";

const imgs = [1, 2, 3, 4];

const PreviewModal = ({ visible }) => {
    if (!visible) return null;
    const [currentImg, setCurrentImg] = useState(1);

    const updateImage = (num) => {
        setCurrentImg(num);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center h-screen">
                <svg className="mb-4" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg>
                <img src={`../../images/image-product-${currentImg}.jpg`} className="mb-8 rounded-md w-1/3" />
                <div className="flex justify-between w-1/3 px-4">
                    {imgs.map(each => {
                        const overlay = each == currentImg ? '' : ''
                        return <img src={`../../images/image-product-${each}-thumbnail.jpg`} className="w-28 rounded-md " key={each} onClick={() => updateImage(each)} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PreviewModal;