import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";
import { LoginButton, LogoutButton } from "../../../components/AuthButtons";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await getAuthSession();

  return (
    <>
      <div className=" flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex w-full h-screen bg-slate-300">
          <div className="flex card">
            <p className="flex">{JSON.stringify(session, null, 2)}</p>
          </div>
          <div className="flex flex-col justify-center items-center m-auto max-w-xl h-auto px-10 ">
            <h1 className="text-6xl font-bold">Bienvenue 🙏</h1>
            <p className="flex w-md text-base py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              recusandae rerum! Architecto fugit reprehenderit, mollitia id odit
              molestias tenetur eius.
            </p>
            <Button
              variant="outline"
              size="lg"
              className=" flex justify-center items-center"
            >
              Dashboard
            </Button>
          </div>
        </div>

        <div className="flex-col items-center">
          {/* <Navbar /> */}
          <div className="flex-col items-center justify-between mb-10">
            <h1 className="header text-white">
              <span className="text-green-700">Welcome all</span>
              <br />
              {session?.user
                ? "Authentificated " + session?.user.name
                : "Not Authentificated"}
            </h1>

            <br />

            <div className="flex w-full">
              <Input type="email" placeholder="Email" />
            </div>

            <br />

            <div className="flex ">
              {session?.user ? <LogoutButton /> : <LoginButton />}
            </div>

            <br />
            <h2>This is the Homepage</h2>
          </div>

          {/* <div className="">
            <Image
              src={bg}
              alt="background application"
              fill
              className="object-cover"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
