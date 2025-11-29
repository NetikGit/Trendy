'use client'


import ProductCard from "./ProductCard";
import { useState } from "react";
import SpecificCard from "../components/SpecificCard";
  const categories = ["PANT'S", "VEST'S", "T-SHIRT'S", "BABY TEE'S"];
   const Products = [
    {
      id : "1",
      category: "PANT'S",
      image: "/image.png",
      title: "UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 44,
    },
    {
      id : "2",
      category: "PANT'S",  
      image: "/image2.png",
      title: "MUTATION UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,799.00",
      originalPrice: "3,199.00",
      discount: 44,
    },
    {
      id : "3",
      category: "PANT'S",  
      image: "/image3.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
    {
      id : "4",
      category: "PANT'S",  
      image: "/image4.png",
      title: "RAZOR BROWN STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
    {
      id : "5",
      category: "T-SHIRT'S",  
      image: "/image9.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "6",
      category: "T-SHIRT'S",  
      image: "/image10.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "7",
      category: "T-SHIRT'S",  
      image: "/image11.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "8",
      category: "T-SHIRT'S",  
      image: "/image12.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
    {
      id : "9",
      category: "VEST'S",  
      image: "/image5.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "10",
      category: "VEST'S",  
      image: "/image6.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "11",
      category: "VEST'S",  
      image: "/image7.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
       {
      id : "12",
      category: "VEST'S",  
      image: "/image8.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
        {
      id : "13",
          category: "BABY TEE'S",
      image: "/image13.png",
      title: "UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 44,
    },
    {
      id : "14",
      category: "BABY TEE'S",  
      image: "/image14.png",
      title: "MUTATION UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,799.00",
      originalPrice: "3,199.00",
      discount: 44,
    },
    {
      id : "15",
      category: "BABY TEE'S",  
      image: "/image15.png",
      title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
    {
      id : "16",
      category: "BABY TEE'S",  
      image: "/image16.png",
      title: "RAZOR BROWN STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 47,
    },
  ];

function BarSection(){
    const [activeCategorie, setActiveCategorie] = useState("PANT'S")
    const filteredProducts = Products.filter(
    (product) => product.category === activeCategorie
  );

   

  return (
    <div className=" absolute  min-w-screen min-h-screen bg-gray-300 px-8 py-12">
      <div className="flex justify-center gap-44 mb-10 text-gray-900 font-thin">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategorie(cat)}
            className={`text-4xl font-thin tracking-widest border-b-2  ${
              activeCategorie === cat ? "border-black" : "border-transparent"
            } hover:border-black transition`}
          >
            {cat}
          </button>
        ))}
        <div className="absolute left-[50px] top-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black"  >
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
      </div>
            </div>
        
    )
}

export default BarSection;