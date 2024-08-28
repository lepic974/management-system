import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import React from "react";

const IdentityPage = () => {
  const handleClick = {};

  return (
    <div className="flex flex-col w-[500px] h-[50vh] items-center justify-center mx-auto bg-green-400 rounded-xl">
      <Home className="my-2 text-white" size={28} />
      <h1 className="header flex text-4xl text-white">Identity Page</h1>
      <Button 
        variant={"default"} className="flex items-center mt-4 mx-auto">
        <Home className="my-2 text-white mr-2" size={18} />
        Go to Homepage
      </Button>
    </div>
  );
};

export default IdentityPage;
