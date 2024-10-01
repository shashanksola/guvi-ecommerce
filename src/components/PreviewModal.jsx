import { useState } from "react";

const imgs = [1, 2, 3, 4];

const PreviewModal = ({ visible, updateModalStatus }) => {
    if (!visible) return null;
    const [currentImg, setCurrentImg] = useState(1);

    const updateImage = (num) => {
        setCurrentImg(num);
    }

    const nextImage = () => {
        if (currentImg <= 3) {
            setCurrentImg(currentImg + 1);
        }
    }

    const prevImage = () => {
        if (currentImg > 1) {
            setCurrentImg(currentImg - 1);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center h-screen">
                <svg className="mb-4 fill-slate-400 hover:fill-orange-600" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" onClick={() => updateModalStatus(false)} /></svg>
                <div className="flex justify-center items-center">
                    <div className='bg-slate-300 rounded-full h-8 w-8 flex justify-center items-center' style={{ margin: '-16px', zIndex: '1' }} onClick={() => prevImage()}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                    </div>
                    <img src={`../../images/image-product-${currentImg}.jpg`} className="mb-8 rounded-md w-1/2" />
                    <div className='bg-slate-300 rounded-full h-8 w-8 flex justify-center items-center' style={{ margin: '-16px' }} onClick={() => nextImage()}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                    </div>
                </div>
                <div className="flex justify-between w-1/4 px-4">
                    {imgs.map(each => {
                        const overlay = each == currentImg ? 'opacity-50 border' : ''
                        return <img src={`../../images/image-product-${each}-thumbnail.jpg`} className={`w-20 rounded-md ${overlay} border-orange-500`} key={each} onClick={() => updateImage(each)} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PreviewModal;