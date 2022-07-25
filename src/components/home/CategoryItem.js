
export default function CategoryItem({ item }){
    return(
        <div className={`bg-white flex items-center justify-center gap-y-4 flex-col p-4 rounded cursor-pointer select-none `}>
            <img src={item.image} />
            <span className='font-semibold text-[15px]'>
             {item.title_en}
            </span>
        </div>
    )
}