import { Metadata } from "next";

type Props = {
  params: {
    productId: React.ReactNode;
  };
};

// export async function generateMetadata (( params ): Props): Promise<Metadata> => {

//     const title = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`iPhone ${params.productId}`)
//         }, 100);
//     });
//     return {
//         title: `Product ${title}`,
//     };
// };

export default function ProductDetails() {
  return (
    <div className="container">
      <h1 className="header text-white">Details about product</h1>
    </div>
  );
}
