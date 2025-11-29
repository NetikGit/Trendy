import Link from "next/link";

function Navbar (){
    return(
<div className={`absolute left-[50px] top-[10px] rounded-xl bg-gradient-to-r from-black to-gray-800 mix-blend-multiple `}>
    <div className="w-[1390px] h-[76px] shadow-xl text-black font-light tracking-widest">
        <div className="absolute left-[38px] top-[13px] text-3xl font-semibold italic text-white">
            TRENDY
        </div>  
        <div className="absolute left-[265px] top-[16.5px] text-white ">
            Home
        </div>
          <div className="flex absolute left-[350px] top-[16.5px] text-white ">
            New arrivals 
            <div className="absolute left-[130px] text-white">
            Tops
            </div>
            <div className="absolute left-[210px] text-white">
            Bottoms
            </div>
            <div className="absolute left-[300px] text-white">
            Shop
            </div>
             </div>
            <div className="absolute left-[900px] top-[16.5px]">
                <div className="absolute left-[32px] top-[2px] text-blue-800">
                Login/Register
                   
                <div className=" absolute left-[180px] top-[2px] text-blue-800">
                    🔎  
                </div>
                <Link href = "/add">
                <div className=" absolute left-[220px] top-[2px] flex text-blue-800">
                  🛒   
                </div>
                </Link>
                <div className=" absolute left-[260px] top-[2px]  flex text-blue-800">
                  ❤️
                </div>
                </div>
             
            </div>
        </div>

</div>
    )
}

export default Navbar;