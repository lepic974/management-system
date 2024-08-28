import { Button } from "@/components/ui/button";

export default function DonatePage() {
  return (
    <div className="flex flex-col w-[500px] h-[50vh] items-center justify-center mx-auto bg-red-400">
        <h1 className="header flex text-4xl text-white">Donate Page</h1>
        <Button variant={"default"} className="flex items-center mt-4 mx-auto" >
            Go to Homepage
        </Button> 
    </div> 
    )
}
