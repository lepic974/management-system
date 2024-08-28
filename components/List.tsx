import Card from "./Card";

interface Activity {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ListCardProps {
  activity: Activity[];
}

export default function List({ activity }: ListCardProps) {
  return (
    <section>
      <h1 className="scroll-m-20 py-8 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
        Store
      </h1>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
        {activity.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
