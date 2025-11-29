"use client"
import Navbar from "./Navbar";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";


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
function SpecificCard({ productId }) {
  const [cart,setCart] = useState({})
  const [subTotal,setSubTotal] = useState(0)
const saveCart = (myCart)=>{
  localStorage.setItem("cart",myCart)

}
useEffect(()=>{
  console.log("hey iam useeffect")
  try {
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart"))
      )
    }
  } catch (error) {
    console.error(error);
    localStorage.clear()
  }
  
},[])
const addToCart = (itemCode,qty,price,title)=>{
  let newCart=cart
  if(itemCode in cart){
    newCart[itemCode].qty =cart[itemCode].qty + qty
  }
  else{
    newCart[itemCode]={qty:1,price,title}
  }
  setCart(newCart)
}
const clearCart = () =>{
  setCart({})
  saveCart({})
}
const RemoveToCart = (itemCode,qty,price,title)=>{
  let newCart=cart
  if(itemCode in cart){
    newCart[itemCode].qty =cart[itemCode].qty - qty
  }
  if(newCart[itemCode]["qty"]<=0){
    delete newCart[itemCode]
  }
  saveCart(newCart)
  setCart(newCart)
}

  const product = Products.find((p) => p.id === productId);
  if (!product) return <div className="p-10 text-red-500">Product not found</div>;

  const { image, title, price, originalPrice } = product;
    return (
        <div className=" min-w-screen h-[1200px] bg-gray-300">
            <Navbar color="bg-indigo-100"/>
        <div className="relative text-gray-600 ">
            <div className="absolute top-[180px]">
         <img src={image} alt={title} className="w-[760px] h-[860px] object-cover" />
         </div>
         <div className="absolute top-[200px] left-[1000px]">
       <div className="text-start text-sm text-gray-600 font-thin tracking-widest pb-8"> TRENDY</div>     
      <div className="text-start text-2xl font-light text-black tracking-widest w-[400px] pb-4">{title}</div>
      <div className="flex items-center gap-4 text-sm text-black">
        <span className=" text-2xl font-light text-gray-600 tracking-widest">{price}</span>
        <span className="line-through text-gray-500">{originalPrice}</span>
      </div>
      <div className=" relative pt-8">
        <div className="pb-2 ">
            size:
        </div>
         <div className="flex flex-wrap gap-2 max-w-[420px]" >
        <Button text="Extra-Small" />
        <Button text="Small" />
        <Button text="Medium" />
        <Button text="Large" />
        <Button text="Extra-Large" />
      </div>
      <div className="pt-8 ">
      <div>  
        
      <button className=" w-[420px] h-[40px] border border-black rounded-sm text-sm tracking-widest hover:bg-black hover:text-white transition " 
      onClick={() => addToCart(product)}>
      ADD TO CART
    </button>
  
    </div>
    <div className="pt-4">
     <button className=" w-[420px] h-[40px] border border-black rounded-sm text-sm tracking-widest bg-black text-white  ">
      BUY IT NOW
    </button>
      </div>
      </div>
      <div className=" pt-8 text-black">
    <p className="p-1" ># 100% Premium Biowashed Cotton</p>
    <p className="p-1" ># Elastic Drawstrings Attached</p>
    <p className="p-1" ># Baggy Straight Fit Sweatpants</p>
    <p className="p-1" ># GOTS Organic Cotton Certified</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    )
}

export default SpecificCard;