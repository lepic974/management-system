export default function DashboardPage() {
  return (
    <>
      <section className="h-screen w-screen flex flex-col">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col md:w-[200px] w-[60px] h-screen border border-2 boder-gray bg-green-300">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Sidebar
            </h2>
            <div className="flex flex-col w-full-h-full mx-auto py-2 px-4">
              <ul>
                <li>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Section
                  </h3>
                  <p>Accueil</p>
                  <p>Store</p>
                  <p>-</p>
                  <p>Tritre-</p>
                  <p>Tritre-</p>
                  <p>Tritre-</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full h-screen">
            <div className="flex h-[100px] w-full border-b border border-gray-300  bg-yellow-300">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Topbar
              </h2>
            </div>

            <div className="flex flex-row w-full h-full">
              <div className="flex flex-col w-full h-full bg-blue-300">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-2 px-2 mb-8">
                  Dashboard
                </h1>

                <div className="flex md:flex-inline flex-wrap w-full h-full justify-center mx-4 gap-4">
                  <div className="w-[150px] h-[100px] border rounded-lg bg-primary-light shadow-lg">Card</div>
                  <div className="w-[150px] h-[100px] border rounded-lg bg-primary-light shadow-lg">Card</div>
                  <div className="w-[150px] h-[100px] border rounded-lg bg-primary-light shadow-lg">Card</div>
                  <div className="w-[150px] h-[100px] border rounded-lg bg-primary-light shadow-lg">Card</div>
                </div>

              </div>

              <div className="md:flex w-[200px] h-full bg-red-300 hidden">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Rightbar
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-[50px] bg-gray-300">Footer</div>
      </section>
    </>
  );
}
