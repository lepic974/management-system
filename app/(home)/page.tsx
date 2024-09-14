import ExampleComponent from "@/components/ExampleComponent";
import { Footer, Navbar } from "@/components/sections";
import { DesignUI } from "@/components/sections/DesignUI"


export default function Page() {
  // const { data: session, status } = useSession();

  // if (session) {
  //   console.log(session);
  // }

  // if (status === "authenticated") {
  //   return <p>Sign in as {session.user.email}</p>;
  // }
  // return <a href="/api/auth/signin">Sign in</a>;

  return (
    <main>
      <Navbar />
      {/* Section 1 */}
      <div className="flex flex-col h-screen max-w-7xl md:flex-row items-center justify-center p-4 mx-auto scroll-my-100">
        <ExampleComponent />
      </div>

      {/* Section 2 */}
      <DesignUI />
      {/* <Header /> */}
      <Footer />
    </main>
  );
}
