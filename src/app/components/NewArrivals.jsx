import Link from "next/link";
import ProductCard from "./ProductCard";
function NewArrivals(){
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
  return (
  <div className="absolute top-[2000px] bg-gray-300 py-16 px-8">
    <h2 className="text-center text-black text-4xl tracking-widest font-light mb-12">
      New Arrivals
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black">
      {Products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
    <div className="pl-168 pt-24">
        <Link href="/View">
        <button className="  w-[150px] h-[50px] bg-black justify-center rounded-xl tracking-widest"> VIEW ALL</button>
         </Link>
    </div>
  </div>
);
}

export default NewArrivals;