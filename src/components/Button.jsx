export default function Button({children, onClick, className}){
    return <button onClick={onClick} className={`px-12 text-2xl rounded-full bg-zinc-800 hover:bg-stone-600 font-bold text-white py-4 ${className}`}>
        {children}
    </button>
}