"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface CardProps {
  item: {
    image: string;
    title: string;
    price: number;
    description: string;
  };
}

export default function Card({ item }: CardProps) {
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
    
    try {
      const response = await axios.post("/api/payment", {
        title: item.title,
        price: item.price,
        image: item.image,
      });
      const ResponseData = await response.data;
      console.log(ResponseData);
      window.location.href = ResponseData.url;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative hover:scale-105">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="h-64 w-full rounded-md object-fit"
        />
      </AspectRatio>

      <div className="p-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {item.title}
        </h3>
        {/* <h3 className="text-xl font-semibold mb-2">{item.title}</h3> */}
        <p className="text-white bg-red-500 hover:bg-red-600 rounded-md p-2 absolute top-2 right-2 mb-2">
          {item.price} € / la place
        </p>
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        <Button
          onClick={checkout}
          variant="default"
          size="lg"
          className="bg-green-500 hover:bg-green-700 p-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Acheter"}
        </Button>
      </div>
    </div>
  );
}
