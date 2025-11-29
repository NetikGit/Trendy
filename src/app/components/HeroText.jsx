function HeroText(){
    return(
       <div className="absolute left-[126px] top-[100px] w-[548px] h-[316px] z-40 ">
        <div>
            <h5 className="text-blue-500 text-sm">AESTHETICS 2025</h5>
        </div>
        
        <div className="absolute top-[54px]">
           <h1 className="text-white text-5xl font-semibold "> NEW COLLECTION </h1>
        </div>
        <div className="absolute top-[120px] w-[369px] h-[60px]">
            <p className="text-white text-xs">
                New trendy clothes are available "Gen-z"love this collection
            </p>
             <p className="text-white text-xs">
                There is also a huge discount. 
            </p>
        </div>
        <div className="absolute top-[180px] w-[221px] h-[62px] bg-blue-500 rounded-xl text-black text-xl">
          <h1 className="absolute top-[16px] left-[60px] font-semibold text-white"> Shop Now </h1>  
        </div>
        </div>
        
    )
}

export default HeroText;