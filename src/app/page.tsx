import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getSucus } from "./sucus/sucus.api";
import { SucuCard } from "@/components/sucuCard";

export const dynamic = "force-dynamic";

async function HomePage() {
  const sucus = await getSucus();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Sucupedia</h1>
        <Link href="/sucus/new" className={buttonVariants()}>
          Create product
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sucus.map((sucu: any) => (
          <SucuCard key={sucu.id} sucu={sucu} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
