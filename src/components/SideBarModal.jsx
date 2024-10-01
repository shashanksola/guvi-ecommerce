const SideBarModal = ({ visible, updateVisible }) => {
    if (!visible) return null;

    return <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm overscroll-none z-40">
        <div className="bg-slate-50 w-3/4 h-full p-8">
            <svg onClick={() => { updateVisible(false) }} className="mb-4 fill-slate-900" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" onClick={() => updateModalStatus(false)} /></svg>
            <p className="text-slate-800 text-xl mb-4">Collections</p>
            <p className="text-slate-800 text-xl mb-4">Men</p>
            <p className="text-slate-800 text-xl mb-4">Women</p>
            <p className="text-slate-800 text-xl mb-4">About</p>
            <p className="text-slate-800 text-xl mb-4">Contact</p>
        </div>
    </div>
}

export default SideBarModal;