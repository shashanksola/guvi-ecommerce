import { useState } from "react";

//image-product-2
const imgs = [1, 2, 3, 4];
const Preview = () => {
    const [currentImg, setCurrentImg] = useState(1);

    return (
        <div className="w-1/2 flex flex-col justify-between items-center">
            <img src={`../../images/image-product-${currentImg}.jpg`} className="w-1/2 mb-8 rounded-md" />
            <div className="flex justify-between w-1/2">
                {imgs.map(each => {
                    return <img src={`../../images/image-product-${each}-thumbnail.jpg`} className="w-1/5 rounded-md" key={each} />
                })}
            </div>
        </div>
    )
}

export default Preview;