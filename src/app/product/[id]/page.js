"use client"
import SpecificCard from "@/app/components/SpecificCard";
import { use } from "react"; 

export default function ProductPage({ params }) {
  const { id } = use(params); 

  return (
    <div className="bg-white">
      <SpecificCard productId={id} />
    </div>
  );
}