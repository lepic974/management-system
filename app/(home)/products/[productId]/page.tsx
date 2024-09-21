import { strict } from "assert";
import { Metadata } from "next";
import { string } from "zod";

type Props = {
  params: {
    productId: React.ReactNode;
  };
};

export const generateMetadata = ({
  params,
}: {
  params: { 
    productId: string
  }
}): Metadata => {

    return {
      title: `Product ${params.productId}`
    }
}


export default function ProductDetails() {
  return (
    <div className="container">
      <h1 className="header text-white">
        Details about product {}

      </h1>
    </div>
  );
}
