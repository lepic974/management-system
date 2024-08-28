import LucideIcon from "@/components/Icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logoYanipay from "@/assets/images/logo.png";
import Image from "next/image";

const CardItems = [
  {
    id: 1,
    title: "Carrefour",
    icon: "",
    desc: "La carte du magasin",
    points: 1200,
    cahback: "1%",
  },
  {
    id: 2,
    title: "Ravate",
    icon: "",
    desc: "Bricolage et décoration",
    points: 32,
    cahback: "10%",
  },
  {
    id: 3,
    title: "FNAC",
    icon: "",
    desc: "Hight-Tech",
    points: 3500,
    cahback: "5%",
  },
  {
    id: 4,
    title: "Ghanthy",
    icon: "",
    desc: "Prêt à porter",
    points: 10500,
    cahback: "100%",
  }
];

const AccueilPage = () => {

  return (
    <div className="flex w-full h-full justify-center items-center bg-red-300">
      {/* <Navbar /> */}

      <div className="flex flex-col w-full gap-4 p-10">
        <h1 className="flex header">Accueil</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
          <LucideIcon name="landmark" size={18} />
          <LucideIcon name="landmark" size={18} />
          <LucideIcon name="landmark" size={18} />
          <LucideIcon name="landmark" size={18} />

          {CardItems.map((card, i) => (

            <Card key={i}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.desc}</CardDescription>
              </CardHeader>
              <CardContent>
              <Image src={logoYanipay} alt="logo" width={24} height={24} />
                <p>{card.points} Points</p>
              </CardContent>
              <CardFooter>
                <p>{card.cahback} de Cashback</p>
              </CardFooter>
            </Card>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AccueilPage;
