"use client"
import SpecificCard from "./SpecificCard";
import {useRouter} from "next/navigation";
export default function ProductCard({ image, title, price, originalPrice, discount,id }) {
      const router = useRouter();

 const handleClick = () => {    
  router.push(`/product/${id}`);
 };
  return (
    <div className="flex flex-col items-center gap-2" onClick={handleClick}>
      {discount && (
        <div className="bg-black text-white text-xs px-2 py-1 mb-1 font-semibold">
          SAVE {discount}%
        </div>
      )}
      
      <img src={image} alt={title} className="w-[260px] h-[360px] object-cover" />
      <div className="text-center text-sm font-light">{title}</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Rs. {price}</span>
        <span className="line-through text-gray-500">Rs. {originalPrice}</span>
      </div>
    </div>
  );
}
