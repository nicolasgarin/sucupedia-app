import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getSucus } from "./sucus/sucus.api";
import { SucuCard } from "@/components/sucuCard";

export const dynamic = "force-dynamic";

async function HomePage() {
  const sucus = await getSucus();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col text-neutral-content text-center">
          <div className="flex justify-between m-10">
            <h1 className="text-4xl font-bold text-violet-200">Sucupedia</h1>
          </div>
          <p className="text-violet-200">Registra y guarda las suculentas de tu colección</p>
        </div>
      </div>
      <div className="container my-10">
        <div className="mb-10">
          <Link href="/sucus/new" className={buttonVariants()}>
            Registrar sucu
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sucus.map((sucu: any) => (
            <SucuCard key={sucu.id} sucu={sucu} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
